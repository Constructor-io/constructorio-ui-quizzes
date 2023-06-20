// Autocomplete key index
export const apiKey = 'key_wJSdZSiesX5hiVLt';
export const quizId = 'coffee-quiz';

// Session Storage default key
export const quizSessionStateKey = 'constructorIOQuizState';

/// //////////////////////////////
// Storybook Folder Descriptions
/// //////////////////////////////

export const componentDescription = `- import \`CioQuiz\` to render in your JSX.
- This component handles state management, data fetching, and rendering logic.
- To use this component, \`quizId\`, \`resultsPageOptions\`, and one of \`apiKey\` or \`cioJsClient\` are required.
- \`resultsPageOptions\` lets you configure the results page
  - \`onAddToCartClick\` is a callback function that will be called when the "Add to cart" button is clicked
  - \`onQuizResultClick\` is an optional callback function that will be called when the result card is clicked. The default behavior is redirecting the user to the item's URL
  - \`onQuizResultsLoaded\` is an optional callback function that will be called when the quiz results are loaded
  - \`resultCardRegularPriceKey\` is a parameter that specifies the metadata field name for the regular price
  - \`resultCardSalePriceKey\` is an optional parameter that specifies the metadata field name for the sale price
- Use different props to configure the behavior of this component.
- The following stories show how different props affect the component's behavior

> Note: \`cioJsClient\` refers to an instance of the [constructorio-client-javascript](https://www.npmjs.com/package/@constructor-io/constructorio-client-javascript)
`;

/// //////////////////////////////
// Storybook Stories
/// //////////////////////////////

export const basicDescription = `Pass an \`apiKey\` and a \`quizId\` to request questions and quiz results from Constructor's servers`;
export const cioJsClientDescription = `If you are already using an instance of the \`ConstructorIOClient\`, you can pass a \`cioJsClient\` instead of an \`apiKey\` to request results from Constructor's servers

> Note: \`cioJsClient\` refers to an instance of the [constructorio-client-javascript](https://www.npmjs.com/package/@constructor-io/constructorio-client-javascript)`;
export const smallContainerDescription = `If you are using the provided styles, CioQuiz component will respect the height and width of its parent container and use responsive styles based on the parent container's dimensions`;

export enum RequestStates {
  Stale = 'STALE',
  Loading = 'LOADING',
  Success = 'SUCCESS',
  Error = 'ERROR',
}
