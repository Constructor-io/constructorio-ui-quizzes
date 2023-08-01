import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';

import { within } from '@storybook/testing-library';
import React from 'react';
import ResultCard from '../../../../components/ResultCard/ResultCard';
import QuizResultsDecorator from './QuizResultsDecorator';

const product = {
  value: 'This is a result card item',
  data: {
    id: '1',
    price: 200,
    salePrice: 150,
    ratingCount: '12',
    ratingScore: '4',
    discount: '49.95',
    image_url: 'https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png',
  },
};

const meta: Meta<typeof ResultCard> = {
  title: 'Quiz/Results/ResultCard',
  component: ResultCard,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ResultCard>;

const regularPriceArgs = {
  result: product,
  regularPriceKey: 'price',
  resultPosition: 0,
};
export const ResultCardWithRegularPrice: Story = {
  args: regularPriceArgs,
  render: () => <div className="results-example-wrapper"><ResultCard {...regularPriceArgs} /></div>, // eslint-disable-line

  decorators: [(story) => QuizResultsDecorator(story)],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Assert DOM structure
    const resultCard = document.querySelector('.cio-result-card');
    const productImage = canvas.getByAltText('product');
    const productName = canvas.getByText('This is a result card item');
    const addToCart = canvas.getByText('Add to Cart');
    const regularPrice = document.querySelector('.cio-result-card-regular-price') as HTMLElement;

    expect(resultCard).toBeInTheDocument();
    expect(resultCard).toContainElement(productImage);
    expect(resultCard).toContainElement(productName);
    expect(resultCard).toContainElement(addToCart);
    expect(resultCard).toContainElement(regularPrice);
  },
};

const salePriceStoryArgs = {
  result: product,
  regularPriceKey: 'price',
  salePriceKey: 'salePrice',
  ratingCountKey: 'ratingCount',
  ratingScoreKey: 'ratingScore',
  discountLabelKey: 'discount',
  resultPosition: 0,
};
export const ResultCardWithSalePrice: Story = {
  args: salePriceStoryArgs,
  render: () => <div className="results-example-wrapper"><ResultCard {...salePriceStoryArgs} /></div>, // eslint-disable-line

  decorators: [(story) => QuizResultsDecorator(story)],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Assert DOM structure
    const resultCard = document.querySelector('.cio-result-card');
    const productImage = canvas.getByAltText('product');
    const productName = canvas.getByText('This is a result card item');
    const addToCart = canvas.getByText('Add to Cart');
    const regularPriceStrikeThrough = document.querySelector(
      '.cio-result-card-regular-price--strike-through'
    ) as HTMLElement;
    const salePrice = document.querySelector('.cio-result-card-sale-price') as HTMLElement;
    expect(resultCard).toBeInTheDocument();
    expect(resultCard).toContainElement(productImage);
    expect(resultCard).toContainElement(productName);
    expect(resultCard).toContainElement(addToCart);
    expect(resultCard).toContainElement(regularPriceStrikeThrough);
    expect(resultCard).toContainElement(salePrice);
  },
};
