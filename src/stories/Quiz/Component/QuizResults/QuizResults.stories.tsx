import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import ResultContainer from '../../../../components/ResultContainer/ResultContainer';
import { resultCardOptions } from '../../tests/mocks';
import QuizResultsVariationsDecorator, {
  QuizResultsPrimaryDecorator,
} from './QuizResultsDecorator';

const meta: Meta<typeof ResultContainer> = {
  title: 'Quiz/CioQuiz/Results/QuizResultsPage',
  component: ResultContainer,
  argTypes: { onShare: { action: 'onShare' } },
};

export default meta;
type Story = StoryObj<typeof ResultContainer>;

export const Primary: Story = {
  args: {
    resultCardOptions,
  },
  render: (args) => (
    <div className='results-example-wrapper'>
      <ResultContainer resultCardOptions={resultCardOptions} onShare={args.onShare} />
    </div>
  ),
  decorators: [(story) => QuizResultsPrimaryDecorator(story)],
};

export const QuizResultsPage: Story = {
  args: {
    resultCardOptions,
  },
  render: (args) => (
    <div className='results-example-wrapper'>
      <ResultContainer resultCardOptions={resultCardOptions} onShare={args.onShare} />
    </div>
  ),
  decorators: [(story) => QuizResultsVariationsDecorator(story)],
};
