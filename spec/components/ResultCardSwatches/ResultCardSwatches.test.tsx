import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import ResultCardSwatches from '../../../src/components/ResultCardSwatches/ResultCardSwatches';
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

  const getQuizResultSwatchPropsMock = jest.fn().mockImplementation((variation) => ({
    className: 'cio-result-card-swatch',
    type: 'button',
    onClick: () => onVariationClickMock(variation),
    style: {
      background: `url(${variation.data.image_url})`,
    },
  }));

  const props = {
    faceOutResult: mockResult,
    getQuizResultSwatchProps: getQuizResultSwatchPropsMock,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('with getQuizResultSwatchProps function', () => {
    it('renders swatches for each variation', () => {
      render(<ResultCardSwatches {...props} />);

      const swatches = screen.getAllByRole('button');
      expect(swatches).toHaveLength(2);
    });

    it('calls getQuizResultSwatchProps with correct parameters', () => {
      render(<ResultCardSwatches {...props} />);

      expect(getQuizResultSwatchPropsMock).toHaveBeenCalledTimes(2);
      expect(getQuizResultSwatchPropsMock).toHaveBeenCalledWith(mockResult?.variations?.[0]);
    });

    it('calls onVariationClick when a swatch is clicked', () => {
      render(<ResultCardSwatches {...props} />);

      const swatches = screen.getAllByRole('button');
      fireEvent.click(swatches[1]);

      expect(onVariationClickMock).toHaveBeenCalledWith(mockResult?.variations?.[1]);
    });
  });

  describe('without getQuizResultSwatchProps function', () => {
    it('does not render swatches', () => {
      const propsWithoutFunction = {
        faceOutResult: mockResult,
      };

      render(<ResultCardSwatches {...propsWithoutFunction} />);

      const swatches = screen.queryAllByRole('button');
      expect(swatches).toHaveLength(0);
    });
  });

  describe('with no variations', () => {
    it('renders no swatches when variations is undefined', () => {
      const propsWithoutVariations = {
        ...props,
        faceOutResult: { ...mockResult, variations: undefined },
      };

      render(<ResultCardSwatches {...propsWithoutVariations} />);

      const swatches = screen.queryAllByRole('button');
      expect(swatches).toHaveLength(0);
    });

    it('renders no swatches when variations is empty', () => {
      const propsWithEmptyVariations = {
        ...props,
        faceOutResult: { ...mockResult, variations: [] },
      };

      render(<ResultCardSwatches {...propsWithEmptyVariations} />);

      const swatches = screen.queryAllByRole('button');
      expect(swatches).toHaveLength(0);
    });
  });
});
