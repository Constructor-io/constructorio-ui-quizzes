import { useCallback } from 'react';
import { ActionAnswerQuestion, QuestionTypes } from '../../components/CioQuiz/actions';
import { QuizEventsReturn } from '../../types';

const useQuizBackClick = (
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>
): QuizEventsReturn.PreviousQuestion => {
  const quizBackHandler = useCallback(() => {
    if (dispatchLocalState) {
      dispatchLocalState({ type: QuestionTypes.Back });
    }
  }, [dispatchLocalState]);

  return quizBackHandler;
};

export default useQuizBackClick;
