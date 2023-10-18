import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';

import { within } from '@storybook/testing-library';
import React from 'react';
import ResultContainer from '../../../../components/ResultContainer/ResultContainer';
import QuizResultsDecorator from './QuizResultsDecorator';

const meta: Meta<typeof ResultContainer> = {
  title: 'Quiz/Results/QuizResultsPage',
  component: ResultContainer,
  argTypes: { setShowShareModal: { action: 'setShowShareModal' } },
};

export default meta;
type Story = StoryObj<typeof ResultContainer>;

const resultsPageOptions = {
  onAddToCartClick: () => {},
  resultCardRegularPriceKey: 'price',
  resultCardSalePriceKey: 'salePrice',
  resultCardRatingCountKey: 'ratingCount',
  resultCardRatingScoreKey: 'ratingScore',
};

export const QuizResultsPage: Story = {
  args: {
    options: resultsPageOptions,
  },
  render: (args) => (
    <div className='results-example-wrapper'>
      <ResultContainer options={resultsPageOptions} setShowShareModal={args.setShowShareModal} />
    </div>
  ), // eslint-disable-line
  decorators: [(story) => QuizResultsDecorator(story, resultsPageOptions)],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Assert DOM structure
    const resultsTitle = canvas.getByText('Here are your results');
    const selectedOptions = document.querySelector('.cio-results-filter-options');
    const resultsFilterChocolate = canvas.getByText('Chocolate');
    const resultsFilterMedium = canvas.getByText('Medium');
    const redoButton = document.querySelector('.cio-question-redo-button');
    const resultCards = document.querySelectorAll('.cio-result-card');
    const numResults = canvas.getByText('3 results');

    expect(resultsTitle).toBeInTheDocument();
    expect(selectedOptions).toBeInTheDocument();
    expect(selectedOptions).toContainElement(resultsFilterChocolate);
    expect(selectedOptions).toContainElement(resultsFilterMedium);
    expect(redoButton).toBeInTheDocument();
    expect(resultCards.length).toEqual(3);
    expect(numResults).toBeInTheDocument();
  },
};
