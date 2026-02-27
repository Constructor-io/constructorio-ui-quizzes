import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CioQuiz from '../../../components/CioQuiz';
import { quizId } from '../../../constants';
import { callbacks } from '../tests/mocks';

const meta: Meta = {
  title: 'Quiz/CioQuiz/ErrorState',
};

export default meta;

export const ErrorState: StoryObj = {
  render: () => <CioQuiz apiKey='invalid-api-key' quizId={quizId} callbacks={callbacks} />,
};
