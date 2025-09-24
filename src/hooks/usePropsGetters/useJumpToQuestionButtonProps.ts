import { useCallback } from 'react';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { GetJumpToQuestionButtonProps, QuizEventsReturn } from '../../types';

export default function useNextQuestionButtonProps(
  jumpToQuestion: QuizEventsReturn.JumpToQuestion,
  quizApiState: QuizAPIReducerState
): GetJumpToQuestionButtonProps {
  const getJumpToQuestionButtonProps: GetJumpToQuestionButtonProps = useCallback(
    (id: number) => {
      const currentQuestionId = quizApiState.quizCurrentQuestion?.next_question?.id;
      let buttonDisabled;
      if (!currentQuestionId || (currentQuestionId && id >= currentQuestionId)) {
        buttonDisabled = true;
      }

      return {
        className: buttonDisabled ? 'cio-question-cta-button disabled' : 'cio-question-cta-button',
        tabIndex: buttonDisabled ? -1 : 0,
        'aria-disabled': buttonDisabled ? 'true' : 'false',
        'aria-describedby': buttonDisabled ? 'next-button-help' : '',
        type: 'button',
        onClick: () => {
          jumpToQuestion(id);
        },
      };
    },
    [quizApiState.quizCurrentQuestion, jumpToQuestion]
  );

  return getJumpToQuestionButtonProps;
}
