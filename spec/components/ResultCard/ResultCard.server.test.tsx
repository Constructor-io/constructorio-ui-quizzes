import React from 'react';
import { renderToString } from 'react-dom/server';

import ResultCard from '../../../src/components/ResultCard/ResultCard';
import { withContext } from '../../__tests__/utils';
import { QuizContextValue } from '../../../src/components/CioQuiz/context';
import * as factories from '../../__tests__/factories';

describe(`${ResultCard.name} client`, () => {
  const props: React.ComponentProps<typeof ResultCard> = {
    result: factories.quizResult.build(),
    salePriceKey: 'sale_price',
    regularPriceKey: 'regular_price',
    resultPosition: 0,
    ratingCountKey: 'rating_count',
    ratingScoreKey: 'rating_score',
    renderResultCardPriceDetails: jest.fn().mockReturnValue(<div>Price Details</div>),
  };

  const contextMocks: Partial<QuizContextValue> = {
    customAddToFavoritesCallback: false,
    customClickItemCallback: false,
    getQuizResultButtonProps: jest.fn(),
    getQuizResultLinkProps: jest.fn(),
    getAddToFavoritesButtonProps: jest.fn().mockReturnValue({ 'aria-label': 'Add to favorites' }),
  };

  describe('with context function', () => {
    const Subject = withContext(ResultCard, { contextMocks });

    it('renders the previous button', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('VALUE');
    });

    it('renders custom price details', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('Price Details');
    });

    it('calls default price details', () => {
      const view = renderToString(<Subject {...props} renderResultCardPriceDetails={undefined} />);
      expect(view).toContain('80');
      expect(view).toContain('100');
    });

    it('without sale price', () => {
      const view = renderToString(
        <Subject
          {...props}
          renderResultCardPriceDetails={undefined}
          result={{ ...props.result, data: { ...props.result.data!, sale_price: undefined } }}
        />
      );
      expect(view).toContain('100');
    });

    it('does not render fav button', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).not.toContain('Add to favorites');
    });
  });

  describe('without context function', () => {
    const Subject = withContext(ResultCard, {
      contextMocks: {
        ...contextMocks,
        getQuizResultLinkProps: undefined,
        getQuizResultButtonProps: undefined,
      },
    });
    it('does not render content', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).not.toContain('VALUE');
    });
  });

  describe('with custom callbacks', () => {
    const Subject = withContext(ResultCard, {
      contextMocks: {
        ...contextMocks,
        customClickItemCallback: true,
        customAddToFavoritesCallback: true,
      },
    });
    it('renders content', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('VALUE');
    });

    it('renders fav button', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('Add to favorites');
    });
  });
});
