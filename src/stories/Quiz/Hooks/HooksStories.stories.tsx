import type { Meta } from '@storybook/react';
import HooksTemplate from './index';
import '../../../styles.css';
import { apiKey, quizId } from '../../../constants';
import { argTypes, storiesControls } from '../argTypes';
import {
  resultsPageOptions,
  resultCardOptions,
  callbacks,
  sessionStateOptions,
} from '../tests/mocks';

const meta: Meta<typeof HooksTemplate> = {
  title: 'Quiz/useCioQuiz',
  component: HooksTemplate,
  parameters: {
    controls: storiesControls,
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  argTypes,
};

export default meta;

export const BasicUsage = HooksTemplate.bind({});
BasicUsage.args = {
  quizId,
  apiKey,
  quizVersionId: '',
  resultsPageOptions,
  resultCardOptions,
  callbacks,
  sessionStateOptions,
  primaryColor: '35, 71, 199',
};
