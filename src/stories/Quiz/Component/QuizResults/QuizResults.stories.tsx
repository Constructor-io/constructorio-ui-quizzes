import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';

import { within } from '@storybook/testing-library';
import React from 'react';
import ResultContainer from '../../../../components/ResultContainer/ResultContainer';
import { resultCardOptions } from '../../tests/mocks';
import QuizResultsDecorator from './QuizResultsDecorator';

const meta: Meta<typeof ResultContainer> = {
  title: 'Quiz/Results/QuizResultsPage',
  component: ResultContainer,
  argTypes: { onShare: { action: 'onShare' } },
};

export default meta;
type Story = StoryObj<typeof ResultContainer>;

export const QuizResultsPage: Story = {
  args: {
    resultCardOptions,
  },
  render: (args) => (
    <div className='results-example-wrapper'>
      <ResultContainer resultCardOptions={resultCardOptions} onShare={args.onShare} />
    </div>
  ), // eslint-disable-line
  decorators: [(story) => QuizResultsDecorator(story)],
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
