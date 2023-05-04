import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { useCallback } from 'react';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { trackQuizResultClick } from '../../services';
import { QuizEventsReturn, QuizResultDataPartial, QuizResultsEventsProps } from '../../types';
import { isFunction } from '../../utils';

const useQuizResultClick = (
  cioClient: ConstructorIOClient,
  quizApiState: QuizAPIReducerState,
  onQuizResultClick?: QuizResultsEventsProps.OnQuizResultClick
): QuizEventsReturn.GetResultClick => {
  const resultClickHandler = useCallback(
    (result: QuizResultDataPartial, position: number) => {
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
