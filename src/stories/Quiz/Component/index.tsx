/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import CioQuiz from '../../../components/CioQuiz';
import { IQuizProps } from '../../../types';
import { getStoryParams } from '../../../utils';

export function ComponentTemplate(args: IQuizProps) {
  const [favorites, setFavorites] = useState<string[]>([]);

  return (
    <CioQuiz
      {...args}
      resultsPageOptions={{
        favoriteItems: favorites,
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
  );
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

const importComponent = `import CioQuiz from '@constructor-io/constructorio-ui-quizzes';`;

export const getComponentStoryParams = (storyParams) =>
  getStoryParams(storyParams, componentTemplateCode, importComponent);

export const addComponentStoryDescription = (story, code, description = '') => {
  story.parameters = getComponentStoryParams(code); // eslint-disable-line
  // eslint-disable-next-line no-param-reassign
  story.parameters.docs.description = {
    // eslint-disable-line
    story: `
${description}

\`\`\`jsx
${code}
\`\`\``,
  };
};
