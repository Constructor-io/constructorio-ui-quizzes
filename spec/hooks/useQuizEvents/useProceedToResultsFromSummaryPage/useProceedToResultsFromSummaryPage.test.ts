import { renderHook, act } from '@testing-library/react';

import useProceedToResultsFromSummaryPage from '../../../../src/hooks/useQuizEvents/useProceedToResultsFromSummaryPage';
import { QuestionTypes, QuizAPIActionTypes } from '../../../../src/components/CioQuiz/actions';

describe('Testing Hook (client): useProceedToResultsFromSummaryPage', () => {
  const dispatchLocalStateMock = jest.fn();
  const dispatchApiStateMock = jest.fn();
  const dispatchApiStateQuizResultsMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('dispatches correct actions when called', () => {
    const { result } = renderHook(() =>
      useProceedToResultsFromSummaryPage(
        dispatchLocalStateMock,
        dispatchApiStateMock,
        dispatchApiStateQuizResultsMock
      )
    );

    act(() => {
      result.current();
    });

    expect(dispatchApiStateMock).toHaveBeenCalledWith({
      type: QuizAPIActionTypes.SET_IS_LOADING,
    });

    expect(dispatchLocalStateMock).toHaveBeenCalledWith({
      type: QuestionTypes.SummaryPage,
      payload: { showSummaryPage: false },
    });

    expect(dispatchApiStateQuizResultsMock).toHaveBeenCalled();
  });
});
