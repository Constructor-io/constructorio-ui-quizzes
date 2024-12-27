import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { useEffect, useReducer } from 'react';
import {
  ActionAnswerQuestion,
  ActionQuizAPI,
  QuestionTypes,
  QuizAPIActionTypes,
} from '../../components/CioQuiz/actions';
import apiReducer, {
  initialState,
  QuizAPIReducerState,
} from '../../components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../components/CioQuiz/quizLocalReducer';
import {
  getNextQuestion,
  getQuizResults,
  getBrowseResultsForItemIds,
  getQuizResultsConfig,
} from '../../services';
import { IQuizProps } from '../../types';
import useQueryParams from '../useQueryParams';

type UseQuizApiState = (
  quizOptions: IQuizProps,
  cioClient: ConstructorIOClient,
  quizLocalState: QuizLocalReducerState,
  skipToResults: boolean,
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>
) => { quizApiState: QuizAPIReducerState; dispatchApiState: React.Dispatch<ActionQuizAPI> };

const useQuizApiState: UseQuizApiState = (
  quizOptions,
  cioClient,
  quizLocalState,
  skipToResults,
  dispatchLocalState
  // eslint-disable-next-line max-params
) => {
  const [quizApiState, dispatchApiState] = useReducer(apiReducer, initialState);
  const { quizId, quizVersionId: quizVersionIdProp, resultsPageOptions } = quizOptions;
  const {
    queryItems,
    queryAttributes,
    isSharedResultsQuery,
    answers,
    quizVersionId: quizVersionIdFromParam,
  } = useQueryParams();
  const dispatchQuizResults = async () => {
    try {
      const quizResults = await getQuizResults(cioClient, quizId, {
        answers: quizLocalState.answers,
        resultsPerPage: resultsPageOptions?.numResultsToDisplay,
        quizVersionId: quizLocalState.quizVersionId,
        quizSessionId: quizLocalState.quizSessionId,
        ...resultsPageOptions?.requestConfigs,
      });
      // Set quiz results state
      dispatchApiState({
        type: QuizAPIActionTypes.SET_QUIZ_RESULTS,
        payload: {
          quizResults,
        },
      });
      if (!quizLocalState.isQuizCompleted)
        dispatchLocalState({
          type: QuestionTypes.Complete,
        });
    } catch (error) {
      dispatchApiState({
        type: QuizAPIActionTypes.SET_IS_ERROR,
      });
    }
  };

  const dispatchQuizResultsConfig = async () => {
    try {
      const quizResultsConfig = await getQuizResultsConfig(cioClient, quizId, {
        quizVersionId: quizLocalState.quizVersionId,
      });
      dispatchApiState({
        type: QuizAPIActionTypes.SET_QUIZ_RESULTS_CONFIG,
        payload: { quizResultsConfig },
      });
    } catch (error) {
      dispatchApiState({
        type: QuizAPIActionTypes.SET_QUIZ_RESULTS_CONFIG_ERROR,
        payload: { quizResultsConfigError: null },
      });
    }
  };

  const dispatchSharedQuizResults = async () => {
    try {
      let quizResults;
      if (quizVersionIdFromParam && answers && answers.length) {
        try {
          quizResults = await getQuizResults(cioClient, quizId, {
            answers,
            resultsPerPage: resultsPageOptions?.numResultsToDisplay,
            quizVersionId: quizVersionIdFromParam,
            ...resultsPageOptions?.requestConfigs,
          });
        } catch (error) {
          quizResults = await getBrowseResultsForItemIds(cioClient, queryItems);
        }
      } else {
        quizResults = await getBrowseResultsForItemIds(cioClient, queryItems);
      }

      dispatchApiState({
        type: QuizAPIActionTypes.SET_QUIZ_SHARED_RESULTS,
        payload: { quizResults: { ...quizResults, attributes: queryAttributes } },
      });
    } catch (error) {
      dispatchApiState({
        type: QuizAPIActionTypes.SET_IS_ERROR,
      });
    }
  };

  useEffect(() => {
    if (typeof quizApiState.resultsConfig === 'undefined') dispatchQuizResultsConfig();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizApiState.resultsConfig]);

  useEffect(() => {
    (async () => {
      dispatchApiState({
        type: QuizAPIActionTypes.SET_IS_LOADING,
      });
      if (isSharedResultsQuery) {
        await dispatchSharedQuizResults();
      } else if (skipToResults && quizLocalState.answers.length) {
        await dispatchQuizResults();
      } else if (!skipToResults) {
        try {
          const quizVersionId = quizLocalState.quizVersionId || quizVersionIdProp;
          const { quizSessionId } = quizLocalState;

          const questionResult = await getNextQuestion(cioClient, quizId, {
            answers: quizLocalState.answers,
            quizVersionId,
            quizSessionId,
          });

          if (!questionResult.next_question) {
            await dispatchQuizResults();
            return;
          }
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
          dispatchApiState({
            type: QuizAPIActionTypes.SET_CURRENT_QUESTION,
            payload: {
              quizCurrentQuestion: questionResult,
            },
          });
        } catch (error) {
          dispatchApiState({
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
    resultsPageOptions?.numResultsToDisplay,
    isSharedResultsQuery,
  ]);

  return {
    quizApiState,
    dispatchApiState,
  };
};

export default useQuizApiState;
