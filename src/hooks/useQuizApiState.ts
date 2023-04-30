/* eslint-disable max-params */
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { useEffect, useReducer } from 'react';
import { QuizAPIActionTypes } from '../components/CioQuiz/actions';
import apiReducer, { initialState } from '../components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../components/CioQuiz/quizLocalReducer';
import { ResultsPageOptions } from '../components/Results/Results';
import { getNextQuestion, getQuizResults } from '../utils';
import useCioClient from './useCioClient';

const useFetchQuiz = (
  quizId: string,
  quizLocalState: QuizLocalReducerState,
  resultsPageOptions: ResultsPageOptions,
  quizVersionIdProp: string | undefined,
  apiKey?: string,
  cioJsClient?: ConstructorIOClient
) => {
  const cioClient = useCioClient({ apiKey, cioJsClient });
  const [quizApiState, dispatch] = useReducer(apiReducer, initialState);
  const isFirstQuestion =
    quizApiState.quizFirstQuestion?.next_question.id ===
    quizApiState.quizCurrentQuestion?.next_question.id;

  useEffect(() => {
    (async () => {
      dispatch({
        type: QuizAPIActionTypes.SET_IS_LOADING,
      });
      if (quizLocalState.isLastAnswer) {
        try {
          const quizResults = await getQuizResults(cioClient, quizId, {
            answers: quizLocalState.answers,
            resultsPerPage: resultsPageOptions?.numResultsToDisplay,
            quizVersionId: quizApiState.quizVersionId,
            quizSessionId: quizApiState.quizSessionId,
          });
          // Set quiz results state
          dispatch({
            type: QuizAPIActionTypes.SET_QUIZ_RESULTS,
            payload: {
              quizResults,
            },
          });
        } catch (error) {
          dispatch({
            type: QuizAPIActionTypes.SET_IS_ERROR,
          });
        }
      } else {
        try {
          let quizVersionId = quizApiState.quizVersionId || quizVersionIdProp;
          let { quizSessionId } = quizApiState;

          const questionResult = await getNextQuestion(cioClient, quizId, {
            answers: quizLocalState.answers,
            quizVersionId,
            quizSessionId,
          });

          if (!quizVersionId && questionResult?.quiz_version_id) {
            quizVersionId = questionResult.quiz_version_id;
          }

          if (!quizSessionId && questionResult?.quiz_session_id) {
            quizSessionId = questionResult.quiz_session_id;
          }
          // Set current question state
          dispatch({
            type: QuizAPIActionTypes.SET_CURRENT_QUESTION,
            payload: {
              quizSessionId,
              quizVersionId,
              quizCurrentQuestion: questionResult,
            },
          });
        } catch (error) {
          dispatch({
            type: QuizAPIActionTypes.SET_IS_ERROR,
          });
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    cioClient,
    quizId,
    quizLocalState,
    quizLocalState.isLastAnswer,
    resultsPageOptions?.numResultsToDisplay,
  ]);

  const resetQuizApiState = () => {
    dispatch({ type: QuizAPIActionTypes.RESET_QUIZ });
  };

  return {
    cioClient,
    quizApiState,
    isFirstQuestion,
    resetQuizApiState,
  };
};

export default useFetchQuiz;
