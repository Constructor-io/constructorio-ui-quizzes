import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ResultCardSwatches from '../../../src/components/ResultCardSwatches/ResultCardSwatches';
import { withContext } from '../../__tests__/utils';
import { QuizContextValue } from '../../../src/components/CioQuiz/context';
import * as factories from '../../__tests__/factories';

describe(`${ResultCardSwatches.name} client`, () => {
  beforeEach(() => {
    const spy = jest.spyOn(console, 'error');
    spy.mockImplementation(() => {});
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

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

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('with context function', () => {
    const Subject = withContext(ResultCardSwatches, { contextMocks });

    it('renders swatches for each variation', () => {
      render(<Subject {...props} />);

      const swatches = screen.getAllByRole('button');
      expect(swatches).toHaveLength(2);
    });

    it('calls getQuizResultSwatchProps with correct parameters', () => {
      render(<Subject {...props} />);

      expect(getQuizResultSwatchPropsMock).toHaveBeenCalledTimes(2);
      expect(getQuizResultSwatchPropsMock).toHaveBeenCalledWith(
        mockResult?.variations?.[0],
        onVariationClickMock,
        mockResult,
        undefined
      );
    });

    it('passes swatchImageKey when provided', () => {
      const swatchImageKey = 'option_image_source';
      render(<Subject {...props} swatchImageKey={swatchImageKey} />);

      expect(getQuizResultSwatchPropsMock).toHaveBeenCalledWith(
        mockResult?.variations?.[0],
        onVariationClickMock,
        mockResult,
        swatchImageKey
      );
    });

    it('calls onVariationClick when a swatch is clicked', () => {
      render(<Subject {...props} />);

      const swatches = screen.getAllByRole('button');
      fireEvent.click(swatches[1]);

      expect(onVariationClickMock).toHaveBeenCalledWith(mockResult?.variations?.[1]);
    });
  });

  describe('without context function', () => {
    const Subject = withContext(ResultCardSwatches, {
      contextMocks: { getQuizResultSwatchProps: undefined },
    });

    it('does not render swatches', () => {
      render(<Subject {...props} />);

      const swatches = screen.queryAllByRole('button');
      expect(swatches).toHaveLength(0);
    });
  });

  describe('with no variations', () => {
    const Subject = withContext(ResultCardSwatches, { contextMocks });

    it('renders no swatches when variations is undefined', () => {
      const propsWithoutVariations = {
        ...props,
        faceOutResult: { ...mockResult, variations: undefined },
      };

      render(<Subject {...propsWithoutVariations} />);

      const swatches = screen.queryAllByRole('button');
      expect(swatches).toHaveLength(0);
    });

    it('renders no swatches when variations is empty', () => {
      const propsWithEmptyVariations = {
        ...props,
        faceOutResult: { ...mockResult, variations: [] },
      };

      render(<Subject {...propsWithEmptyVariations} />);

      const swatches = screen.queryAllByRole('button');
      expect(swatches).toHaveLength(0);
    });
  });
});
