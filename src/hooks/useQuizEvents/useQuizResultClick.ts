import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { QuizResultData } from '@constructor-io/constructorio-client-javascript/lib/types';
import { useCallback } from 'react';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { QuizResultsEventsProps } from '../../components/Results/Results';
import { trackQuizResultClick } from '../../services';
import { isFunction } from '../../utils';

const useQuizResultClick = (
  cioClient: ConstructorIOClient,
  quizApiState: QuizAPIReducerState,
  onQuizResultClick?: QuizResultsEventsProps.OnQuizResultClick
) => {
  const resultClickHandler = useCallback(
    (result: QuizResultData, position: number) => {
      if (quizApiState.quizResults) {
        // Tracking call
        trackQuizResultClick(cioClient, quizApiState.quizResults, result, position);

        // User custom callback function
        if (onQuizResultClick && isFunction(onQuizResultClick)) {
          onQuizResultClick(result, position);
        }
      }
    },
    [quizApiState, cioClient, onQuizResultClick]
  );

  return resultClickHandler;
};

export default useQuizResultClick;
