/* eslint-disable max-params */
/* eslint-disable @typescript-eslint/naming-convention */
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { GetBrowseResultsResponseData } from '@constructor-io/constructorio-client-javascript/lib/types';
import { useCallback, useEffect } from 'react';
import { ActionAnswerQuestion, QuestionTypes } from '../components/CioQuiz/actions';
import { QuizAPIReducerState } from '../components/CioQuiz/quizApiReducer';
import { ResultsPageOptions } from '../components/Results/Results';
import { isFunction } from '../utils';

const useQuizTrackingAndCbEvents = (
  cioClient: ConstructorIOClient,
  quizApiState: QuizAPIReducerState,
  resultsPageOptions: ResultsPageOptions,
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>
) => {
  const { onAddToCartClick, onQuizResultClick, onQuizResultsLoaded } = resultsPageOptions;
  // Quiz Next button click
  const quizNextHandler = useCallback(
    (payload?: any) => {
      switch (quizApiState.quizCurrentQuestion?.next_question.type) {
        case QuestionTypes.Cover:
          dispatchLocalState({
            type: QuestionTypes.Cover,
            payload: {
              isLastQuestion: quizApiState?.quizCurrentQuestion?.is_last_question,
            },
          });
          break;
        case QuestionTypes.OpenText:
          dispatchLocalState({
            type: QuestionTypes.OpenText,
            payload: {
              questionId: quizApiState?.quizCurrentQuestion.next_question.id,
              input: payload,
              isLastQuestion: quizApiState?.quizCurrentQuestion.is_last_question,
            },
          });
          break;
        case QuestionTypes.SingleSelect:
        case QuestionTypes.MultipleSelect:
          dispatchLocalState({
            type:
              quizApiState?.quizCurrentQuestion.next_question.type === QuestionTypes.SingleSelect
                ? QuestionTypes.SingleSelect
                : QuestionTypes.MultipleSelect,
            payload: {
              questionId: quizApiState?.quizCurrentQuestion.next_question.id,
              input: payload,
              isLastQuestion: quizApiState?.quizCurrentQuestion.is_last_question,
            },
          });
          break;

        default:
          break;
      }
    },
    [quizApiState, dispatchLocalState]
  );

  const quizBackHandler = useCallback(() => {
    if (dispatchLocalState) {
      dispatchLocalState({ type: QuestionTypes.Back });
    }
  }, [dispatchLocalState]);

  // Quiz result add to cart tracking event
  const addToCartClickHandler = useCallback(
    (
      e: React.MouseEvent<HTMLElement>,
      result: Partial<GetBrowseResultsResponseData>,
      price: any
    ) => {
      e.preventDefault();

      if (
        quizApiState?.quizResults &&
        quizApiState?.quizResults.request &&
        quizApiState?.quizResults.response
      ) {
        const {
          quiz_id,
          quiz_session_id,
          quiz_version_id,
          request: { section },
        } = quizApiState.quizResults;

        cioClient?.tracker.trackQuizConversion({
          quiz_id,
          quiz_version_id,
          quiz_session_id,
          item_id: result.data?.id,
          item_name: result.value,
          section,
          variation_id: result.data?.variation_id,
          revenue: (price && String(price)) || undefined,
        });
      }

      // User custom callback function
      if (isFunction(onAddToCartClick)) {
        e.stopPropagation();
        onAddToCartClick(result);
      }
    },
    [quizApiState, cioClient, onAddToCartClick]
  );

  // Quiz result click tracking event
  const resultClickHandler = useCallback(
    (result: Partial<GetBrowseResultsResponseData>, position: number) => {
      if (
        quizApiState?.quizResults &&
        quizApiState?.quizResults.request &&
        quizApiState?.quizResults.response
      ) {
        const {
          quiz_id,
          quiz_session_id,
          quiz_version_id,
          result_id,
          request: { section, page, num_results_per_page },
          response: { total_num_results },
        } = quizApiState.quizResults;

        cioClient?.tracker.trackQuizResultClick({
          quiz_id,
          quiz_version_id,
          quiz_session_id,
          item_id: result.data?.id,
          item_name: result?.value,
          section,
          result_count: total_num_results,
          result_page: page,
          result_id,
          result_position_on_page: position,
          num_results_per_page,
        });
      }

      // User custom callback function
      if (onQuizResultClick && isFunction(onQuizResultClick)) {
        onQuizResultClick(result, position);
      }
    },
    [quizApiState, cioClient, onQuizResultClick]
  );

  // Quiz results loaded
  useEffect(() => {
    if (quizApiState.quizResults) {
      // User custom callback function
      if (onQuizResultsLoaded && isFunction(onQuizResultsLoaded)) {
        onQuizResultsLoaded(quizApiState.quizResults);
      }

      // Tracking call
      const { quiz_id, quiz_session_id, quiz_version_id, result_id, request, response } =
        quizApiState.quizResults;

      cioClient?.tracker.trackQuizResultsLoaded({
        quiz_id,
        quiz_version_id,
        quiz_session_id,
        url: window.location.href,
        section: request?.section,
        result_count: response?.total_num_results,
        result_page: request?.page,
        result_id,
      });
    }
  }, [quizApiState, cioClient, onQuizResultClick, onQuizResultsLoaded]);

  return {
    addToCartClickHandler,
    resultClickHandler,
    quizNextHandler,
    quizBackHandler,
  };
};

export default useQuizTrackingAndCbEvents;
