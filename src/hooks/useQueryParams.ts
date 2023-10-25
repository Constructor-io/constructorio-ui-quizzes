import { useCallback } from 'react';

import { IQuizProps } from '../types';

const useQueryParams = (quizBasePath: IQuizProps['quizBasePath']) => {
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
    const updatedUrl = new URL(quizBasePath ?? window.location.href);
    updatedUrl.searchParams.delete('items');
    updatedUrl.searchParams.delete('attributes');

    if (!updatedUrl.searchParams.toString().length) {
      updatedUrl.search = '';
    }

    window.history.replaceState({}, '', updatedUrl.toString());
  }, [quizBasePath]);

  return {
    queryItems,
    queryAttributes,
    isSharedResultsQuery,
    removeSharedResultsQueryParams,
  };
};

export default useQueryParams;
