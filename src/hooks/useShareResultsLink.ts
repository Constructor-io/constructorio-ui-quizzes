import { QuizReturnState } from '../types';

export default function useShareResultsLink(
  quizState: QuizReturnState['quiz'],
  answers: string[][]
) {
  if (typeof window === 'undefined') {
    return '';
  }

  const urlObj = new URL(window.location.href);
  const existingParams = urlObj.searchParams;

  if (!quizState.results?.response?.results) {
    throw new Error("Can't generate share link without results");
  }

  existingParams.set(
    'items',
    quizState.results.response.results
      .filter((item) => item.data?.id)
      .map((item) => item.data!.id)
      .join(',') || ''
  );
  existingParams.set(
    'attributes',
    quizState.selectedOptionsWithAttributes?.map((option) => option).join(',') || ''
  );

  if (quizState.versionId) {
    existingParams.set('quiz_version_id', quizState.versionId);
  }

  if (answers && answers.length) {
    existingParams.set('a', answers.map((ans) => ans.join('-')).join(',') || '');
  }

  const value = urlObj.toString();

  return value;
}
