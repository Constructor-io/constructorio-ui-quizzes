import React from 'react';
import { renderToString } from 'react-dom/server';

import ResultCardSwatches from '../../../src/components/ResultCardSwatches/ResultCardSwatches';
import * as factories from '../../__tests__/factories';

describe(`${ResultCardSwatches.name} server`, () => {
  const onVariationClickMock = jest.fn();

  const mockResult = factories.quizResult.build({
    data: {
      variation_id: 'var1',
      image_url: 'test-image.jpg',
      option_image_source: 'option-image.jpg',
    },
    variations: [
      {
        data: {
          variation_id: 'var1',
          image_url: 'test-image.jpg',
          option_image_source: 'option-image.jpg',
        },
        value: 'Variation 1',
      },
      {
        data: {
          variation_id: 'var2',
          image_url: 'test-image-2.jpg',
          option_image_source: 'option-image-2.jpg',
        },
        value: 'Variation 2',
      },
    ],
  });

  const getQuizResultSwatchPropsWithVariationClickMock = jest
    .fn()
    .mockImplementation((variation) => ({
      className: 'cio-result-card-swatch',
      type: 'button',
      onClick: () => onVariationClickMock(variation),
      style: {
        background: `url(${variation.data.image_url})`,
      },
    }));

  const props = {
    faceOutResult: mockResult,
    getQuizResultSwatchPropsWithVariationClick: getQuizResultSwatchPropsWithVariationClickMock,
  };

  describe('with getQuizResultSwatchPropsWithVariationClick function', () => {
    it('renders swatches for each variation', () => {
      const view = renderToString(<ResultCardSwatches {...props} />);
      expect(view).toContain('cio-result-card-swatch');
      expect(getQuizResultSwatchPropsWithVariationClickMock).toHaveBeenCalledTimes(2);
    });
  });

  describe('without getQuizResultSwatchPropsWithVariationClick function', () => {
    it('does not render swatches', () => {
      const propsWithoutFunction = {
        faceOutResult: mockResult,
      };

      const view = renderToString(<ResultCardSwatches {...propsWithoutFunction} />);
      expect(view).not.toContain('cio-result-card-swatch');
    });
  });

  describe('with no variations', () => {
    it('renders no swatches when variations is undefined', () => {
      const propsWithoutVariations = {
        ...props,
        faceOutResult: { ...mockResult, variations: undefined },
      };

      const view = renderToString(<ResultCardSwatches {...propsWithoutVariations} />);
      expect(view).not.toContain('cio-result-card-swatch');
    });

    it('renders no swatches when variations is empty', () => {
      const propsWithEmptyVariations = {
        ...props,
        faceOutResult: { ...mockResult, variations: [] },
      };

      const view = renderToString(<ResultCardSwatches {...propsWithEmptyVariations} />);
      expect(view).not.toContain('cio-result-card-swatch');
    });
  });
});
