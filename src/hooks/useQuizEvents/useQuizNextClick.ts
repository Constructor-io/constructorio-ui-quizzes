import { useCallback } from 'react';
import { ActionAnswerQuestion, QuestionTypes } from '../../components/CioQuiz/actions';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../components/CioQuiz/quizLocalReducer';
import { QuizEventsReturn, QuizResultsEventsProps } from '../../types';
import { isFunction } from '../../utils';

const useQuizNextClick = (
  quizApiState: QuizAPIReducerState,
  quizLocalState: QuizLocalReducerState,
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>,
  onQuizNextQuestion?: QuizResultsEventsProps.OnQuizNextQuestion
): QuizEventsReturn.NextQuestion => {
  const quizNexClickHandler = useCallback(() => {
    const currentQuestion = quizApiState.quizCurrentQuestion?.next_question;
    const currentQuestionId = currentQuestion?.id;

    if (dispatchLocalState && currentQuestionId) {
      const currentAnswerInput = quizLocalState.answerInputs[currentQuestionId];

      if (currentAnswerInput?.value?.length || currentQuestion?.type === 'cover') {
        dispatchLocalState({
          type: QuestionTypes.Next,
          payload: quizApiState.quizCurrentQuestion
        });
      }

      if (currentQuestion && isFunction(onQuizNextQuestion)) {
        onQuizNextQuestion!({ ...currentQuestion, answer: currentAnswerInput });
      }
    }
  }, [
    dispatchLocalState,
    quizApiState.quizCurrentQuestion,
    quizLocalState.answerInputs,
    onQuizNextQuestion
  ]);

  return quizNexClickHandler;
};

export default useQuizNextClick;
