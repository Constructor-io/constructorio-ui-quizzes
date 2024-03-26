import useCioClient from '../../src/hooks/useCioClient';
import { getCioClient } from '../../src/services';
import { renderHookServerSide } from '../__tests__/utils.server';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';

jest.mock('../../src/services', () => ({
  getCioClient: jest.fn(),
}));

const apiKey = 'xx';

describe('Testing Hook on the server: useCioClient', () => {
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

  it('uses provided cioJsClient without calling getCioClient', () => {
    const mockClient = { tracker: () => {} } as unknown as ConstructorIOClient;
    const { result } = renderHookServerSide(
      () => useCioClient({ cioJsClient: mockClient, apiKey }),
      {
        initialProps: {
          cioJsClient: mockClient,
          apiKey,
        },
      }
    );

    expect(result).toBe(mockClient);
    expect(getCioClient).not.toHaveBeenCalled();
  });

  it('calls getCioClient with apiKey if cioJsClient is not provided', () => {
    const apiKey = 'test-api-key';
    const mockCioClientInstance = {};

    (getCioClient as jest.Mock).mockImplementation(() => mockCioClientInstance);
    const { result } = renderHookServerSide(() => useCioClient({ apiKey }), {
      initialProps: {
        apiKey,
      },
    });

    expect(result).toBe(mockCioClientInstance);
    expect(getCioClient).toHaveBeenCalledWith(apiKey);
  });
});
