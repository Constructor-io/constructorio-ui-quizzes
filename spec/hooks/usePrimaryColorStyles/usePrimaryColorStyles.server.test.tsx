import usePrimaryColorStyles from '../../../src/hooks/usePrimaryColorStyles';
import { renderHookServerSide } from '../../__tests__/utils.server';

describe('Testing Hook (server): usePrimaryColorStyles', () => {
  it('returns default color styles when no primary color is provided', () => {
    const { result } = renderHookServerSide(() => usePrimaryColorStyles(), { initialProps: {} });

    expect(result).toEqual({
      '--primary-color-h': '227',
      '--primary-color-s': '70%',
      '--primary-color-l': '46%',
    });
  });

  it('returns computed color styles when a valid primary color is provided', () => {
    const { result } = renderHookServerSide(() => usePrimaryColorStyles('255, 0, 0'), {
      initialProps: {},
    });

    expect(result).toEqual({
      '--primary-color-h': '0',
      '--primary-color-s': '100%',
      '--primary-color-l': '50%',
    });
  });
});
