/* eslint-disable no-console */
import MyQuiz, { addHookStoryCode } from './index';
import '../../../styles.css';
import { basicDescription, apiKey, quizId } from '../../../constants';
import { stringifyWithDefaults } from '../../../utils';
import { argTypes, storiesControls } from '../argTypes';
import {
  callbacks,
  resultsPageOptions,
  sessionStateOptions,
  resultCardOptions,
} from '../tests/mocks';

export default {
  title: 'Quiz/Hooks',
  component: MyQuiz,
  argTypes,
};

export const BasicUsage = MyQuiz.bind({});
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

addHookStoryCode(
  BasicUsage,
  `const args = ${stringifyWithDefaults(BasicUsage.args)}`,
  basicDescription
);
