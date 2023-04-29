/* eslint-disable max-params */
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { useEffect, useState } from 'react';
import { QuizReducerState } from '../components/CioQuiz/reducer';
import { ResultsPageOptions } from '../components/Results/Results';
import { RequestStates } from '../constants';
import { NextQuestionResponse, QuizResultsResponse } from '../types';
import { getNextQuestion, getQuizResults } from '../utils';
import useCioClient from './useCioClient';

const useFetchQuiz = (
  quizId: string,
  state: QuizReducerState,
  resultsPageOptions: ResultsPageOptions,
  quizVersionIdProp: string | undefined,
  apiKey?: string,
  cioJsClient?: ConstructorIOClient
) => {
  const cioClient = useCioClient({ apiKey, cioJsClient });
  const [requestState, setRequestState] = useState(RequestStates.Stale);
  const [questionResponse, setQuestionResponse] = useState<NextQuestionResponse>();
  const [resultsResponse, setResultsResponse] = useState<QuizResultsResponse>();
  const [firstQuestion, setFirstQuestion] = useState<NextQuestionResponse>();
  const [quizVersionId, setQuizVersionId] = useState(quizVersionIdProp || '');
  const [quizSessionId, setQuizSessionId] = useState('');
  const isFirstQuestion = firstQuestion?.next_question.id === questionResponse?.next_question.id;

  useEffect(() => {
    (async () => {
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

  return {
    resetQuizSessionId,
    questionResponse,
    resultsResponse,
    isFirstQuestion,
    requestState,
    cioClient,
  };
};

export default useFetchQuiz;
