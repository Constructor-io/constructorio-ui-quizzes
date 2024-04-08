import React from 'react';
import { renderToString } from 'react-dom/server';

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

    it('renders the previous button', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('Add to Cart');
    });
  });

  describe('without context function', () => {
    const Subject = withContext(ResultCtaButton, {
      contextMocks: { getAddToCartButtonProps: undefined },
    });

    it('returns empty element when function is undefined', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('');
    });
  });
});
