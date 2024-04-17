import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import ResultCtaButton from '../../../src/components/ResultCtaButton/ResultCtaButton';
import { withContext } from '../../__tests__/utils';
import * as factories from '../../__tests__/factories';

describe(`${ResultCtaButton.name} client`, () => {
  const onAddToCartMock = jest.fn();
  const getAddToCartButtonPropsMock = jest.fn().mockReturnValue({ onClick: onAddToCartMock });
  const props: React.ComponentProps<typeof ResultCtaButton> = {
    item: factories.quizResult.build(),
    price: '$100',
  };

  describe('with context function', () => {
    const Subject = withContext(ResultCtaButton, {
      contextMocks: { getAddToCartButtonProps: getAddToCartButtonPropsMock },
    });

    it('renders the cta button', () => {
      render(<Subject {...props} />);
      expect(screen.getByRole('button', { name: 'Add to Cart' })).toBeInTheDocument();
    });

    it('executes callback on click', () => {
      render(<Subject {...props} />);
      fireEvent.click(screen.getByRole('button', { name: 'Add to Cart' }));
      expect(onAddToCartMock).toHaveBeenCalled();
    });
  });

  describe('without context function', () => {
    const Subject = withContext(ResultCtaButton, {
      contextMocks: { getAddToCartButtonProps: undefined },
    });

    it('returns empty element when function is undefined', () => {
      const { container } = render(<Subject {...props} />);
      expect(container).toBeEmptyDOMElement();
    });
  });
});
