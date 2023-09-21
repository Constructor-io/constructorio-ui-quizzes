/* eslint-disable no-console */
import MyQuiz, { addHookStoryCode } from './index';
import '../../../styles.css';
import { basicDescription, apiKey, quizId } from '../../../constants';
import { stringifyWithDefaults } from '../../../utils';
import { argTypes } from '../argTypes';

export default {
  title: 'Quiz/Hooks',
  component: MyQuiz,
  argTypes,
};

const resultsPageOptions = {
  numResultsToDisplay: 10,
  onQuizResultsLoaded: () => console.log('onQuizResultLoaded'),
  onQuizResultClick: () => console.log('onQuizResultClick'),
  onAddToCartClick: () => console.log('onQuizAddToCart'),
};

export const BasicUsage = MyQuiz.bind({});
BasicUsage.args = { apiKey, quizId, resultsPageOptions };
addHookStoryCode(
  BasicUsage,
  `const args = ${stringifyWithDefaults(BasicUsage.args)}`,
  basicDescription
);
