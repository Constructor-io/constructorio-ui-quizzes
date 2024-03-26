import { renderHookServerSide } from '../../__tests__/utils.server';

import useQueryParams from '../../../src/hooks/useQueryParams';

describe('Testing Hook (server): useQueryParams', () => {
  it('does not throw an error when window is undefined', () => {
    expect(() => {
      const { result } = renderHookServerSide(() => useQueryParams(), {
        initialProps: {},
      });

      expect(result.queryItems).toEqual([]);
      expect(result.queryAttributes).toEqual([]);
      expect(result.isSharedResultsQuery).toBe(false);
    }).not.toThrow();
  });
});
