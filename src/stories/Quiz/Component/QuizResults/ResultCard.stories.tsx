import type { Meta, StoryObj } from '@storybook/react';

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
  title: 'Quiz/Component/Results/ResultCard',
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

export const WithRegularPrice: Story = {
  args: regularPriceArgs,
  render: () => (
    <div className='results-example-wrapper'>
      <ResultCard {...regularPriceArgs} />
    </div>
  ),

  decorators: [(story) => QuizResultsDecorator(story)],
};

const salePriceStoryArgs = {
  result: product,
  regularPriceKey: 'price',
  salePriceKey: 'salePrice',
  ratingCountKey: 'ratingCount',
  ratingScoreKey: 'ratingScore',
  resultPosition: 0,
};
export const WithSalePrice: Story = {
  args: salePriceStoryArgs,
  render: () => (
    <div className='results-example-wrapper'>
      <ResultCard {...salePriceStoryArgs} />
    </div>
  ),

  decorators: [(story) => QuizResultsDecorator(story)],
};

const customPricesStoryArgs = {
  result: product,
  ratingCountKey: 'ratingCount',
  ratingScoreKey: 'ratingScore',
  resultPosition: 0,
  renderResultCardPriceDetails: (result) => (
    <div className='cio-result-card-prices'>
      {result.data.salePrice && (
        <span className='cio-result-card-sale-price'>${result.data.salePrice}</span>
      )}

      {result.data.discount && (
        <div>
          <div className='cio-result-card-discount'>was ${result.data.price}</div>
          <div className='cio-result-card-discount'>
            saved ${result.data.price - result.data.salePrice}{' '}
          </div>
        </div>
      )}
    </div>
  ),
};
export const WithCustomPrices: Story = {
  args: customPricesStoryArgs,
  render: () => (
    <div className='results-example-wrapper'>
      <ResultCard {...customPricesStoryArgs} />
    </div>
  ),

  decorators: [(story) => QuizResultsDecorator(story)],
};
