import React from 'react';
import { renderToString } from 'react-dom/server';

import ResultCardSwatches from '../../../src/components/ResultCardSwatches/ResultCardSwatches';
import { withContext } from '../../__tests__/utils';
import { QuizContextValue } from '../../../src/components/CioQuiz/context';
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

  const props = {
    faceOutResult: mockResult,
    onVariationClick: onVariationClickMock,
  };

  const getQuizResultSwatchPropsMock = jest
    .fn()
    .mockImplementation((variation, onVariationClick) => ({
      className: 'cio-result-card-swatch',
      type: 'button',
      onClick: () => onVariationClick(variation),
      style: { background: `url(${variation.data.image_url})` },
    }));

  const contextMocks: Partial<QuizContextValue> = {
    getQuizResultSwatchProps: getQuizResultSwatchPropsMock,
  };

  describe('with context function', () => {
    const Subject = withContext(ResultCardSwatches, { contextMocks });

    it('renders swatches for each variation', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('cio-result-card-swatch');
      expect(getQuizResultSwatchPropsMock).toHaveBeenCalledTimes(2);
    });

    it('passes swatchImageKey when provided', () => {
      const swatchImageKey = 'option_image_source';
      renderToString(<Subject {...props} swatchImageKey={swatchImageKey} />);

      expect(getQuizResultSwatchPropsMock).toHaveBeenCalledWith(
        mockResult?.variations?.[0],
        onVariationClickMock,
        mockResult,
        swatchImageKey
      );
    });
  });

  describe('without context function', () => {
    const Subject = withContext(ResultCardSwatches, {
      contextMocks: { getQuizResultSwatchProps: undefined },
    });

    it('does not render swatches', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).not.toContain('cio-result-card-swatch');
    });
  });

  describe('with no variations', () => {
    const Subject = withContext(ResultCardSwatches, { contextMocks });

    it('renders no swatches when variations is undefined', () => {
      const propsWithoutVariations = {
        ...props,
        faceOutResult: { ...mockResult, variations: undefined },
      };

      const view = renderToString(<Subject {...propsWithoutVariations} />);
      expect(view).not.toContain('cio-result-card-swatch');
    });

    it('renders no swatches when variations is empty', () => {
      const propsWithEmptyVariations = {
        ...props,
        faceOutResult: { ...mockResult, variations: [] },
      };

      const view = renderToString(<Subject {...propsWithEmptyVariations} />);
      expect(view).not.toContain('cio-result-card-swatch');
    });
  });
});
