import CioQuiz from '../../../components/CioQuiz';
import { argTypes } from '../argTypes';
import { stringify } from '../../../utils';
import { ComponentTemplate, addComponentStoryDescription } from '.';
import { basicDescription, componentDescription, apiKey, quizId } from '../../../constants';

export default {
  title: 'Quiz/Component',
  component: CioQuiz,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: componentDescription
      }
    }
  }
};

export const Default = ComponentTemplate.bind({});
Default.args = { apiKey, quizId };
addComponentStoryDescription(Default, `const args = ${stringify(Default.args)}`, basicDescription);
