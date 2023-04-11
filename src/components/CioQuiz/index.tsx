import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import React, { useReducer, useState, useEffect, useCallback } from 'react';
import QuizContext from './context';
import reducer, { initialState } from './reducer';
import { ActionAnswerQuestion, QuestionTypes } from './actions';
import { NextQuestionResponse, QuizResultsResponse } from '../../types';
import QuizQuestions from '../QuizQuestions';
import ResultContainer from '../ResultContainer/ResultContainer';
import { ResultsProps } from '../Results/Results';
import { RequestStates } from '../../constants';
import { getNextQuestion, getQuizResults } from '../../utils';
import Spinner from '../Spinner/Spinner';
import useCioClient from '../../hooks/useCioClient';

export interface ResultsPageOptions extends ResultsProps {
  numResultsToDisplay?: number;
}

export interface IQuizProps {
  quizId: string;
  apiKey?: string;
  cioJsClient?: ConstructorIOClient;
  resultsPageOptions: ResultsPageOptions;
  quizVersionId?: string;
}

export default function CioQuiz(props: IQuizProps) {
  const {
    quizId,
    apiKey,
    cioJsClient,
    resultsPageOptions,
    quizVersionId: quizVersionIdProp,
  } = props;

  if (!quizId) {
    // eslint-disable-next-line no-console
    console.error('quizId is a required field of type string');
  }

  const cioClient = useCioClient({ apiKey, cioJsClient });
  const [state, dispatch] = useReducer(reducer, initialState);
  const [requestState, setRequestState] = useState(RequestStates.Stale);
  const [questionResponse, setQuestionResponse] = useState<NextQuestionResponse>();
  const [resultsResponse, setResultsResponse] = useState<QuizResultsResponse>();
  const [firstQuestion, setFirstQuestion] = useState<NextQuestionResponse>();
  const [quizVersionId, setQuizVersionId] = useState(quizVersionIdProp || '');
  const [quizSessionId, setQuizSessionId] = useState('');
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
    quizBackHandler,
  };

  useEffect(() => {
    (async () => {
      if (cioClient) {
        setRequestState(RequestStates.Loading);
        if (state.isLastAnswer) {
          try {
            const quizResults = await getQuizResults(cioClient, quizId, {
              answers: state.answers,
              resultsPerPage: resultsPageOptions?.numResultsToDisplay,
              quizVersionId,
              quizSessionId,
            });
            setResultsResponse(quizResults);
            setRequestState(RequestStates.Success);
            setQuestionResponse(undefined);
          } catch (error) {
            setResultsResponse(undefined);
            setRequestState(RequestStates.Error);
          }
        } else {
          try {
            const questionResult = await getNextQuestion(cioClient, quizId, {
              answers: state.answers,
              quizVersionId,
              quizSessionId,
            });
            setQuestionResponse(questionResult);
            setRequestState(RequestStates.Success);
            setResultsResponse(undefined);

            if (!quizVersionId && questionResult?.quiz_version_id) {
              setQuizVersionId(questionResult.quiz_version_id);
            }

            if (!quizSessionId && questionResult?.quiz_session_id) {
              setQuizSessionId(questionResult.quiz_session_id);
            }
          } catch (error) {
            setRequestState(RequestStates.Error);
          }
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cioClient, state, quizId, state.isLastAnswer, resultsPageOptions?.numResultsToDisplay]);

  useEffect(() => {
    if (!firstQuestion) {
      setFirstQuestion(questionResponse);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionResponse]);

  const resetQuizSessionId = () => {
    setQuizSessionId('');
  };

  if (requestState === RequestStates.Loading) {
    return (
      <div className='cio-quiz'>
        <Spinner />
      </div>
    );
  }

  if (requestState === RequestStates.Success) {
    return (
      <div className='cio-quiz'>
        <QuizContext.Provider value={contextValue}>
          {resultsResponse && (
            <ResultContainer options={resultsPageOptions} resetQuizSessionId={resetQuizSessionId} />
          )}
          {questionResponse && <QuizQuestions questionResponse={questionResponse} />}
        </QuizContext.Provider>
      </div>
    );
  }
  return null;
}
