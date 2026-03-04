import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import ZeroResults from '../../../../components/ZeroResults/ZeroResults';
import { ZeroResultsDecorator } from './QuizResultsDecorator';

const meta: Meta = {
  title: 'Quiz/CioQuiz/Results/ZeroResultsPage',
};

export default meta;

export const ZeroResultsState: StoryObj = {
  render: () => <ZeroResults />,
  decorators: [() => <ZeroResultsDecorator />],
};
