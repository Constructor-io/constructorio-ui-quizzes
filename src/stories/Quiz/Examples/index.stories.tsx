/* eslint-disable no-console, react/jsx-props-no-spreading */
import CioQuiz from '../../../components/CioQuiz';
import { argTypes } from '../argTypes';

import RetrievingAnswersStory from './RetrievingAnswers';

export default {
  title: 'Quiz/Specific Examples',
  component: CioQuiz,
  argTypes,
  tags: ['autodocs'],
};

// Assign a const variable here instead of directly exporting so that Storybook can space-delimit the name
export const RetrievingAnswers = RetrievingAnswersStory;
