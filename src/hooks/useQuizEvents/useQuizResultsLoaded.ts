import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { useEffect } from 'react';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { trackQuizResultsLoaded } from '../../services';
import { QuizResultsEventsProps } from '../../types';
import { isFunction } from '../../utils';

const useQuizResultsLoaded = (
  cioClient: ConstructorIOClient,
  quizApiState: QuizAPIReducerState,
  onQuizResultsLoaded?: QuizResultsEventsProps.OnQuizResultsLoaded
) => {
  // Quiz results loaded
  useEffect(() => {
    if (quizApiState.quizResults) {
      // Tracking call
      trackQuizResultsLoaded(cioClient, quizApiState.quizResults);

      // User custom callback function
      if (
        onQuizResultsLoaded &&
        isFunction(onQuizResultsLoaded) &&
        quizApiState.quizResults.response?.results
      ) {
        onQuizResultsLoaded(quizApiState.quizResults.response.results);
      }
    }
  }, [quizApiState, cioClient, onQuizResultsLoaded]);
};

export default useQuizResultsLoaded;
