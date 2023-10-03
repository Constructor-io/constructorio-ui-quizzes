/* eslint-disable no-console, react/jsx-props-no-spreading */
import React, { useState } from 'react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import type { Meta } from '@storybook/react';
import CioQuiz from '../../../components/CioQuiz';
import { argTypes, docsControls, storiesControls } from '../argTypes';
import { stringifyWithDefaults } from '../../../utils';
import { ComponentTemplate, addComponentStoryDescription } from '.';
import {
  cioJsClientDescription,
  smallContainerDescription,
  apiKey,
  quizId,
  callbacksDescription,
  favoritesDescription,
} from '../../../constants';
import {
  callbacks,
  resultsPageOptions,
  sessionStateOptions,
  resultCardOptions,
} from '../tests/mocks';

import { IQuizProps } from '../../../types';

const meta: Meta<typeof CioQuiz> = {
  title: 'Quiz/Full Quiz',
  component: CioQuiz,
  tags: ['autodocs'],
  parameters: {
    docs: {
      controls: docsControls,
    },
    controls: storiesControls,
  },
  argTypes,
};

export default meta;

export const BasicUsage = ComponentTemplate.bind({});
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

function RenderInASmallContainerTemplate(args: IQuizProps) {
  const [favorites, setFavorites] = useState<string[]>([]);

  return (
    <div className='small-container-example-wrapper'>
      <div className='small-container-example'>
        <CioQuiz
          {...args}
          resultsPageOptions={{
            favoriteItems: favorites,
          }}
          callbacks={{
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
RenderInASmallContainer.args = { apiKey, quizId, callbacks, resultCardOptions };
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
  onAddToCartClick: callbacks.onAddToCartClick,
  resultCardRegularPriceKey: resultCardOptions.resultCardRegularPriceKey,
};

export const ProvideCIOClientInstance = ComponentTemplate.bind({});
ProvideCIOClientInstance.args = {
  quizId,
  resultsPageOptions: cioClientStoryResultsPageOptions,
  cioJsClient,
  resultCardOptions,
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
  resultCardOptions,
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
