/* eslint-disable @typescript-eslint/naming-convention */
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import {
  QuizzesParameters,
  QuizzesResultsParameters,
  NextQuestionResponse,
  QuizResultsResponse,
  QuizResultDataPartial,
} from '../types';
import packageJSON from '../../package.json';

export const getCioClient = (apiKey?: string) => {
  if (apiKey) {
    return new ConstructorIOClient({
      apiKey,
      sendTrackingEvents: true,
      version: `cio-ui-quizzes-${packageJSON.version}`,
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

  const items = response?.results?.map((result) => ({
    itemId: result?.data?.id,
    variationId: result?.data?.variation_id,
    itemName: result?.value,
  }))!;

  cioClient?.tracker.trackQuizResultsLoaded({
    quizId: quiz_id,
    quizVersionId: quiz_version_id,
    quizSessionId: quiz_session_id,
    url: window.location.href,
    section: request?.section,
    resultCount: response?.total_num_results,
    resultPage: request?.page,
    resultId: result_id,
    items,
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
      quizId: quiz_id,
      quizVersionId: quiz_version_id,
      quizSessionId: quiz_session_id,
      itemId: result.data?.id,
      itemName: result?.value,
      section,
      resultCount: total_num_results,
      resultPage: page,
      resultId: result_id,
      resultPositionOnPage: position,
      numResultsPerPage: num_results_per_page,
    });
  }
};

export const trackQuizConversion = (
  cioClient: ConstructorIOClient,
  quizResults: QuizResultsResponse,
  result: QuizResultDataPartial,
  price?: number,
  type?: string
  // eslint-disable-next-line max-params
) => {
  if (quizResults.request) {
    const {
      quiz_id,
      quiz_session_id,
      quiz_version_id,
      request: { section },
    } = quizResults;

    cioClient?.tracker.trackQuizConversion({
      quizId: quiz_id,
      quizVersionId: quiz_version_id,
      quizSessionId: quiz_session_id,
      itemId: result.data?.id,
      itemName: result.value,
      section,
      variationId: result.data?.variation_id,
      revenue: (price && String(price)) || undefined,
      type,
    });
  }
};
