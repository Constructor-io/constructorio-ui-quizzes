/* eslint-disable no-console, react/jsx-props-no-spreading */
import React, { useState } from 'react';
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
  callbacksDescription,
  favoritesDescription,
} from '../../../constants';
import { IQuizProps, QuestionWithAnswer } from '../../../types';

export default {
  title: 'Quiz/Full Quiz',
  component: CioQuiz,
  argTypes,
  tags: ['autodocs'],
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
  onAddToFavoritesClick: (item) => {
    console.log('Add to favorites');
    console.dir(item);
  },
  resultCardRegularPriceKey: 'price',
  resultCardSalePriceKey: 'salePrice',
  favoriteItems: ['119010868', '119011085'],
};

const callbacks = {
  onQuizNextQuestion: (question: QuestionWithAnswer) => {
    console.dir(question);
  },
  onQuizSkipQuestion: (question: QuestionWithAnswer) => {
    console.dir(question);
  },
};

export const BasicUsage = ComponentTemplate.bind({});
BasicUsage.args = {
  apiKey,
  quizId,
  resultsPageOptions,
};
addComponentStoryDescription(
  BasicUsage,
  `const args = ${stringifyWithDefaults(BasicUsage.args)}`,
  basicDescription
);

function RenderInASmallContainerTemplate(args: IQuizProps) {
  const [favorites, setFavorites] = useState<string[]>([]);

  return (
    <div className='small-container-example-wrapper'>
      <div className='small-container-example'>
        <CioQuiz
          {...args}
          resultsPageOptions={{
            favoriteItems: favorites,
            onAddToCartClick: () => {},
            onAddToFavoritesClick: (result) => {
              if (result.data) {
                if (!favorites.includes(result.data.id)) {
                  setFavorites([...favorites, result.data.id]);
                } else {
                  setFavorites(favorites.filter((id) => id !== result.data?.id));
                }
              }
            },
          }}
        />
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

export const PassCallbacks = ComponentTemplate.bind({});
PassCallbacks.args = {
  apiKey,
  quizId,
  resultsPageOptions,
  callbacks,
};
addComponentStoryDescription(
  PassCallbacks,
  `const args = ${stringifyWithDefaults(PassCallbacks.args)}`,
  callbacksDescription
);

export const HandleFavoritesOnResultsPage = ComponentTemplate.bind({});
HandleFavoritesOnResultsPage.args = {
  apiKey,
  quizId,
  resultsPageOptions,
  callbacks,
};
addComponentStoryDescription(
  HandleFavoritesOnResultsPage,
  `const args = ${stringifyWithDefaults(HandleFavoritesOnResultsPage.args)}`,
  favoritesDescription
);
