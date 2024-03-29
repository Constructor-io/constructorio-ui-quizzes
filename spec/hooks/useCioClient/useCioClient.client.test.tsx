import { renderHook } from '@testing-library/react';
import { mockConstructorIOClient } from '../../__tests__/utils';
import useCioClient from '../../../src/hooks/useCioClient';
import { getCioClient } from '../../../src/services';

jest.mock('../../../src/services', () => ({
  getCioClient: jest.fn(),
}));

describe('Testing Hook (client): useCioClient', () => {
  it('throws an error when neither apiKey nor cioJsClient is provided', () => {
    expect(() =>
      renderHook(() => useCioClient({}), {
        initialProps: {},
      })
    ).toThrow('Either apiKey or cioJsClient is required');
  });

  it('uses provided cioJsClient without calling getCioClient', () => {
    const { result } = renderHook(() => useCioClient({ cioJsClient: mockConstructorIOClient }));

    expect(result.current).toBe(mockConstructorIOClient);
    expect(getCioClient).not.toHaveBeenCalled();
  });

  it('calls getCioClient with apiKey if cioJsClient is not provided', () => {
    const mockApiKey = 'test-api-key';
    const mockCioClientInstance = {};

    (getCioClient as jest.Mock).mockReturnValue(mockCioClientInstance);

    const { result } = renderHook(() => useCioClient({ apiKey: mockApiKey }));

    expect(result.current).toBe(mockCioClientInstance);
    expect(getCioClient).toHaveBeenCalledWith(mockApiKey);
  });
});
