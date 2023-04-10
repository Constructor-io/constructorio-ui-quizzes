/* eslint-disable no-console */
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import CioQuiz from '../../../components/CioQuiz';
import { argTypes } from '../argTypes';
import { stringifyWithDefaults } from '../../../utils';
import { ComponentTemplate, addComponentStoryDescription } from '.';
import {
  basicDescription,
  componentDescription,
  cioJsClientDescription,
  apiKey,
  quizId,
} from '../../../constants';

export default {
  title: 'Quiz/Component',
  component: CioQuiz,
  argTypes,
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
};

const resultsPageOptions = {
  clickItemCallback: (item) => {
    console.log('Click item');
    console.dir(item);
  },
  addToCartCallback: (item) => {
    console.log('Add to cart');
    console.dir(item);
  },
  resultCardRegularPriceKey: 'price',
  resultCardSalePriceKey: 'price',
};

export const BasicUsage = ComponentTemplate.bind({});
BasicUsage.args = { apiKey, quizId, resultsPageOptions };
addComponentStoryDescription(
  BasicUsage,
  `const args = ${stringifyWithDefaults(BasicUsage.args)}`,
  basicDescription
);

const cioJsClient = new ConstructorIOClient({ apiKey });

export const ProvideCIOClientInstance = ComponentTemplate.bind({});
ProvideCIOClientInstance.args = { quizId, cioJsClient, resultsPageOptions };
addComponentStoryDescription(
  ProvideCIOClientInstance,
  `
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';

const cioJsClient = new ConstructorIOClient({ apiKey: '${apiKey}' });
const args = { quizId, cioJsClient, resultsPageOptions };`,
  cioJsClientDescription
);
