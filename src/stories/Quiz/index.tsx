/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Quiz, { IQuizProps } from '../../components/Quiz';
import { getStoryParams } from '../../utils';

export function ComponentTemplate(args: IQuizProps) {
  return <Quiz {...args} />;
}

const componentTemplateCode = `
function YourComponent() {
  return (
    <div>
      <Quiz {...args} />
    </div>
  );
}
`;
const importComponent = `import Quiz from 'cio-quiz';`;

export const getComponentStoryParams = (storyParams) =>
  getStoryParams(storyParams, componentTemplateCode, importComponent);

export const addComponentStoryDescription = (story, code, description = '') => {
  story.parameters = getComponentStoryParams(code); // eslint-disable-line
  story.parameters.docs.description = { // eslint-disable-line
    story: `
${description}

\`\`\`jsx
${code}
\`\`\``
  };
};
