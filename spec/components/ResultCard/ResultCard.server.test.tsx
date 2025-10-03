import React from 'react';
import { renderToString } from 'react-dom/server';

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
    getQuizResultButtonProps: jest.fn().mockReturnValue({ role: 'button' }),
    getQuizResultLinkProps: jest
      .fn()
      .mockReturnValue({ 'aria-label': 'View product', role: 'link', href: '#' }),
    getAddToFavoritesButtonProps: jest.fn().mockReturnValue({ 'aria-label': 'Add to favorites' }),
  };

  describe('with context function', () => {
    const Subject = withContext(ResultCard, { contextMocks });

    it('renders the result value from useResultCard hook', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain(mockFaceOutResult.value);
    });

    it('uses useResultCard hook with correct parameters', () => {
      renderToString(<Subject {...props} />);
      expect(useResultModule.default).toHaveBeenCalledWith(mockResult, props.swatchImageKey);
    });

    it('renders custom price details', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('Price Details');
    });

    it('renders custom image url', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('www.custom_img.com');
    });

    it('calls default price details', () => {
      const view = renderToString(<Subject {...props} renderResultCardPriceDetails={undefined} />);
      expect(view).toContain('80');
      expect(view).toContain('100');
    });

    it('renders only regular price when sale price is not available', () => {
      const resultWithoutSale = {
        ...mockFaceOutResult,
        data: { ...mockFaceOutResult.data, sale_price: undefined, id: 'test-id' },
      };
      jest.spyOn(useResultModule, 'default').mockReturnValue({
        ...mockUseResultCard,
        faceOutResult: resultWithoutSale,
      });
      const view = renderToString(<Subject {...props} renderResultCardPriceDetails={undefined} />);
      expect(view).toContain('100');
      expect(view).not.toContain('80');
    });

    it('does not render fav button', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).not.toContain('Add to favorites');
    });

    it('uses custom render function when provided', () => {
      const customRender = jest.fn().mockReturnValue(
        <div className='custom-result'>
          <div className='custom-content'>Custom Content</div>
        </div>
      );

      const view = renderToString(<Subject {...props} renderResultCard={customRender} />);

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
      expect(view).toContain('Custom Content');
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
      const view = renderToString(<Subject {...props} renderResultCard={undefined} />);
      expect(view).not.toContain(mockFaceOutResult.value);
    });
  });

  describe('interaction modes', () => {
    it('uses button interaction when customClickItemCallback is true', () => {
      const Subject = withContext(ResultCard, {
        contextMocks: {
          ...contextMocks,
          customClickItemCallback: true,
        },
      });
      const view = renderToString(<Subject {...props} renderResultCard={undefined} />);
      expect(view).not.toContain('cio-result-card-anchor');
      expect(view).toContain('role="button"');
    });

    it('renders favorites button when customAddToFavoritesCallback is true', () => {
      const Subject = withContext(ResultCard, {
        contextMocks: {
          ...contextMocks,
          customAddToFavoritesCallback: true,
        },
      });
      const view = renderToString(<Subject {...props} renderResultCard={undefined} />);
      expect(view).toContain('Add to favorites');
    });

    it('uses link interaction when customClickItemCallback is false', () => {
      const Subject = withContext(ResultCard, { contextMocks });
      const view = renderToString(<Subject {...props} renderResultCard={undefined} />);
      expect(view).toContain('cio-result-card-anchor');
      expect(view).toContain('role="link"');
    });
  });
});
