import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { useCallback } from 'react';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { trackQuizConversion } from '../../services';
import { QuizEventsReturn, QuizResultDataPartial, QuizResultsEventsProps } from '../../types';
import { isFunction } from '../../utils';

const useQuizAddToFavorites = (
  cioClient: ConstructorIOClient,
  quizApiState: QuizAPIReducerState,
  onAddToCartClick?: QuizResultsEventsProps.OnAddToFavoritesClick
): QuizEventsReturn.AddToFavorites => {
  const quizAddToCartClickHandler = useCallback(
    (e: React.MouseEvent<HTMLElement>, result: QuizResultDataPartial, price?: number) => {
      e.preventDefault();

      if (quizApiState.quizResults) {
        // Tracking call
        trackQuizConversion(cioClient, quizApiState.quizResults, result, price);

        // User custom callback function
        if (isFunction(onAddToCartClick)) {
          onAddToCartClick!(result);
        }
      }
    },
    [quizApiState, cioClient, onAddToCartClick]
  );

  return quizAddToCartClickHandler;
};

export default useQuizAddToFavorites;
