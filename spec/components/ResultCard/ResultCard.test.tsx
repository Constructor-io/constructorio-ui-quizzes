import React from 'react';
import { render, screen } from '@testing-library/react';

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
      render(<Subject {...props} />);
      expect(screen.getByText('VALUE')).toBeInTheDocument();
    });

    it('renders custom price details', () => {
      render(<Subject {...props} />);
      expect(screen.getByText('Price Details')).toBeInTheDocument();
    });

    it('calls default price details', () => {
      render(<Subject {...props} renderResultCardPriceDetails={undefined} />);
      expect(screen.getByText('$80')).toBeInTheDocument();
      expect(screen.getByText('$100')).toBeInTheDocument();
    });

    it('without sale price', () => {
      render(
        <Subject
          {...props}
          renderResultCardPriceDetails={undefined}
          result={{ ...props.result, data: { ...props.result.data!, sale_price: undefined } }}
        />
      );
      expect(screen.getByText('$100')).toBeInTheDocument();
    });

    it('does not render fav button', () => {
      render(<Subject {...props} />);
      expect(screen.queryByLabelText('Add to favorites')).not.toBeInTheDocument();
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
      render(<Subject {...props} />);
      expect(screen.queryByText('VALUE')).not.toBeInTheDocument();
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
      render(<Subject {...props} />);
      expect(screen.getByText('VALUE')).toBeInTheDocument();
    });

    it('renders fav button', () => {
      render(<Subject {...props} />);
      expect(screen.getByLabelText('Add to favorites')).toBeInTheDocument();
    });
  });
});
