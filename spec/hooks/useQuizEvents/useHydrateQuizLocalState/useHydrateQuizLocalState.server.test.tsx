import { renderHookServerSide } from '../../../__tests__/utils.server';
import useHydrateQuizLocalState from '../../../../src/hooks/useQuizEvents/useHydrateQuizLocalState';

describe('Testing Hook (server): useHydrateQuizLocalState', () => {
  it('does not throw an error when sessionStorage is not available', () => {
    const dispatchLocalStateMock = jest.fn();
    const quizSessionStorageStateKey = 'quizState';

    let hookExecutionResult;
    expect(() => {
      const { result } = renderHookServerSide(
        () =>
          useHydrateQuizLocalState('quizId', quizSessionStorageStateKey, dispatchLocalStateMock),
        {
          initialProps: {},
        }
      );

      hookExecutionResult = result;
    }).not.toThrow();

    expect(hookExecutionResult).not.toBeUndefined();
  });
});
