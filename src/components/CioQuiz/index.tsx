import { useReducer, useState, useEffect, useCallback, useMemo } from 'react';
import QuizContext from './context';
import reducer, { initialState } from './reducer';
import { ActionAnswerQuestion, QuestionTypes } from './actions';
import { NextQuestionResponse } from '../../types';
import QuizQuestions from '../QuizQuestions';
import ResultContainer from '../ResultContainer/ResultContainer';
import { RequestStates } from '../../constants';
import { getCioClient, getNextQuestion, getQuizResults } from '../../utils';
import './quiz.css';

export interface IQuizProps {
  quizId: string;
  apiKey: string;
}

export default function CioQuiz(props: IQuizProps) {
  const { quizId, apiKey } = props;
  const cioClient = useMemo(() => getCioClient(apiKey), [apiKey]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [requestState, setRequestState] = useState(RequestStates.Stale);
  const [questionResponse, setQuestionResponse] = useState<NextQuestionResponse>();
  const [resultsResponse, setResultsResponse] = useState<any>();
  const [firstQuestion, setFirstQuestion] = useState<NextQuestionResponse>();
  const isFirstQuestion = firstQuestion?.next_question.id === questionResponse?.next_question.id;

  const quizNextHandler = useCallback(
    (action?: ActionAnswerQuestion) => {
      if (action) {
        dispatch(action);
      }
    },
    [dispatch]
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
    isFirstQuestion,
    quizNextHandler,
    quizBackHandler
  };

  useEffect(() => {
    (async () => {
      setResultsResponse(undefined);
      setQuestionResponse(undefined);
      if (state.isLastAnswer) {
        try {
          const quizResults = await getQuizResults(cioClient, quizId, state.answers);
          setResultsResponse(quizResults);
          setRequestState(RequestStates.Success);
        } catch (error) {
          setResultsResponse(undefined);
          setRequestState(RequestStates.Error);
        }
      } else {
        try {
          const questionResult = await getNextQuestion(cioClient, quizId, state.answers);
          setQuestionResponse(questionResult);
          setRequestState(RequestStates.Success);
        } catch (error) {
          setRequestState(RequestStates.Error);
        }
      }
    })();
  }, [cioClient, state, quizId, state.isLastAnswer]);

  useEffect(() => {
    if (!firstQuestion) {
      setFirstQuestion(questionResponse);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionResponse]);

  if (requestState === RequestStates.Success) {
    return (
      <div className='cio-quiz'>
        <QuizContext.Provider value={contextValue}>
          {resultsResponse && <ResultContainer />}
          {questionResponse && <QuizQuestions questionResponse={questionResponse} />}
        </QuizContext.Provider>
      </div>
    );
  }
}
