import { renderHookServerSide } from '../../../__tests__/utils.server';
import useProceedToResultsFromSummaryPage from '../../../../src/hooks/useQuizEvents/useProceedToResultsFromSummaryPage';

describe('Testing Hook (server): useProceedToResultsFromSummaryPage', () => {
  it('initializes without throwing errors', async () => {
    const dispatchLocalStateMock = jest.fn();
    const dispatchApiStateMock = jest.fn();
    const dispatchApiStateQuizResultsMock = jest.fn();

    const executeHook = () =>
      renderHookServerSide(
        () =>
          useProceedToResultsFromSummaryPage(
            dispatchLocalStateMock,
            dispatchApiStateMock,
            dispatchApiStateQuizResultsMock
          ),
        {
          initialProps: {},
        }
      );

    expect(executeHook).not.toThrow();
  });
});
