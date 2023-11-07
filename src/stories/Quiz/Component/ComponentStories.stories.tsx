/* eslint-disable no-console, react/jsx-props-no-spreading */
import React, { useState } from 'react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import type { Meta } from '@storybook/react';
import CioQuiz from '../../../components/CioQuiz';
import { argTypes, storiesControls } from '../argTypes';
import ComponentTemplate from '.';
import { apiKey, quizId } from '../../../constants';
import {
  callbacks,
  resultsPageOptions,
  sessionStateOptions,
  resultCardOptions,
} from '../tests/mocks';

import { IQuizProps } from '../../../types';

const meta: Meta<typeof CioQuiz> = {
  title: 'Quiz/Component',
  component: CioQuiz,
  parameters: {
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

const cioJsClient = new ConstructorIOClient({ apiKey });

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

export const PassCallbacks = ComponentTemplate.bind({});
PassCallbacks.args = {
  apiKey,
  quizId,
  resultsPageOptions,
  resultCardOptions,
  callbacks,
};

export const HandleFavoritesOnResultsPage = ComponentTemplate.bind({});
HandleFavoritesOnResultsPage.args = {
  apiKey,
  quizId,
  resultsPageOptions,
  callbacks,
};
