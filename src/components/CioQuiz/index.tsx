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

export interface IQuizProps {
  quizId: string;
  apiKey: string;
}

export default function CioQuiz(props: IQuizProps) {
  const { quizId, apiKey } = props;
  const cioClient = useCioClient({ apiKey }) as any;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [questionResponse, setQuestionResponse] = useState<NextQuestionResponse>();
  const [resultsResponse, setResultsResponse] = useState<any>();
  const [showResults, setShowResults] = useState<boolean>(false);
  const [requestState, setRequestState] = useState(RequestStates.Stale);
  const questionType = questionResponse?.next_question?.type;
  const isOpenQuestion = questionType === QuestionTypes.OpenText;
  const isCoverQuestion = questionType === QuestionTypes.Cover;
  const isSingleQuestion = questionType === QuestionTypes.SingleSelect;
  const isMultipleQuestion = questionType === QuestionTypes.MultipleSelect;
  const isSelectQuestion = isSingleQuestion || isMultipleQuestion;

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

  const contextValue = useMemo(
    () => ({
      dispatch,
      questionResponse,
      state,
      resultsResponse,
      setShowResults,
      quizNextHandler,
      onBackClick: () => {
        if (dispatch) {
          dispatch({ type: QuestionTypes.Back });
        }
      },
      requestState
    }),
    [
      state,
      dispatch,
      questionResponse,
      resultsResponse,
      setShowResults,
      requestState,
      quizNextHandler
    ]
  );

  /* const quizBackHandler = (popAnswers: boolean) => {
    // back handler for a back button. Passing true will pop the latest answers. Should be true unless on result page.
    dispatch({ type: QuestionTypes.Back, payload: popAnswers });
    setShowResults(false);
  }; */

  useEffect(() => {
    setRequestState(RequestStates.Loading);

    if (showResults) {
      setResultsResponse(undefined); // set undefined in cases where user redoes quiz, gets no results.

      cioClient?.quizzes
        ?.getQuizResults(quizId, { answers: state.answers })
        .then((response: any) => {
          if (response?.result?.results_url) {
            return fetch(response?.result.results_url);
          }

          return null;
        })
        .then((response: Response) => response.json())
        .then((e: any) => {
          setResultsResponse(e);
          setRequestState(RequestStates.Success);
        })
        .catch(() => {
          setResultsResponse(undefined);
          setRequestState(RequestStates.Error);
        });
    } else {
      cioClient?.quizzes.getQuizNextQuestion(quizId, { answers: state.answers }).then((e: any) => {
        setQuestionResponse(e);
        setRequestState(RequestStates.Success);
      });
    }
  }, [cioClient, state, showResults, quizId, questionResponse?.is_last_question]);

  if (showResults && requestState !== RequestStates.Loading) {
    return (
      <QuizContext.Provider value={contextValue}>
        <ResultContainer />
      </QuizContext.Provider>
    );
  }

  if (requestState !== RequestStates.Loading) {
    return (
      <QuizContext.Provider value={contextValue}>
        {isOpenQuestion && <OpenTextQuestion key={questionResponse?.next_question.id} />}
        {isCoverQuestion && <CoverTypeQuestion key={questionResponse?.next_question.id} />}
        {isSelectQuestion && <SelectTypeQuestion key={questionResponse?.next_question.id} />}
      </QuizContext.Provider>
    );
  }

  return null;
}
