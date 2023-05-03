import { useCallback } from 'react';
import { ActionAnswerQuestion, QuestionTypes } from '../../components/CioQuiz/actions';

const useQuizBackClick = (dispatchLocalState: React.Dispatch<ActionAnswerQuestion>) => {
  const quizBackHandler = useCallback(() => {
    if (dispatchLocalState) {
      dispatchLocalState({ type: QuestionTypes.Back });
    }
  }, [dispatchLocalState]);

  return quizBackHandler;
};

export default useQuizBackClick;
