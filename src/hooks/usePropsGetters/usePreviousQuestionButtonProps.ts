import { useCallback } from 'react';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { GetPreviousQuestionButtonProps, QuizEventsReturn } from '../../types';

export default function usePreviousQuestionButtonProps(
  quizApiState: QuizAPIReducerState,
  previousQuestion: QuizEventsReturn.PreviousQuestion
): GetPreviousQuestionButtonProps {
  const getPreviousQuestionButtonProps: GetPreviousQuestionButtonProps = useCallback(() => {
    const buttonDisabled = quizApiState.quizCurrentQuestion?.isFirstQuestion;
    return {
      title: 'Quiz Back Button',
      role: 'button',
      className: `cio-question-back-button ${buttonDisabled ? 'disabled' : ''}`,
      type: 'button',
      onClick: () => previousQuestion(),
    };
  }, [quizApiState, previousQuestion]);

  return getPreviousQuestionButtonProps;
}
