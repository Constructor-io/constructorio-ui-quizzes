import { useCallback } from 'react';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { GetSkipQuestionButtonProps, QuizEventsReturn } from '../../types';

export default function useSkipQuestionButtonProps(
  skipQuestion: QuizEventsReturn.SkipQuestion,
  quizApiState: QuizAPIReducerState
): GetSkipQuestionButtonProps {
  const getSkipQuestionButtonProps: GetSkipQuestionButtonProps = useCallback(() => {
    const currentQuestionId = quizApiState.quizCurrentQuestion?.next_question?.id;

    const isHidden =
      currentQuestionId &&
      (quizApiState.quizCurrentQuestion?.isCoverQuestion ||
        !quizApiState.quizCurrentQuestion?.next_question.is_skippable);

    return {
      className: isHidden ? 'cio-question-skip-button hide' : 'cio-question-skip-button',
      type: 'button',
      onClick: () => {
        skipQuestion();
      }
    };
  }, [quizApiState.quizCurrentQuestion, skipQuestion]);

  return getSkipQuestionButtonProps;
}
