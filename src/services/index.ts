/* eslint-disable @typescript-eslint/naming-convention */
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import {
  QuizzesParameters,
  QuizzesResultsParameters,
  NextQuestionResponse,
  QuizResultsResponse,
  QuizResultDataPartial,
} from '../types';

export const getCioClient = (apiKey?: string) => {
  if (apiKey) {
    return new ConstructorIOClient({
      apiKey,
      sendTrackingEvents: true,
    });
  }

  return undefined;
};

export const getNextQuestion = (
  cioClient: ConstructorIOClient,
  quizId: string,
  parameters: QuizzesParameters
): Promise<NextQuestionResponse> => cioClient?.quizzes.getQuizNextQuestion(quizId, parameters);

export const getQuizResults = async (
  cioClient: ConstructorIOClient,
  quizId: string,
  parameters: QuizzesResultsParameters
): Promise<QuizResultsResponse> => cioClient?.quizzes.getQuizResults(quizId, parameters);

// Tracking requests
export const trackQuizResultsLoaded = (
  cioClient: ConstructorIOClient,
  quizResults: QuizResultsResponse
) => {
  const { quiz_id, quiz_session_id, quiz_version_id, result_id, request, response } = quizResults;

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
};

export const trackQuizResultClick = (
  cioClient: ConstructorIOClient,
  quizResults: QuizResultsResponse,
  result: QuizResultDataPartial,
  position: number
) => {
  if (quizResults.request && quizResults.response) {
    const {
      quiz_id,
      quiz_session_id,
      quiz_version_id,
      result_id,
      request: { section, page, num_results_per_page },
      response: { total_num_results },
    } = quizResults;

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
};

export const trackQuizConversion = (
  cioClient: ConstructorIOClient,
  quizResults: QuizResultsResponse,
  result: QuizResultDataPartial,
  price?: number
) => {
  if (quizResults.request) {
    const {
      quiz_id,
      quiz_session_id,
      quiz_version_id,
      request: { section },
    } = quizResults;

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
};
