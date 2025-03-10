import { useCallback } from 'react';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../components/CioQuiz/quizLocalReducer';
import { GetNextQuestionButtonProps, QuizEventsReturn, OpenQuestionCallback } from '../../types';

export default function useNextQuestionButtonProps(
  nextQuestion: QuizEventsReturn.NextQuestion,
  quizApiState: QuizAPIReducerState,
  quizLocalState: QuizLocalReducerState,
  onOpenQuestionAnswered?: OpenQuestionCallback
): GetNextQuestionButtonProps {
  const getNextQuestionButtonProps: GetNextQuestionButtonProps = useCallback(() => {
    const currentQuestion = quizApiState.quizCurrentQuestion?.next_question;
    const currentQuestionId = currentQuestion?.id;
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
        if (currentQuestion?.type === 'open' && onOpenQuestionAnswered && currentQuestionId) {
          const value = quizLocalState.answerInputs[currentQuestionId]?.value;

          if (value && typeof value === 'string') {
            onOpenQuestionAnswered(value, currentQuestion);
          }
        }
        nextQuestion();
      },
    };
  }, [
    quizApiState.quizCurrentQuestion,
    quizLocalState.answerInputs,
    nextQuestion,
    onOpenQuestionAnswered,
  ]);

  return getNextQuestionButtonProps;
}
