import { renderHook, act } from '@testing-library/react';
import useResult from '../../../src/hooks/useResult';
import * as factories from '../../__tests__/factories';

describe('useResult Hook', () => {
  beforeEach(() => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  const mockResult = factories.quizResult.build({
    value: 'Variation 1',
    data: {
      variation_id: 'var1',
      image_url: 'test-image1.jpg',
    },
    variations: [
      {
        data: {
          variation_id: 'var1',
          image_url: 'test-image-1.jpg',
        },
        value: 'Variation 1',
      },
      {
        data: {
          variation_id: 'var2',
          image_url: 'test-image-2.jpg',
        },
        value: 'Variation 2',
      },
    ],
  });

  it('should initialize with the correct faceOutResult', () => {
    const { result } = renderHook(() => useResult(mockResult));

    expect(result.current.faceOutResult).toBeDefined();
    expect(result.current.faceOutResult.data?.variation_id).toBe('var1');
  });

  it('should update faceOutResult when onVariationClick is called', () => {
    const { result } = renderHook(() => useResult(mockResult));

    const newVariation = mockResult.variations![1];

    act(() => {
      result.current.onVariationClick(newVariation);
    });

    expect(result.current.faceOutResult.value).toBe('Variation 2');
    expect(result.current.faceOutResult.data?.variation_id).toBe('var2');
  });

  it('should throw an error if result is undefined', () => {
    // @ts-ignore
    expect(() => renderHook(() => useResult(undefined))).toThrow(
      'The "result" parameter is required and cannot be undefined.'
    );
  });

  it('should handle result without variations', () => {
    const resultWithoutVariations = {
      value: 'Item 1',
      data: {
        id: '1',
        image_url: 'test-image1.jpg',
      },
    };
    const { result } = renderHook(() => useResult(resultWithoutVariations));

    expect(result.current.faceOutResult).toBeDefined();
    expect(result.current.faceOutResult.data?.variation_id).toBe(undefined);
    expect(result.current.faceOutResult.variations).toBe(undefined);
    expect(result.current.faceOutResult.value).toBe('Item 1');
  });

  it('should preserve previous faceOutResult properties when updating with onVariationClick', () => {
    const resultWithExtraProps = {
      ...mockResult,
      extraProp: 'should be preserved',
    };

    const { result } = renderHook(() => useResult(resultWithExtraProps));

    const newVariation = {
      ...mockResult.variations![1],
      newProp: 'new value',
    };

    act(() => {
      result.current.onVariationClick(newVariation);
    });

    expect(result.current.faceOutResult.extraProp).toBe('should be preserved');
    expect(result.current.faceOutResult.newProp).toBe('new value');
  });
});
