import { renderHook } from '@testing-library/react';
import useQuizLocalState from '../../../src/hooks/useQuizState/useQuizLocalState';

describe('Testing Hook (client): useQuizLocalState', () => {
  it('handles client environment', () => {
    const { result } = renderHook(() => useQuizLocalState());

    expect(result.current.quizLocalState).toEqual({
      answers: [],
      answerInputs: {},
      prevAnswerInputs: {},
      isQuizCompleted: false,
    });

    expect(typeof result.current.dispatchLocalState).toBe('function');
  });
});
