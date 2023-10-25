import { useCallback } from 'react';

const useQueryParams = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const getParsedQueryParam = (queryName) => {
    const queryParam = queryParams.get(queryName);
    if (!queryParam) return [];

    return queryParam?.split(',');
  };

  const queryItems = getParsedQueryParam('items');
  const queryAttributes = getParsedQueryParam('attributes');
  const quizBasePath = queryParams.get('quizBasePath');
  const isSharedResultsQuery = !!queryItems.length && !!queryAttributes.length;

  const removeSharedResultsQueryParams = useCallback(() => {
    const updatedUrl = new URL(quizBasePath ?? window.location.href);
    updatedUrl.searchParams.delete('items');
    updatedUrl.searchParams.delete('attributes');
    updatedUrl.searchParams.delete('quizBasePath');

    if (!updatedUrl.searchParams.toString().length) {
      updatedUrl.search = '';
    }

    window.history.replaceState({}, '', updatedUrl.toString());
  }, [quizBasePath]);

  return {
    queryItems,
    queryAttributes,
    isSharedResultsQuery,
    quizBasePath,
    removeSharedResultsQueryParams,
  };
};

export default useQueryParams;
