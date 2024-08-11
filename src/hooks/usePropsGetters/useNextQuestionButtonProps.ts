import { useCallback } from 'react';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../components/CioQuiz/quizLocalReducer';
import { GetNextQuestionButtonProps, QuizEventsReturn } from '../../types';

export default function useNextQuestionButtonProps(
  nextQuestion: QuizEventsReturn.NextQuestion,
  quizApiState: QuizAPIReducerState,
  quizLocalState: QuizLocalReducerState
): GetNextQuestionButtonProps {
  const getNextQuestionButtonProps: GetNextQuestionButtonProps = useCallback(() => {
    const currentQuestionId = quizApiState.quizCurrentQuestion?.next_question?.id;
    let buttonDisabled;
    if (currentQuestionId && !quizApiState.quizCurrentQuestion?.isCoverQuestion) {
      buttonDisabled =
        !quizLocalState.answerInputs[currentQuestionId]?.value ||
        !quizLocalState.answerInputs[currentQuestionId]?.value?.length;
    }

    return {
      className: buttonDisabled ? 'cio-question-cta-button disabled' : 'cio-question-cta-button',
      tabIndex: buttonDisabled ? -1 : 0,
      'aria-disabled': buttonDisabled ? 'true' : 'false',
      'aria-describedby': buttonDisabled ? 'next-button-help' : '',
      type: 'button',
      onClick: () => {
        nextQuestion();
      },
    };
  }, [quizApiState.quizCurrentQuestion, quizLocalState.answerInputs, nextQuestion]);

  return getNextQuestionButtonProps;
}
