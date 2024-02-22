// eslint-disable-next-line
export const argTypes = {
  quizId: {
    description: 'ID of the quiz',
    control: {
      type: 'text',
    },
  },
  quizVersionId: {
    description: 'Optional quiz version Id',
  },
  apiKey: {
    description: 'Your Constructor API key. Either `apiKey` or `cioJsClient` are required',
  },
  'callbacks.onQuizNextQuestion': {
    description: 'Callback function to be called when the next question is loaded',
    control: false,
    table: {
      subcategory: 'callbacks',
      defaultValue: {
        summary: 'null',
      },
      type: {
        summary: '(question) => void',
        detail: '(question: QuestionWithAnswer) => void',
      },
    },
  },
  'callbacks.onQuizResultsLoaded': {
    description: 'Callback function to be called when the quiz results are loaded',
    control: false,
    table: {
      subcategory: 'callbacks',
      defaultValue: {
        summary: 'null',
      },
      type: {
        summary: '(results) => void',
        detail: '(results: QuizResultDataPartial) => void',
      },
    },
  },
  'callbacks.onQuizResultClick': {
    description: 'Callback function to be called when a quiz result is clicked',
    control: false,
    table: {
      subcategory: 'callbacks',
      defaultValue: {
        summary: 'null',
      },
      type: {
        summary: '(result, position: number) => void',
        detail: '(result: QuizResultDataPartial, position: number) => void',
      },
    },
  },
  'callbacks.onAddToCartClick': {
    description: 'Callback function to be called when the add to cart button is clicked',
    control: false,
    table: {
      subcategory: 'callbacks',
      defaultValue: {
        summary: 'null',
      },
      type: {
        summary: '(result) => void',
        detail: '(result: QuizResultDataPartial) => void',
      },
    },
  },
  'callbacks.onAddToFavoritesClick': {
    description: 'Callback function to be called when the add to favorites button is clicked',
    control: false,
    table: {
      subcategory: 'callbacks',
      defaultValue: {
        summary: 'null',
      },
      type: {
        summary: '(result) => void',
        detail: '(result: QuizResultDataPartial) => void',
      },
    },
  },
  'callbacks.onEmailResults': {
    description: 'Callback function to be called when emailing results.',
    control: false,
    table: {
      subcategory: 'callbacks',
      defaultValue: {
        summary: 'null',
      },
      type: {
        summary: '(args) => void',
        detail: '(args: QuizEmailResults) => void',
      },
    },
  },
  cioJsClient: {
    description:
      'Optional custom constructor instance. Either `apiKey` or `cioJsClient` are required',
  },
  primaryColor: {
    description: "RGB value string for quiz primary theme color ie: `'255, 82, 48'`",
    control: {
      type: 'text',
    },
    defaultValue: {
      summary: '35, 71, 199',
    },
  },
  'resultCardOptions.resultCardRegularPriceKey': {
    description: 'Key name for the regular price in the API response',
    control: {
      type: 'text',
    },
    table: {
      subcategory: 'resultCardOptions',
      defaultValue: {
        summary: 'regular_price',
      },
      type: {
        summary: 'string',
      },
    },
  },
  'resultCardOptions.resultCardSalePriceKey': {
    description: 'Key name for the sale price in the API response',
    control: {
      type: 'text',
    },
    table: {
      subcategory: 'resultCardOptions',
      defaultValue: {
        summary: 'sale_price',
      },
      type: {
        summary: 'string',
      },
    },
  },
  'resultCardOptions.resultCardRatingCountKey': {
    description: 'Key name for the rating count in the API response',
    control: {
      type: 'text',
    },
    table: {
      subcategory: 'resultCardOptions',
      defaultValue: {
        summary: 'rating_count',
      },
      type: {
        summary: 'string',
      },
    },
  },
  'resultCardOptions.resultCardRatingScoreKey': {
    description: 'Key name for the rating score in the API response',
    control: {
      type: 'text',
    },
    table: {
      subcategory: 'resultCardOptions',
      defaultValue: {
        summary: 'rating_score',
      },
      type: {
        summary: 'string',
      },
    },
  },
  'resultCardOptions.renderResultCardPriceDetails': {
    description: 'Callback function to render result card price details',
    control: false,
    table: {
      subcategory: 'resultCardOptions',
      defaultValue: {
        summary: 'null',
      },
      type: {
        summary: '(result) => JSX.Element',
        detail: '(result: QuizResultDataPartial) => JSX.Element',
      },
    },
  },
  'resultsPageOptions.numResultsToDisplay': {
    description: 'Number of results to display on the results page',
    control: {
      type: 'number',
    },
    table: {
      subcategory: 'resultsPageOptions',
      defaultValue: {
        summary: 5,
      },
      type: {
        summary: 'number',
      },
    },
  },
  'resultsPageOptions.favoriteItems': {
    description: 'Array of favorite item IDs',
    control: false,
    table: {
      subcategory: 'resultsPageOptions',
      type: {
        summary: 'string[]',
      },
    },
  },
  'resultsPageOptions.showShareResultsButton': {
    description: 'Boolean for whether or not to show share results button on the results page',
    control: {
      type: 'boolean',
    },
    table: {
      subcategory: 'resultsPageOptions',
      defaultValue: {
        summary: true,
      },
      type: {
        summary: 'boolean',
      },
    },
  },
  'resultsPageOptions.requestConfigs': {
    description: `[Additional Quiz results API request parameters to refine your results](https://constructor-io.github.io/constructorio-client-javascript/module-quizzes.html#~getQuizResults)`,
    control: {
      type: 'QuizzesResultsParameters',
    },
    table: {
      subcategory: 'resultsPageOptions',
      type: {
        summary: 'QuizzesResultsParameters',
      },
    },
  },
  'sessionStateOptions.showSessionModal': {
    description:
      'Boolean for whether or not to show session modal to hydrate quiz on the results page',
    control: {
      type: 'boolean',
    },
    table: {
      subcategory: 'sessionStateOptions',
      defaultValue: {
        summary: false,
      },
      type: {
        summary: 'boolean',
      },
    },
  },
  'sessionStateOptions.showSessionModalOnResults': {
    description: 'Boolean for whether or not to show session modal to hydrate quiz',
    control: {
      type: 'boolean',
    },
    table: {
      subcategory: 'sessionStateOptions',
      defaultValue: {
        summary: false,
      },
      type: {
        summary: 'boolean',
      },
    },
  },
  'sessionStateOptions.sessionStateKey': {
    description: 'Key name where session storage state is saved',
    control: {
      type: 'text',
    },
    table: {
      subcategory: 'sessionStateOptions',
      defaultValue: {
        summary: 'quizState',
      },
      type: {
        summary: 'string',
      },
    },
  },
  enableHydration: {
    description: 'Boolean for whether or not to hydrate quiz questions and results on page reload',
    defaultValue: {
      summary: 'true',
    },
  },
};

export const docsControls = {
  sort: 'requiredFirst',
  exclude: ['sessionStateOptions', 'callbacks', 'resultsPageOptions', 'resultCardOptions'],
};

export const storiesControls = {
  include: ['apiKey', 'quizId', 'quizVersionId', 'primaryColor'],
};
