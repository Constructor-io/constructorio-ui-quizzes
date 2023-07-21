import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';

import { within } from '@storybook/testing-library';
import React from 'react';
import ResultContainer from '../../../../components/ResultContainer/ResultContainer';
import QuizResultsDecorator from './QuizResultsDecorator';

const meta: Meta<typeof ResultContainer> = {
  title: 'Quiz/Results/QuizResultsPage',
  component: ResultContainer,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ResultContainer>;

const resultsPageOptions = {
  onAddToCartClick: () => {},
  resultCardRegularPriceKey: 'price',
  resultCardSalePriceKey: 'salePrice',
};

export const QuizResultsPage: Story = {
  args: {
    options: resultsPageOptions,
  },
  render: () => <div className="results-example-wrapper"><ResultContainer options={resultsPageOptions} /></div>, // eslint-disable-line
  decorators: [(story) => QuizResultsDecorator(story, resultsPageOptions)],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Assert DOM structure
    const resultsTitle = canvas.getByText('Here are your results');
    const resultsFilters = document.querySelector('.cio-results-filter-options');
    const resultsFilterChocolate = canvas.getByText('Chocolate');
    const resultsFilterMedium = canvas.getByText('Medium');
    const redoButton = document.querySelector('.cio-question-redo-button');
    const resultCards = document.querySelectorAll('.cio-result-card');

    expect(resultsTitle).toBeInTheDocument();
    expect(resultsFilters).toBeInTheDocument();
    expect(resultsFilters).toContainElement(resultsFilterChocolate);
    expect(resultsFilters).toContainElement(resultsFilterMedium);
    expect(redoButton).toBeInTheDocument();
    expect(resultCards.length).toEqual(3);
  },
};
