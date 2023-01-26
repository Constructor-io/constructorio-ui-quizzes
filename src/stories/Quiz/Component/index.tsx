/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import CioQuiz, { IQuizProps } from '../../../components/CioQuiz';
import { getStoryParams } from '../../../utils';

export function ComponentTemplate(args: IQuizProps) {
  return <CioQuiz {...args} />;
}

const componentTemplateCode = `
function YourComponent() {
  return (
    <div>
      <CioQuiz {...args} />
    </div>
  );
}
`;
const importComponent = `import CioQuiz from 'cio-quiz';`;

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
