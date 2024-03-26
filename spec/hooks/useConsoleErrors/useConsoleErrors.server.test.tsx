import { renderHookServerSide } from '../../__tests__/utils.server';
import useConsoleErrors from '../../../src/hooks/useConsoleErrors';

describe('Testing Hook (server): useConsoleErrors', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('initially does not throw or log errors', () => {
    const quizOptions = { quizId: 'test-quiz-id', callbacks: { onAddToCartClick: () => {} } };

    renderHookServerSide(() => useConsoleErrors(quizOptions), { initialProps: quizOptions });

    expect(console.error).not.toHaveBeenCalled();
  });
});
