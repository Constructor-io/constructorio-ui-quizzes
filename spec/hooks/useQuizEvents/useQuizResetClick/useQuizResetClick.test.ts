import { act, renderHook } from '@testing-library/react';

import * as factories from '../../../__tests__/factories';

import useQuizResetClick from '../../../../src/hooks/useQuizEvents/useQuizResetClick';
import * as useQueryParams from '../../../../src/hooks/useQueryParams';
import { QuestionTypes, QuizAPIActionTypes } from '../../../../src/components/CioQuiz/actions';

describe('Testing Hook (client): useQuizResetClick', () => {
  const resetQuizSessionStorageStateMock = jest.fn();
  const dispatchLocalStateMock = jest.fn();
  const dispatchApiStateMock = jest.fn();
  const removeSharedResultsQueryParamsMock = jest.fn();
  const useQueryParamsReturnValue = {
    removeSharedResultsQueryParams: removeSharedResultsQueryParamsMock,
    isSharedResultsQuery: true,
    answers: [],
    quizVersionId: '',
    queryItems: [],
    queryAttributes: [],
  };
  const props: Parameters<typeof useQuizResetClick>[0] = {
    resetQuizSessionStorageState: resetQuizSessionStorageStateMock,
    dispatchLocalState: dispatchLocalStateMock,
    dispatchApiState: dispatchApiStateMock,
    quizResults: factories.quizResults.build(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(useQueryParams, 'default').mockReturnValue(useQueryParamsReturnValue);
  });

  it('should reset the quiz when called', () => {
    const { result } = renderHook(() => useQuizResetClick(props));

    act(() => {
      result.current();
    });

    expect(dispatchLocalStateMock).toHaveBeenCalledWith({
      type: QuestionTypes.Reset,
    });

    expect(dispatchApiStateMock).toHaveBeenCalledWith({
      type: QuizAPIActionTypes.RESET_QUIZ,
    });
    expect(resetQuizSessionStorageStateMock).toHaveBeenCalled();
    expect(removeSharedResultsQueryParamsMock).toHaveBeenCalled();
  });
});
