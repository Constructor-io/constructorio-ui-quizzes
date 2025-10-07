import { useCallback } from 'react';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { GetJumpToQuestionButtonProps, QuizEventsReturn } from '../../types';
import { QuizLocalReducerState } from '../../components/CioQuiz/quizLocalReducer';

export default function useJumpToQuestionButtonProps(
  jumpToQuestion: QuizEventsReturn.JumpToQuestion,
  quizApiState: QuizAPIReducerState,
  quizLocalState: QuizLocalReducerState
): GetJumpToQuestionButtonProps {
  const getJumpToQuestionButtonProps: GetJumpToQuestionButtonProps = useCallback(
    (id: number) => {
      let buttonDisabled;

      const currentQuestionId = quizApiState.quizCurrentQuestion?.next_question?.id;

      const answerIds = Object.keys(quizLocalState.prevAnswerInputs);
      const isInvalidQuestionId = answerIds && !answerIds.includes(String(id));
      const isCurrentOrFutureQuestionId = currentQuestionId && id >= currentQuestionId;

      if (isInvalidQuestionId || isCurrentOrFutureQuestionId) {
        buttonDisabled = true;
      }

      return {
        className: buttonDisabled ? 'cio-question-cta-button disabled' : 'cio-question-cta-button',
        tabIndex: buttonDisabled ? -1 : 0,
        'aria-disabled': buttonDisabled ? 'true' : 'false',
        'aria-describedby': buttonDisabled ? 'jump-to-button-help' : '',
        disabled: !!buttonDisabled,
        type: 'button',
        onClick: () => {
          jumpToQuestion(id);
        },
      };
    },
    [
      quizLocalState.prevAnswerInputs,
      quizApiState.quizCurrentQuestion?.next_question?.id,
      jumpToQuestion,
    ]
  );

  return getJumpToQuestionButtonProps;
}
