/* eslint-disable max-params */
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { useEffect, useReducer } from 'react';
import {
  ActionAnswerQuestion,
  QuestionTypes,
  QuizAPIActionTypes,
} from '../components/CioQuiz/actions';
import apiReducer, { initialState } from '../components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../components/CioQuiz/quizLocalReducer';
import { nextQuestion, getQuizResults } from '../services';
import { ResultsPageOptions } from '../types';

const useFetchQuiz = (
  quizId: string,
  quizLocalState: QuizLocalReducerState,
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>,
  resultsPageOptions: ResultsPageOptions,
  quizVersionIdProp: string | undefined,
  cioClient: ConstructorIOClient
) => {
  const [quizApiState, dispatch] = useReducer(apiReducer, initialState);
  const firstQuestionId = quizApiState.quizFirstQuestion?.next_question.id;
  const currentQuestionId = quizApiState.quizCurrentQuestion?.next_question.id;
  const isFirstQuestion = firstQuestionId === currentQuestionId;

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
            quizVersionId: quizLocalState.quizVersionId,
            quizSessionId: quizLocalState.quizSessionId,
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
          const quizVersionId = quizLocalState.quizVersionId || quizVersionIdProp;
          const { quizSessionId } = quizLocalState;

          const questionResult = await nextQuestion(cioClient, quizId, {
            answers: quizLocalState.answers,
            quizVersionId,
            quizSessionId,
          });

          // Update quizSessionId, quizVersionId
          if (
            (!quizSessionId && questionResult?.quiz_session_id) ||
            (!quizVersionId && questionResult.quiz_version_id)
          ) {
            dispatchLocalState({
              type: QuestionTypes.Hydrate,
              payload: {
                quizVersionId: questionResult?.quiz_version_id,
                quizSessionId: questionResult?.quiz_session_id,
              },
            });
          }

          // Set current question state
          dispatch({
            type: QuizAPIActionTypes.SET_CURRENT_QUESTION,
            payload: {
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
    quizLocalState.answers,
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
