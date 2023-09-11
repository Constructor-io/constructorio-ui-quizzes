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
  callbacks: {
    description: `Callback functions to be called when events are fired
    \`onQuizNextQuestion?: (question) => void);\`
    \`onQuizResultsLoaded?: (results) => void;\`
    \`onQuizResultClick?: (result, position: number) => void;\`
    \`onAddToCartClick?: (result) => void;\`
    \`onAddToFavoritesClick?: (result) => void;\`
    `,
    control: false,
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
  },
  resultCardOptions: {
    description: `Result card configuration options
      (Required for the component interface and has to match the keys in the API response to be correctly rendered)
      \`resultCardRegularPriceKey: string\`
      \`resultCardSalePriceKey: string\` 
      \`resultCardRatingCountKey: string\`
      \`resultCardRatingScoreKey: string\` 
     \n And \`renderResultCardPriceDetails: (result) => JSX.Element\` a render result card price details callback function
    `,
  },
  resultsPageOptions: {
    description: 'Results page configuration options `numResultsToDisplay: number`',
  },
  sessionStateOptions: {
    description: `Session Storage state configuration options
    \`showSessionModal?: boolean;\` (Whether to show modal to hydrate quiz on quiz results page)
    \`showSessionModalOnResults?: boolean;\`(Whether to show modal to hydrate quiz)
    \`sessionStateKey?: string;\`(key name where session storage state is saved)
    `,
  },
  enableHydration: {
    description: 'Boolean for whether or not to hydrate quiz questions and results on page reload',
  },
};
