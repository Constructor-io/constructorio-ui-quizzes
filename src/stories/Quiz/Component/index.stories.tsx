import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import CioQuiz from '../../../components/CioQuiz';
import { argTypes } from '../argTypes';
import { stringify } from '../../../utils';
import { ComponentTemplate, addComponentStoryDescription } from '.';
import {
  basicDescription,
  componentDescription,
  cioJsClientDescription,
  apiKey,
  quizId
} from '../../../constants';

export default {
  title: 'Quiz',
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

export const BasicUsage = ComponentTemplate.bind({});
BasicUsage.args = { apiKey, quizId };
addComponentStoryDescription(
  BasicUsage,
  `const args = ${stringify(BasicUsage.args)}`,
  basicDescription
);

const cioJsClient = new ConstructorIOClient({ apiKey });

export const ProvideCIOClientInstance = ComponentTemplate.bind({});
ProvideCIOClientInstance.args = { quizId, cioJsClient };
addComponentStoryDescription(
  ProvideCIOClientInstance,
  `
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';

const cioJsClient = new ConstructorIOClient({ apiKey: '${apiKey}' });
const args = { quizId, cioJsClient };`,
  cioJsClientDescription
);
