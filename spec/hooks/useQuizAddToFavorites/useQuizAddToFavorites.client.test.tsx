import { renderHook, act } from '@testing-library/react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import useQuizAddToFavorites from '../../../src/hooks/useQuizEvents/useQuizAddToFavorites';
import { trackQuizConversion } from '../../../src/services';
import { QuizAPIReducerState } from '../../../src/components/CioQuiz/quizApiReducer';

jest.mock('../../../src/services', () => ({
  trackQuizConversion: jest.fn(),
}));

describe('Testing Hook (client): useQueryParams', () => {
  it('calls trackQuizConversion and custom callback correctly', () => {
    const cioClientMock = new ConstructorIOClient({ apiKey: 'fake' });
    const quizApiStateMock = { quizResults: { some: 'results' } } as unknown as QuizAPIReducerState;
    const onAddToFavoritesClickMock = jest.fn();
    const resultMock = { item_id: '123' };
    const priceMock = 100;
    const eventMock = { preventDefault: jest.fn() };

    const { result } = renderHook(() =>
      useQuizAddToFavorites(cioClientMock, quizApiStateMock, onAddToFavoritesClickMock)
    );

    act(() => {
      result.current(eventMock as any, resultMock, priceMock, true);
    });

    expect(eventMock.preventDefault).toHaveBeenCalled();

    expect(trackQuizConversion).toHaveBeenCalledWith(
      cioClientMock,
      quizApiStateMock.quizResults,
      resultMock,
      priceMock,
      'add_to_wishlist'
    );

    expect(onAddToFavoritesClickMock).toHaveBeenCalledWith(resultMock);
  });
});
