import { renderHookServerSide } from '../../__tests__/utils.server';
import useQuizLocalState from '../../../src/hooks/useQuizState/useQuizLocalState';

describe('Testing Hook (server): useQuizLocalState', () => {
  it('handles server environment', () => {
    const { result } = renderHookServerSide(() => useQuizLocalState(), { initialProps: {} });

    expect(result.quizLocalState).toEqual({
      answers: [],
      answerInputs: {},
      prevAnswerInputs: {},
      isQuizCompleted: false,
    });

    expect(typeof result.dispatchLocalState).toBe('function');
  });

  it('does not throw an error server environment', () => {
    expect(() => {
      renderHookServerSide(() => useQuizLocalState(), {
        initialProps: {},
      });
    }).not.toThrow();
  });
});
