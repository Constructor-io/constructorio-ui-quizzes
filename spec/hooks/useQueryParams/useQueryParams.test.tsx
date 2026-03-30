/**
 * @jest-environment jsdom
 * @jest-environment-options {"url": "https://example.com/?items=item1,item2&attributes=attr1,attr2&a=1-2,3-4&quiz_version_id=123"}
 */
import { renderHook, act } from '@testing-library/react';
import useQueryParams from '../../../src/hooks/useQueryParams';

describe('Testing Hook (client): useQueryParams', () => {
  it('parses query parameters correctly', () => {
    const { result } = renderHook(() => useQueryParams());

    expect(result.current.queryItems).toEqual(['item1', 'item2']);
    expect(result.current.queryAttributes).toEqual(['attr1', 'attr2']);
    expect(result.current.answers).toEqual([
      ['1', '2'],
      ['3', '4'],
    ]);
    expect(result.current.quizVersionId).toBe('123');
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
