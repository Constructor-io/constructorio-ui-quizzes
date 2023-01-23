// Autocomplete key index
// TODO: We need to change this later
export const apiKey = 'key_jaqzPcUDnK66puIO';
export const quizId = 'coffee-quiz';

/// //////////////////////////////
// Storybook Folder Descriptions
/// //////////////////////////////

export const componentDescription = `- import \`CioQuiz\` to render in your JSX.
- This component handles state management, data fetching, and rendering logic.
- To use this component, an \`apiKey\` or \`cioJsClient\` are required, all other values are optional.
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

// from .storybook/custom-styles-story.css
// TODO: Fill this out after we figure out how we want to go about styles
export const customStylesDescription = ``;
