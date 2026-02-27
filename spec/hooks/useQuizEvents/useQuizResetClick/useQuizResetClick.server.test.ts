import { renderHookServerSide } from '../../../__tests__/utils.server';
import useQuizResetClick from '../../../../src/hooks/useQuizEvents/useQuizResetClick';
import * as factories from '../../../__tests__/factories';
import { RequestStates } from '../../../../src/constants';

describe('Testing Hook (server): useQuizResetClick', () => {
  it('initializes without throwing errors', async () => {
    const resetQuizSessionStorageStateMock = jest.fn();
    const dispatchLocalStateMock = jest.fn();
    const dispatchApiStateMock = jest.fn();

    const props: Parameters<typeof useQuizResetClick>[0] = {
      resetQuizSessionStorageState: resetQuizSessionStorageStateMock,
      dispatchLocalState: dispatchLocalStateMock,
      dispatchApiState: dispatchApiStateMock,
      quizResults: factories.quizResults.build(),
      quizRequestState: RequestStates.Success,
    };

    const executeHook = () =>
      renderHookServerSide(() => useQuizResetClick(props), {
        initialProps: {},
      });

    expect(executeHook).not.toThrow();
  });
});
