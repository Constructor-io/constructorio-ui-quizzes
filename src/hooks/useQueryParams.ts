import { useCallback } from 'react';

const useQueryParams = () => {
  const getParsedQueryParam = (queryName) => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryParam = queryParams.get(queryName);
    if (!queryParam) return [];

    return queryParam?.split(',');
  };

  const queryItems = getParsedQueryParam('items');
  const queryAttributes = getParsedQueryParam('attributes');
  const isSharedResultsQuery = !!queryItems.length && !!queryAttributes.length;

  const removeSharedResultsQueryParams = useCallback(() => {
    const updatedUrl = new URL(window.location.href);
    updatedUrl.searchParams.delete('items');
    updatedUrl.searchParams.delete('attributes');

    if (!updatedUrl.searchParams.toString().length) {
      updatedUrl.search = '';
    }

    window.history.replaceState({}, '', updatedUrl.toString());
  }, []);

  return {
    queryItems,
    queryAttributes,
    isSharedResultsQuery,
    removeSharedResultsQueryParams,
  };
};

export default useQueryParams;
