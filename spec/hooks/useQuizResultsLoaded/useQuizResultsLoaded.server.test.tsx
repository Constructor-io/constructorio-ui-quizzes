import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { renderHookServerSide } from '../../__tests__/utils.server';
import useQuizResultsLoaded from '../../../src/hooks/useQuizEvents/useQuizResultsLoaded';
import { QuizAPIReducerState } from '../../../src/components/CioQuiz/quizApiReducer';

jest.mock('../../../src/services', () => ({
  trackQuizResultsLoaded: jest.fn(),
}));

describe('Testing Hook (server): useQuizResultsLoaded', () => {
  const cioClientMock = new ConstructorIOClient({
    apiKey: 'apiKey',
    sessionId: 123,
    clientId: '123',
  });
  const quizApiStateMock = {
    quizResults: {
      response: {
        results: [{ id: '1', name: 'Result 1' }],
      },
    },
  } as unknown as QuizAPIReducerState;
  const onQuizResultsLoadedMock = jest.fn();

  it('initializes without throwing errors', () => {
    const executeHook = () =>
      renderHookServerSide(
        () => useQuizResultsLoaded(cioClientMock, quizApiStateMock, onQuizResultsLoadedMock),
        { initialProps: {} }
      );

    expect(executeHook).not.toThrow();
  });
});
