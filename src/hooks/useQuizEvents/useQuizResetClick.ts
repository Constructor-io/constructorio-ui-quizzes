import { useCallback } from 'react';
import {
  ActionAnswerQuestion,
  ActionQuizAPI,
  QuestionTypes,
  QuizAPIActionTypes,
} from '../../components/CioQuiz/actions';
import { QuizEventsReturn, QuizResultsResponse } from '../../types';
import { resetQuizSessionStorageState } from '../../utils';

const useQuizResetClick = (
  quizStateKey: string,
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>,
  dispatchApiState: React.Dispatch<ActionQuizAPI>,
  quizResults?: QuizResultsResponse
): QuizEventsReturn.NextQuestion => {
  const quizResetClickHandler = useCallback(() => {
    if (quizResults) {
      dispatchLocalState({
        type: QuestionTypes.Reset,
      });
      dispatchApiState({
        type: QuizAPIActionTypes.RESET_QUIZ,
      });
      resetQuizSessionStorageState(quizStateKey);
    }
  }, [dispatchLocalState, dispatchApiState, quizStateKey, quizResults]);

  return quizResetClickHandler;
};

export default useQuizResetClick;
