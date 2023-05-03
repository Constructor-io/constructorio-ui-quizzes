import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { QuizResultData } from '@constructor-io/constructorio-client-javascript/lib/types';
import { useCallback } from 'react';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { QuizResultsEventsProps } from '../../components/Results/Results';
import { trackQuizConversion } from '../../services';
import { isFunction } from '../../utils';

const useQuizAddToCart = (
  cioClient: ConstructorIOClient,
  quizApiState: QuizAPIReducerState,
  onAddToCartClick?: QuizResultsEventsProps.OnAddToCartClick
) => {
  const addToCartClickHandler = useCallback(
    (e: React.MouseEvent<HTMLElement>, result: QuizResultData, price: number) => {
      e.preventDefault();

      if (quizApiState.quizResults) {
        // Tracking call
        trackQuizConversion(cioClient, quizApiState.quizResults, result, price);

        // User custom callback function
        if (onAddToCartClick && isFunction(onAddToCartClick)) {
          onAddToCartClick(result);
        }
      }
    },
    [quizApiState, cioClient, onAddToCartClick]
  );

  return addToCartClickHandler;
};

export default useQuizAddToCart;
