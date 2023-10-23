import { useCallback } from 'react';

const useQueryParams = () => {
  const queryParams = new URLSearchParams(window.location.search);

  const getQueryParam = (queryName) => {
    const queryParam = queryParams.get(queryName);
    if (!queryParam) return [];

    return queryParam?.split(',');
  };

  const removeQueryParams = useCallback(() => {
    const updatedUrl = new URL(window.location.href);
    updatedUrl.searchParams.delete('items');
    updatedUrl.searchParams.delete('options');

    window.history.replaceState({}, '', updatedUrl.toString());
  }, []);

  const queryItems = getQueryParam('items');
  const queryOptions = getQueryParam('options');
  const isSharedResultsQuery = !!queryItems.length && !!queryOptions.length;

  return { queryItems, queryOptions, isSharedResultsQuery, removeQueryParams };
};

export default useQueryParams;
