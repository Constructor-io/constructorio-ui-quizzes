// Autocomplete key index
export const apiKey = 'key_wJSdZSiesX5hiVLt';
export const quizId = 'coffee-quiz';

// Session Storage default key
export const quizSessionStateKey = 'constructorIOQuizState';

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

export enum RequestStates {
  Stale = 'STALE',
  Loading = 'LOADING',
  Success = 'SUCCESS',
  Error = 'ERROR',
}
