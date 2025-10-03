import React from 'react';
import { render, screen } from '@testing-library/react';

import ResultCard from '../../../src/components/ResultCard/ResultCard';
import { withContext } from '../../__tests__/utils';
import { QuizContextValue } from '../../../src/components/CioQuiz/context';
import * as factories from '../../__tests__/factories';
import * as useResultModule from '../../../src/hooks/useResultCard';

jest.mock('../../../src/hooks/useResultCard');

describe(`${ResultCard.name} client`, () => {
  const mockResult = factories.quizResult.build({ data: { id: 'test-id' } });
  const mockFaceOutResult = {
    ...mockResult,
    data: {
      ...mockResult.data,
      image_url: 'default.jpg',
      sale_price: 80,
      regular_price: 100,
      rating_count: 10,
      rating_score: 4,
      id: 'test-id',
    },
  };

  const mockUseResultCard = {
    faceOutResult: mockFaceOutResult,
    getQuizResultSwatchProps: jest.fn(),
    onVariationClick: jest.fn(),
  };

  beforeEach(() => {
    jest.spyOn(useResultModule, 'default').mockReturnValue(mockUseResultCard);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const props: React.ComponentProps<typeof ResultCard> = {
    result: mockResult,
    salePriceKey: 'sale_price',
    regularPriceKey: 'regular_price',
    resultPosition: 0,
    ratingCountKey: 'rating_count',
    ratingScoreKey: 'rating_score',
    renderResultCardPriceDetails: jest.fn().mockReturnValue(<div>Price Details</div>),
    getResultCardImageUrl: jest.fn().mockReturnValue('www.custom_img.com'),
    swatchImageKey: 'option_image_source',
  };

  const contextMocks: Partial<QuizContextValue> = {
    customAddToFavoritesCallback: false,
    customClickItemCallback: false,
    getQuizResultButtonProps: jest.fn(),
    getQuizResultLinkProps: jest
      .fn()
      .mockReturnValue({ 'aria-label': 'View product', role: 'link', href: '#' }),
    getAddToFavoritesButtonProps: jest.fn().mockReturnValue({ 'aria-label': 'Add to favorites' }),
  };

  describe('default rendering', () => {
    const Subject = withContext(ResultCard, { contextMocks });

    it('renders the result value from useResultCard hook', () => {
      render(<Subject {...props} />);
      expect(screen.getByText(mockFaceOutResult.value || '')).toBeInTheDocument();
    });

    it('uses useResultCard hook with correct parameters', () => {
      render(<Subject {...props} />);
      expect(useResultModule.default).toHaveBeenCalledWith(mockResult, props.swatchImageKey);
    });

    it('renders custom price details when provided', () => {
      render(<Subject {...props} />);
      expect(screen.getByText('Price Details')).toBeInTheDocument();
    });

    it('renders default price details when not provided', () => {
      render(<Subject {...props} renderResultCardPriceDetails={undefined} />);
      expect(screen.getByText('$80')).toBeInTheDocument();
      expect(screen.getByText('$100')).toBeInTheDocument();
    });

    it('renders only regular price when sale price is not available', () => {
      const resultWithoutSale = {
        ...mockFaceOutResult,
        data: { ...mockFaceOutResult.data, sale_price: undefined },
      };
      jest.spyOn(useResultModule, 'default').mockReturnValue({
        ...mockUseResultCard,
        faceOutResult: { ...resultWithoutSale, data: { ...resultWithoutSale.data, id: 'test-id' } },
      });
      render(<Subject {...props} renderResultCardPriceDetails={undefined} />);
      expect(screen.getByText('$100')).toBeInTheDocument();
      expect(screen.queryByText('$80')).not.toBeInTheDocument();
    });

    it('renders custom image url when provided', () => {
      render(<Subject {...props} />);
      expect(screen.getByRole('img').getAttribute('src')).toEqual('www.custom_img.com');
    });

    it('renders default image url when custom url not provided', () => {
      render(<Subject {...props} getResultCardImageUrl={undefined} />);
      expect(screen.getByRole('img').getAttribute('src')).toEqual('default.jpg');
    });
  });

  describe('renderResultCard prop', () => {
    const Subject = withContext(ResultCard, { contextMocks });

    it('uses custom render function when provided', () => {
      const customRender = jest.fn().mockReturnValue(
        <div className='custom-result'>
          <div className='custom-content'>Custom Content</div>
        </div>
      );

      render(<Subject {...props} renderResultCard={customRender} />);

      expect(customRender).toHaveBeenCalledWith(
        mockFaceOutResult,
        expect.objectContaining({
          getQuizResultButtonProps: expect.any(Function),
          getAddToCartButtonProps: expect.any(Function),
          getAddToFavoritesButtonProps: expect.any(Function),
          getQuizResultLinkProps: expect.any(Function),
          getQuizResultSwatchProps: expect.any(Function),
        }),
        props.resultPosition
      );
      expect(screen.getByText('Custom Content')).toBeInTheDocument();
    });

    it('renders default content when renderResultCard is not provided', () => {
      render(<Subject {...props} renderResultCard={undefined} />);
      expect(screen.getByText(mockFaceOutResult.value || '')).toBeInTheDocument();
    });
  });

  describe('context functions', () => {
    it('does not render content without required context functions', () => {
      const Subject = withContext(ResultCard, {
        contextMocks: {
          ...contextMocks,
          getQuizResultLinkProps: undefined,
          getQuizResultButtonProps: undefined,
        },
      });
      render(<Subject {...props} />);
      expect(screen.queryByText(mockFaceOutResult.value || '')).not.toBeInTheDocument();
    });

    it('renders favorites button with custom callbacks', () => {
      const Subject = withContext(ResultCard, {
        contextMocks: {
          ...contextMocks,
          customClickItemCallback: true,
          customAddToFavoritesCallback: true,
        },
      });
      render(<Subject {...props} />);
      expect(screen.getByLabelText('Add to favorites')).toBeInTheDocument();
    });

    it('uses button interaction when customClickItemCallback is true', () => {
      const Subject = withContext(ResultCard, {
        contextMocks: {
          ...contextMocks,
          customClickItemCallback: true,
        },
      });
      render(<Subject {...props} />);
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('uses link interaction when customClickItemCallback is false', () => {
      const Subject = withContext(ResultCard, { contextMocks });
      render(<Subject {...props} />);
      expect(screen.getByRole('link')).toBeInTheDocument();
      expect(screen.queryByRole('button', { name: /^(?!Add to Cart).*/i })).not.toBeInTheDocument();
    });

    it('renders favorites button when customAddToFavoritesCallback is true', () => {
      const Subject = withContext(ResultCard, {
        contextMocks: {
          ...contextMocks,
          customAddToFavoritesCallback: true,
        },
      });
      render(<Subject {...props} />);
      expect(screen.getByRole('button', { name: 'Add to favorites' })).toBeInTheDocument();
    });
  });
});
