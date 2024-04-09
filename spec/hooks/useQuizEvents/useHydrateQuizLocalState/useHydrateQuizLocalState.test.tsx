import { renderHook, act } from '@testing-library/react';
import useHydrateQuizLocalState from '../../../../src/hooks/useQuizEvents/useHydrateQuizLocalState';
import { QuestionTypes } from '../../../../src/components/CioQuiz/actions';

describe('Testing Hook (client): useHydrateQuizLocalState', () => {
  const quizSessionStorageStateKey = 'quizState';
  const sessionStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
    removeItem: jest.fn(),
    key: jest.fn(),
    length: 0,
  };

  beforeAll(() => {
    global.sessionStorage = sessionStorageMock;

    Object.defineProperty(window, 'sessionStorage', {
      value: sessionStorageMock,
    });
  });

  it('correctly hydrates quiz local state from sessionStorage', () => {
    const dispatchLocalStateMock = jest.fn();
    sessionStorageMock.getItem.mockReturnValue(JSON.stringify(quizSessionStorageStateKey));

    const { result } = renderHook(() =>
      useHydrateQuizLocalState(quizSessionStorageStateKey, dispatchLocalStateMock)
    );

    act(() => {
      result.current();
    });

    expect(sessionStorageMock.getItem).toHaveBeenCalledWith(quizSessionStorageStateKey);
    expect(dispatchLocalStateMock).toHaveBeenCalledWith({
      type: QuestionTypes.Hydrate,
      payload: quizSessionStorageStateKey,
    });
  });
});
