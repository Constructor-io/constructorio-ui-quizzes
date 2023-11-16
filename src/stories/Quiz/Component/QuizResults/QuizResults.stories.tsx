import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import ResultContainer from '../../../../components/ResultContainer/ResultContainer';
import { resultCardOptions } from '../../tests/mocks';
import QuizResultsDecorator from './QuizResultsDecorator';

const meta: Meta<typeof ResultContainer> = {
  title: 'Quiz/Component/Results/QuizResultsPage',
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
  ),
  decorators: [(story) => QuizResultsDecorator(story)],
};
