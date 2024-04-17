import { mockConstructorIOClient } from '../../../__tests__/utils';
import { renderHookServerSide } from '../../../__tests__/utils.server';

import useQuizAddToFavorites from '../../../../src/hooks/useQuizEvents/useQuizAddToFavorites';
import { QuizAPIReducerState } from '../../../../src/components/CioQuiz/quizApiReducer';

describe('Testing Hook (server): useQuizAddToFavorites', () => {
  it('initializes without throwing errors', async () => {
    const quizApiStateMock: QuizAPIReducerState = {
      quizResults: { some: 'results' },
    } as unknown as QuizAPIReducerState;
    const onAddToFavoritesClickMock = jest.fn();

    const executeHook = () =>
      renderHookServerSide(
        () =>
          useQuizAddToFavorites(
            mockConstructorIOClient,
            quizApiStateMock,
            onAddToFavoritesClickMock
          ),
        {
          initialProps: {},
        }
      );

    expect(() => executeHook()).not.toThrow();
  });
});
