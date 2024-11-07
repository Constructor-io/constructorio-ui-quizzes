/* eslint-disable no-console, react/jsx-props-no-spreading */
import React, { useState } from 'react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import type { Meta, StoryObj } from '@storybook/react';
import CioQuiz from '../../../components/CioQuiz';
import { argTypes, storiesControls } from '../argTypes';
import { apiKey, quizId } from '../../../constants';
import {
  callbacks,
  resultsPageOptions,
  sessionStateOptions,
  resultCardOptions,
} from '../tests/mocks';

import { IQuizProps } from '../../../types';

const meta: Meta<typeof CioQuiz> = {
  title: 'Quiz/CioQuiz',
  component: CioQuiz,
  parameters: {
    controls: storiesControls,
  },
  argTypes,
};

export default meta;

type Story = StoryObj<typeof CioQuiz>;

export const BasicUsage: Story = {
  args: {
    quizId,
    apiKey,
    quizVersionId: '',
    resultsPageOptions,
    resultCardOptions,
    callbacks,
    sessionStateOptions,
    primaryColor: '35, 71, 199',
  },
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
            showShareResultsButton: true,
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
            onEmailResults: async () => {},
          }}
        />
      </div>
    </div>
  );
}

export const RenderInASmallContainer: Story = {
  args: {},
  render: (args) => <RenderInASmallContainerTemplate {...args} />,
};

RenderInASmallContainer.args = { apiKey, quizId, callbacks, resultCardOptions };

const cioJsClient = new ConstructorIOClient({ apiKey });

export const ProvideCIOClientInstance: Story = {
  args: {
    quizId,
    resultsPageOptions,
    cioJsClient,
    resultCardOptions,
  },
};

export const PassCallbacks: Story = {
  args: { apiKey, quizId, resultsPageOptions, resultCardOptions, callbacks },
};

export const HandleFavoritesOnResultsPage: Story = {
  args: {
    apiKey,
    quizId,
    resultsPageOptions,
    callbacks,
  },
};

export const RenderCustomResultCardOnResultsPage: Story = {
  args: {
    apiKey,
    quizId,
    resultsPageOptions,
    resultCardOptions: {
      renderResultCard: (result) => (
        <div>
          <img src={result.data?.image_url} className='product-image' alt='quiz-result' />
          <div className='product-title'>{result.value}</div>
          <div className='product-price'>{result.data?.price}</div>
        </div>
      ),
    },
    callbacks,
  },
};
