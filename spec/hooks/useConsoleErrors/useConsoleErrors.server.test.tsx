import { renderHookServerSide } from '../../__tests__/utils.server';
import useConsoleErrors from '../../../src/hooks/useConsoleErrors';
import { QUIZ_ID } from '../../__tests__/constants';

describe('Testing Hook (server): useConsoleErrors', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('initially does not throw or log errors', () => {
    const quizOptions = { quizId: QUIZ_ID, callbacks: { onAddToCartClick: () => {} } };

    renderHookServerSide(() => useConsoleErrors(quizOptions), { initialProps: quizOptions });

    // eslint-disable-next-line no-console
    expect(console.error).not.toHaveBeenCalled();
  });
});
