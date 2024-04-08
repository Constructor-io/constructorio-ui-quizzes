import React from 'react';
import { renderToString } from 'react-dom/server';

import ResultFavoritesButton from '../../../src/components/ResultFavoritesButton/ResultFavoritesButton';
import { withContext } from '../../__tests__/utils';
import * as factories from '../../__tests__/factories';

describe(`${ResultFavoritesButton.name} client`, () => {
  const onFavoriteClickMock = jest.fn();
  const getAddToFavoritesButtonPropsMock = jest
    .fn()
    .mockReturnValue({ onClick: onFavoriteClickMock, 'aria-label': 'Favorite' });
  const props: React.ComponentProps<typeof ResultFavoritesButton> = {
    item: factories.quizResult.build(),
    price: '$100',
  };

  describe('with context function', () => {
    const Subject = withContext(ResultFavoritesButton, {
      contextMocks: { getAddToFavoritesButtonProps: getAddToFavoritesButtonPropsMock },
    });

    it('renders the previous button', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('Favorite');
    });
  });

  describe('without context function', () => {
    const Subject = withContext(ResultFavoritesButton, {
      contextMocks: { getAddToFavoritesButtonProps: undefined },
    });

    it('returns empty element when function is undefined', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('');
    });
  });
});
