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
): QuizEventsReturn.ResultClick => {
  const quizResultClickHandler = useCallback(
    (result: QuizResultDataPartial, position: number) => {
      if (quizApiState.quizResults) {
        // Tracking call
        trackQuizResultClick(cioClient, quizApiState.quizResults, result, position);

        // User custom callback function
        if (isFunction(onQuizResultClick)) {
          onQuizResultClick!(result, position);
        }
      }
    },
    [quizApiState, cioClient, onQuizResultClick]
  );

  return quizResultClickHandler;
};

export default useQuizResultClick;
