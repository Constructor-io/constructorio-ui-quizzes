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

const quizzes = [
  {
    apiKey: 'key_1tigFZoUEs7Ygkww',
    quizId: 'find-your-perfect-dining-room-set',
    name: 'Dining',
  },
  {
    apiKey: 'key_1tigFZoUEs7Ygkww',
    quizId: 'find-your-sofa-v4',
    name: 'Sofa',
  },
  {
    apiKey: 'key_n4SkMH5PFWLdStQZ',
    quizId: 'coffee-quiz',
    name: 'Coffee',
  },
];

function RenderInASmallContainerTemplate(args: IQuizProps) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [quiz, setQuiz] = useState(quizzes[0]);

  return (
    <div className='small-container-example-wrapper'>
      <div className='small-container-example'>
        {quizzes.map((q) => (
          <div key={q.quizId} onClick={() => setQuiz(q)}>
            <input type='radio' />
            <span>{q.name}</span>
          </div>
        ))}
        <br />
        <div>{quiz.name}</div>
        <CioQuiz
          {...args}
          apiKey={quiz.apiKey}
          quizId={quiz.quizId}
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
