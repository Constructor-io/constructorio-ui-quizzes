import { renderHook } from '@testing-library/react';

import usePrimaryColorStyles from '../../../src/hooks/usePrimaryColorStyles';

describe('Testing Hook (client): usePrimaryColorStyles', () => {
  it('returns default color styles when no primary color is provided', () => {
    const { result } = renderHook(() => usePrimaryColorStyles());

    expect(result.current).toEqual({
      '--primary-color-h': '227',
      '--primary-color-s': '70%',
      '--primary-color-l': '46%',
    });
  });

  it('returns computed color styles when a valid primary color is provided', () => {
    const { result } = renderHook(() => usePrimaryColorStyles('255, 0, 0'));

    expect(result.current).toEqual({
      '--primary-color-h': '0',
      '--primary-color-s': '100%',
      '--primary-color-l': '50%',
    });
  });
});
