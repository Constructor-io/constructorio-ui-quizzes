import { renderHook, act } from '@testing-library/react';
import useQueryParams from '../../../src/hooks/useQueryParams';

describe('Testing Hook (client): useQueryParams', () => {
  const originalReplaceState = window.history.replaceState;

  beforeAll(() => {
    delete (global as any).window.location;
    (global as any).window.location = new URL(
      'https://example.com/?items=item1,item2&attributes=attr1,attr2'
    );

    window.history.replaceState = jest.fn((state, title, url) => {
      (global as any).window.location = new URL(url as string, window.location.origin);
    });
  });

  afterAll(() => {
    window.history.replaceState = originalReplaceState;
  });

  it('parses query parameters correctly', () => {
    const { result } = renderHook(() => useQueryParams());
    expect(result.current.queryItems).toEqual(['item1', 'item2']);
    expect(result.current.queryAttributes).toEqual(['attr1', 'attr2']);
    expect(result.current.isSharedResultsQuery).toBe(true);
  });

  it('removes query parameters correctly', () => {
    const { result } = renderHook(() => useQueryParams());
    act(() => {
      result.current.removeSharedResultsQueryParams();
    });

    expect(window.location.search).toBe('');
  });
});
