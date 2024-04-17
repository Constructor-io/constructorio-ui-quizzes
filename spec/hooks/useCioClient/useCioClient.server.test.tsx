import useCioClient from '../../../src/hooks/useCioClient';
import { getCioClient } from '../../../src/services';
import { renderHookServerSide } from '../../__tests__/utils.server';
import { DEMO_API_KEY } from '../../__tests__/constants';

jest.mock('../../../src/services', () => ({
  getCioClient: jest.fn(),
}));

describe('Testing Hook (server): useCioClient', () => {
  beforeEach(() => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('throws an error when neither apiKey nor cioJsClient is provided', () => {
    expect(() =>
      renderHookServerSide(() => useCioClient({}), {
        initialProps: {},
      })
    ).toThrow('Either apiKey or cioJsClient is required');
  });

  it('calls getCioClient with apiKey if cioJsClient is not provided', () => {
    const mockCioClientInstance = {};

    (getCioClient as jest.Mock).mockImplementation(() => mockCioClientInstance);
    const { result } = renderHookServerSide(() => useCioClient({ apiKey: DEMO_API_KEY }), {
      initialProps: {
        apiKey: DEMO_API_KEY,
      },
    });

    expect(result).toBe(mockCioClientInstance);
    expect(getCioClient).toHaveBeenCalledWith(DEMO_API_KEY);
  });
});
