import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { renderHookServerSide } from '../../__tests__/utils.server';

import useQuizAddToFavorites from '../../../src/hooks/useQuizEvents/useQuizAddToFavorites';
import { QuizAPIReducerState } from '../../../src/components/CioQuiz/quizApiReducer';

describe('Testing Hook (server): useQuizAddToFavorites', () => {
  it('initializes without throwing errors', async () => {
    const cioClientMock = new ConstructorIOClient({
      apiKey: 'apiKey',
      sessionId: 123,
      clientId: '123',
    });
    const quizApiStateMock: QuizAPIReducerState = {
      quizResults: { some: 'results' },
    } as unknown as QuizAPIReducerState;
    const onAddToFavoritesClickMock = jest.fn();

    const executeHook = () =>
      renderHookServerSide(
        () => useQuizAddToFavorites(cioClientMock, quizApiStateMock, onAddToFavoritesClickMock),
        {
          initialProps: {},
        }
      );

    expect(() => executeHook()).not.toThrow();
  });
});
