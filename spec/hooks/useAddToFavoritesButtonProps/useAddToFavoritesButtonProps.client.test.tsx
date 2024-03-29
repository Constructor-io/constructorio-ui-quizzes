import { renderHook } from '@testing-library/react';
import useAddToFavoritesButtonProps from '../../../src/hooks/usePropsGetters/useAddToFavoritesButtonProps';

describe('Testing Hook (client): useAddToFavoritesButtonProps', () => {
  it('returns favorited class name if result is in favoriteItems', () => {
    const addToFavoritesMock = jest.fn();
    const favoriteItems = ['1'];
    const resultMock = { data: { id: '1' } };
    const { result } = renderHook(() =>
      useAddToFavoritesButtonProps(addToFavoritesMock, favoriteItems)
    );

    const buttonProps = result.current(resultMock, '10');
    expect(buttonProps.className).toContain('favorited');
  });

  it('does not return favorited class name if result is not in favoriteItems', () => {
    const addToFavoritesMock = jest.fn();
    const favoriteItems = ['2'];
    const resultMock = { data: { id: '3' } };
    const { result } = renderHook(() =>
      useAddToFavoritesButtonProps(addToFavoritesMock, favoriteItems)
    );

    const buttonProps = result.current(resultMock, '15');
    expect(buttonProps.className).not.toContain('favorited');
  });

  it('calls addToFavorites with correct arguments when button is clicked', () => {
    const addToFavoritesMock = jest.fn();
    const favoriteItems = [];
    const resultMock = { data: { id: '3' } };
    const price = '20';
    const { result } = renderHook(() =>
      useAddToFavoritesButtonProps(addToFavoritesMock, favoriteItems)
    );

    const buttonProps = result.current(resultMock, price);
    buttonProps.onClick({} as React.MouseEvent<HTMLButtonElement, MouseEvent>);

    expect(addToFavoritesMock).toHaveBeenCalledWith({}, resultMock, price, true);
  });
});
