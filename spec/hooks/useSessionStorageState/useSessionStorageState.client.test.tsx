import { renderHook, act } from '@testing-library/react';
import useSessionStorageState from '../../../src/hooks/useQuizState/useSessionStorageState';
import { QuizLocalReducerState } from '../../../src/components/CioQuiz/quizLocalReducer';
import { QuestionTypes } from '../../../src/components/CioQuiz/actions';

const mockSetItem = jest.fn();
const mockGetItem = jest.fn();

describe('Testing Hook (client): useSessionStorageState', () => {
  beforeAll(() => {
    // Define sessionStorage mocks
    Object.defineProperty(window, 'sessionStorage', {
      value: {
        setItem: mockSetItem,
        getItem: mockGetItem,
      },
      writable: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockState: QuizLocalReducerState = {
    answers: [['answer1'], ['answer2']],
    answerInputs: {
      q1: {
        type: QuestionTypes.OpenText,
        value: 'value',
      },
    },
    prevAnswerInputs: {
      q1: {
        type: QuestionTypes.OpenText,
        value: 'prev',
      },
    },
    isQuizCompleted: false,
    quizVersionId: 'version1',
    quizSessionId: 'session1',
  };

  it('should set item in sessionStorage when conditions are met', () => {
    renderHook(() => useSessionStorageState(mockState, { sessionStateKey: 'testKey' }, true));

    expect(mockSetItem).toHaveBeenCalledWith('testKey', JSON.stringify(mockState));
  });

  it('should retrieve "skipToResults" correctly based on sessionStorage', () => {
    const { result } = renderHook(() =>
      useSessionStorageState(mockState, { sessionStateKey: 'testKey' }, true)
    );

    act(() => {
      window.sessionStorage.setItem('testKey', JSON.stringify(mockState));
    });

    expect(result.current.skipToResults).toBe(mockState.isQuizCompleted);
  });
});
