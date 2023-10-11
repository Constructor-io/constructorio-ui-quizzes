// Autocomplete key index
export const apiKey = 'key_wJSdZSiesX5hiVLt';
export const quizId = 'coffee-quiz';

// Session Storage default key
export const quizSessionStateKey = 'constructorIOQuizState';

/// //////////////////////////////
// Storybook Folder Descriptions
/// //////////////////////////////

export const hookDescription = `- Import \`useCioQuiz\` and call this custom hook in a functional component.
- This hook leaves rendering logic up to you, while handling:
  - state management
  - data fetching
  - keyboard navigation
  - mouse interactions
  - focus and submit event handling
- Since the markup is controlled by you, the default styles might not be applied if you have a different DOM structure
- To use this hook, an \`apiKey\` and \`quizId\` are required, and \`resultsPageOptions\` must be passed to the \`useCioQuiz\` hook to configure behavior. All other values are optional.
- Use the <a href="https://kentcdodds.com/blog/how-to-give-rendering-control-to-users-with-prop-getters" target="__blank">prop getters</a> and other variables returned by this hook (below) to leverage the functionality described above with jsx elements in your react component definitions

Calling the \`useCioQuiz\` hook returns an object with the following keys:

\`\`\`jsx
const {
  // must be used for a hooks integrations
  state: QuizReturnState, // Quiz state
  events: [{...}], // array of quiz events
  getAddToCartButtonProps: () => ({...})), // prop getter for jsx add to cart button for quiz result,
  getAddToFavoritesButtonProps: () => ({...})), // prop getter for jsx add to favorites button for quiz result,
  getCoverQuestionProps: () => ({...})), // prop getter for jsx quiz cover question,
  getHydrateQuizButtonProps: () => ({...})), // prop getter for jsx hydrate quiz button,
  getNextQuestionButtonProps: () => ({...})), // prop getter for jsx next button to traverse the quiz,
  getSkipQuestionButtonProps: () => ({...})), // prop getter for jsx skip button to traverse the quiz,
  getPreviousQuestionButtonProps: () => ({...})), // prop getter for jsx back button to traverse the quiz, 
  getOpenTextInputProps: () => ({...})), // prop getter for jsx open text input,
  getSelectInputProps: () => ({...})), // prop getter for jsx select input for select type questions,
  getQuizImageProps: () => ({...})), // prop getter for jsx quiz image,
  getQuizResultButtonProps: () => ({...})), // prop getter for jsx result card click as a button,
  getQuizResultLinkProps: () => ({...})), // prop getter for jsx result card click as a link. Should be spread into <a> tags,
  getResetQuizButtonProps: () => ({...})), // prop getter for jsx reset quiz button,
  cioClient, // instance of constructorio-client-javascript
 } = useCioQuiz(args);
\`\`\`

> Note: when we say \`cioClient\`, we are referring to an instance of the [constructorio-client-javascript](https://www.npmjs.com/package/@constructor-io/constructorio-client-javascript)
`;

/// //////////////////////////////
// Storybook Stories
/// //////////////////////////////

export const basicDescription = `Pass an \`apiKey\` and a \`quizId\` to request questions and quiz results from Constructor's servers`;
export const cioJsClientDescription = `If you are already using an instance of the \`ConstructorIOClient\`, you can pass a \`cioJsClient\` instead of an \`apiKey\` to request results from Constructor's servers

> Note: \`cioJsClient\` refers to an instance of the [constructorio-client-javascript](https://www.npmjs.com/package/@constructor-io/constructorio-client-javascript)`;
export const smallContainerDescription = `If you are using the provided styles, CioQuiz component will respect the height and width of its parent container and use responsive styles based on the parent container's dimensions`;
export const changePrimaryColorDescription = `
If you would like to use a different primary color, pass a \`primaryColor\` string in RGB format ('R, G, B').

Accent colors for borders and different states (hover, focus, active) will be calculated automatically based on the primary color you provided.

By default, the primary color has a value of "35, 71, 199" (Constructor Blue).

In the example below, the \`primaryColor\` prop has been used to override this color to "255, 82, 48" (Orange).

> Advanced Option: Instead of passing a primaryColor prop, you can also override \`--primary-color-h\`, \`--primary-color-s\`, and \`--primary-color-l\` CSS variables within a \`.cio-quiz\` container element. If explicitly given a value in your CSS, then the values of these variables will be used as the HSL values for your quiz.
`;
export const callbacksDescription = `Pass an \`apiKey\`, a \`quizId\`, and \`callbacks\``;

export const favoritesDescription = `
Add \`const [favorites, setFavorites] = useState([]);\` or equivalent to manage the favorite items' state.

Pass favorites as an array to \`favoriteItems\` in \`resultsPageOptions\` as a prop to CioQuiz.

Pass a callback function to \`onAddToFavoritesClick\` in \`resultsPageOptions\` as a prop to CioQuiz to handle favorites state changes to update \`favorites\` array.    
`;

export enum RequestStates {
  Stale = 'STALE',
  Loading = 'LOADING',
  Success = 'SUCCESS',
  Error = 'ERROR',
}
