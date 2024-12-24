import { useCallback } from 'react';

const useQueryParams = () => {
  const getParsedQueryParam = (queryName: string) => {
    if (typeof window === 'undefined') return [];
    const queryParams = new URLSearchParams(window.location.search);
    const queryParam = queryParams.get(queryName);
    if (!queryParam) return [];

    return queryParam?.split(',');
  };

  const queryItems = getParsedQueryParam('items') as string[];
  const queryAttributes = getParsedQueryParam('attributes') as string[];
  const answers = (() => {
    const ans = getParsedQueryParam('a');
    if (!ans.length) return [];
    return ans.map((a) => a.split('-'));
  })();
  const quizVersionId = getParsedQueryParam('quiz_version_id')[0] as string;
  const isSharedResultsQuery = !!queryItems.length && !!queryAttributes.length;

  const removeSharedResultsQueryParams = useCallback(() => {
    if (typeof window === 'undefined') return;
    const updatedUrl = new URL(window.location.href);
    updatedUrl.searchParams.delete('items');
    updatedUrl.searchParams.delete('attributes');
    updatedUrl.searchParams.delete('quiz_version_id');
    updatedUrl.searchParams.delete('a');

    if (!updatedUrl.searchParams.toString().length) {
      updatedUrl.search = '';
    }

    window.history.replaceState({}, '', updatedUrl.toString());
  }, []);

  return {
    answers,
    quizVersionId,
    queryItems,
    queryAttributes,
    isSharedResultsQuery,
    removeSharedResultsQueryParams,
  };
};

export default useQueryParams;
