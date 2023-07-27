import { useCallback } from 'react';
import { ActionAnswerQuestion, QuestionTypes } from '../../components/CioQuiz/actions';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { QuizEventsReturn } from '../../types';

const useQuizBackClick = (
  quizApiState: QuizAPIReducerState,
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>
): QuizEventsReturn.PreviousQuestion => {
  const quizBackClickHandler = useCallback(() => {
    if (dispatchLocalState) {
      dispatchLocalState({ type: QuestionTypes.Back, payload: quizApiState.quizCurrentQuestion });
    }
  }, [dispatchLocalState, quizApiState.quizCurrentQuestion]);

  return quizBackClickHandler;
};

export default useQuizBackClick;
