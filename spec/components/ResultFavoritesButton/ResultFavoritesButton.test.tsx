import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

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

    it('renders the favorite button', () => {
      render(<Subject {...props} />);
      expect(screen.getByRole('button', { name: 'Favorite' })).toBeInTheDocument();
    });

    it('executes callback on click', () => {
      render(<Subject {...props} />);
      fireEvent.click(screen.getByRole('button', { name: 'Favorite' }));
      expect(onFavoriteClickMock).toHaveBeenCalled();
    });
  });

  describe('without context function', () => {
    const Subject = withContext(ResultFavoritesButton, {
      contextMocks: { getAddToFavoritesButtonProps: undefined },
    });

    it('returns empty element when function is undefined', () => {
      const { container } = render(<Subject {...props} />);
      expect(container).toBeEmptyDOMElement();
    });
  });
});
