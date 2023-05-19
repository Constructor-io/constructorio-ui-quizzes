/* eslint-disable no-console, react/jsx-props-no-spreading */
import React from 'react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import CioQuiz from '../../../components/CioQuiz';
import { argTypes } from '../argTypes';
import { stringifyWithDefaults } from '../../../utils';
import { ComponentTemplate, addComponentStoryDescription } from '.';
import {
  basicDescription,
  componentDescription,
  cioJsClientDescription,
  smallContainerDescription,
  apiKey,
  quizId,
} from '../../../constants';
import { IQuizProps } from '../../../types';

export default {
  title: 'Quiz/Full Quiz',
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
  onQuizResultClick: (result, position) => {
    console.log('Click result');
    console.dir(result, position);
  },
  onQuizResultsLoaded: (results) => {
    console.log('Loaded results');
    console.dir(results);
  },
  onAddToCartClick: (item) => {
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

function RenderInASmallContainerTemplate(args: IQuizProps) {
  return (
    <div className='small-container-example-wrapper'>
      <div className='small-container-example'>
        <CioQuiz {...args} />
      </div>
    </div>
  );
}
export const RenderInASmallContainer = RenderInASmallContainerTemplate.bind({});
RenderInASmallContainer.args = { apiKey, quizId, resultsPageOptions };
addComponentStoryDescription(
  RenderInASmallContainer,
  `
import '@constructor-io/constructorio-ui-quizzes/styles.css';

const args = ${stringifyWithDefaults(BasicUsage.args)}`,
  smallContainerDescription
);

const cioJsClient = new ConstructorIOClient({ apiKey });

// The following block is to remove unrelated modules from Storybook's "Controls" panel
// This should not be done in an actual application
// @ts-ignore
delete cioJsClient.autocomplete;
// @ts-ignore
delete cioJsClient.search;
// @ts-ignore
delete cioJsClient.browse;
// @ts-ignore
delete cioJsClient.recommendations;

const cioClientStoryResultsPageOptions = {
  onAddToCartClick: resultsPageOptions.onAddToCartClick,
  resultCardRegularPriceKey: resultsPageOptions.resultCardRegularPriceKey,
};

export const ProvideCIOClientInstance = ComponentTemplate.bind({});
ProvideCIOClientInstance.args = {
  quizId,
  resultsPageOptions: cioClientStoryResultsPageOptions,
  cioJsClient,
};
addComponentStoryDescription(
  ProvideCIOClientInstance,
  `
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';

const cioJsClient = new ConstructorIOClient({ apiKey: '${apiKey}' });
const args = ${stringifyWithDefaults(ProvideCIOClientInstance.args)};`,
  cioJsClientDescription
);
