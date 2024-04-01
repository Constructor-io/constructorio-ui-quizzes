/* eslint-disable no-console */
import { renderHook } from '@testing-library/react';
import useConsoleErrors from '../../../src/hooks/useConsoleErrors';
import { IQuizProps } from '../../../src/types';

describe('Testing Hook (client): useConsoleErrors', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('logs error if quizId is missing', () => {
    const quizOptions = { callbacks: { onAddToCartClick: jest.fn() } };
    renderHook(() => useConsoleErrors(quizOptions as unknown as IQuizProps));

    expect(console.error).toHaveBeenCalledWith('quizId is a required field of type string');
  });

  it('logs error if onAddToCartClick is missing', () => {
    const quizOptions = { quizId: '123' };
    renderHook(() => useConsoleErrors(quizOptions));

    expect(console.error).toHaveBeenCalledWith(
      'callbacks.onAddToCartClick is a required field of type function'
    );
  });
});
