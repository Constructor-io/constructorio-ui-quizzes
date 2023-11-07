import React, { useState } from 'react';
import CioQuiz from '../../../components/CioQuiz';
import { IQuizProps } from '../../../types';

function ComponentTemplate(args: IQuizProps) {
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
      }}
    />
  );
}

export default ComponentTemplate;
