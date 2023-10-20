/* eslint-disable no-console, react/jsx-props-no-spreading */
import CioQuiz from '../../../components/CioQuiz';
import { argTypes, storiesControls } from '../argTypes';
import { stringifyWithDefaults } from '../../../utils';
import { ComponentTemplate, addComponentStoryDescription } from '../Component';
import { changePrimaryColorDescription, apiKey, quizId } from '../../../constants';

export default {
  title: 'Quiz/Style Customizations',
  component: CioQuiz,
  argTypes,
  parameters: {
    controls: storiesControls,
  },
  tags: ['autodocs'],
};

const resultsPageOptions = {
  onAddToCartClick: (item) => {
    console.log('Add to cart');
    console.dir(item);
  },
  onEmailResults: (item) => console.dir(item),
};

export const ChangePrimaryColor = ComponentTemplate.bind({});
ChangePrimaryColor.args = { apiKey, quizId, resultsPageOptions, primaryColor: '255, 82, 48' };
addComponentStoryDescription(
  ChangePrimaryColor,
  `const args = ${stringifyWithDefaults(ChangePrimaryColor.args)}`,
  changePrimaryColorDescription
);
