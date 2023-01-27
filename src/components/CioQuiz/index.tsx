import { useReducer, useState, useMemo, useEffect, useCallback } from 'react';
import useCioClient from '../../hooks/useCioClient';
import OpenTextQuestion from '../OpenTextTypeQuestion/OpenTextTypeQuestion';
import QuizContext from './context';
import CoverTypeQuestion from '../CoverTypeQuestion/CoverTypeQuestion';
import SelectTypeQuestion from '../SelectTypeQuestion/SelectTypeQuestion';
import reducer, { initialState } from './reducer';
import { ActionAnswerQuestion, QuestionTypes } from './actions';
import { NextQuestionResponse } from '../../types';
import ResultContainer from '../ResultContainer/ResultContainer';
import './quiz.css';
import { RequestStates } from '../../constants';
import { getNextQuestion, getQuestionTypes, getQuizResults } from '../../utils';

export interface IQuizProps {
  quizId: string;
  apiKey: string;
}

export default function CioQuiz(props: IQuizProps) {
  const { quizId, apiKey } = props;
  const cioClient = useCioClient({ apiKey }) as any;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [requestState, setRequestState] = useState(RequestStates.Stale);
  const [questionResponse, setQuestionResponse] = useState<NextQuestionResponse>();
  const [resultsResponse, setResultsResponse] = useState<any>();
  const [showResults, setShowResults] = useState<boolean>(false);
  const questionTypes = getQuestionTypes(questionResponse?.next_question?.type);

  const quizNextHandler = useCallback(
    (action?: ActionAnswerQuestion) => {
      if (action) {
        dispatch(action);
      }

      if (questionResponse?.is_last_question) {
        setShowResults!(true);
      }
    },
    [dispatch, setShowResults, questionResponse]
  );

  const quizBackHandler = useCallback(() => {
    if (dispatch) {
      dispatch({ type: QuestionTypes.Back });
    }
  }, [dispatch]);

  const contextValue = {
    dispatch,
    questionResponse,
    state,
    resultsResponse,
    setShowResults,
    quizNextHandler,
    quizBackHandler,
    requestState
  };

  useEffect(() => {
    (async () => {
      if (showResults) {
        setResultsResponse(undefined); // set undefined in cases where user redoes quiz, gets no results.
        try {
          const quizResults = await getQuizResults(cioClient, quizId, state.answers);
          setResultsResponse(quizResults);
          setRequestState(RequestStates.Success);
        } catch (error) {
          setResultsResponse(undefined);
          setRequestState(RequestStates.Error);
        }
      } else if (!questionResponse?.is_last_question) {
        try {
          const questionResult = await getNextQuestion(cioClient, quizId, state.answers);
          setQuestionResponse(questionResult);
          setRequestState(RequestStates.Success);
        } catch (error) {
          setRequestState(RequestStates.Error);
        }
      }
    })();
  }, [cioClient, state, showResults, quizId, questionResponse?.is_last_question]);

  if (showResults && requestState !== RequestStates.Loading) {
    return (
      <div className='cio-quiz'>
        <QuizContext.Provider value={contextValue}>
          <ResultContainer />
        </QuizContext.Provider>
      </div>
    );
  }

  if (requestState !== RequestStates.Loading) {
    return (
      <QuizContext.Provider value={contextValue}>
        {questionTypes.isOpenQuestion && (
          <OpenTextQuestion key={questionResponse?.next_question.id} />
        )}
        {questionTypes.isCoverQuestion && (
          <CoverTypeQuestion key={questionResponse?.next_question.id} />
        )}
        {questionTypes.isSelectQuestion && (
          <SelectTypeQuestion key={questionResponse?.next_question.id} />
        )}
      </QuizContext.Provider>
    );
  }
}
