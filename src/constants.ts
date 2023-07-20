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
- \`sessionStateOptions\` lets you configure the session modal behavior
  - \`showSessionModal\` is a boolean used to decide whether to show the session modal. The default behavior is to show the session modal
  - \`showSessionModalOnResults\` is a boolean to decide whether to show the session modal after reaching the results page. The default behavior is to not show the session modal
  - \`sessionStateKey\` is a custom string that will be used as a session storage key
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
export const changePrimaryColorDescription = `
If you would like to use a different primary color, pass a \`primaryColor\` string in RGB format ('R, G, B').

Accent colors for borders and different states (hover, focus, active) will be calculated automatically based on the primary color you provided.

By default, the primary color has a value of "35, 71, 199" (Constructor Blue).

In the example below, the \`primaryColor\` prop has been used to override this color to "255, 82, 48" (Orange).

> Advanced Option: Instead of passing a primaryColor prop, you can also override \`--primary-color-h\`, \`--primary-color-s\`, and \`--primary-color-l\` CSS variables within a \`.cio-quiz\` container element. If explicitly given a value in your CSS, then the values of these variables will be used as the HSL values for your quiz.
`;

export enum RequestStates {
  Stale,
  Loading,
  Success,
  Error,
}
