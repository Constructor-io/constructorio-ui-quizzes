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
  resultCardSalePriceKey: 'salePrice',
};

export const BasicUsage = ComponentTemplate.bind({});
BasicUsage.args = { apiKey, quizId, resultsPageOptions };
addComponentStoryDescription(
  BasicUsage,
  `const args = ${stringifyWithDefaults(BasicUsage.args)}`,
  basicDescription
);

const cioJsClient = new ConstructorIOClient({ apiKey });

// The following block is to remove unrelated modules from Storybook's "Controls" panel.
// This should not be done in an actual application
// @ts-ignore
delete cioJsClient.autocomplete;
// @ts-ignore
delete cioJsClient.search;
// @ts-ignore
delete cioJsClient.browse;
// @ts-ignore
delete cioJsClient.recommendations;

export const ProvideCIOClientInstance = ComponentTemplate.bind({});
ProvideCIOClientInstance.args = { quizId, resultsPageOptions, cioJsClient };
addComponentStoryDescription(
  ProvideCIOClientInstance,
  `
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';

const cioJsClient = new ConstructorIOClient({ apiKey: '${apiKey}' });
const args = ${stringifyWithDefaults(ProvideCIOClientInstance.args)};`,
  cioJsClientDescription
);
