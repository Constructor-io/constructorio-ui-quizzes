import { useCallback } from 'react';
import { ActionAnswerQuestion, QuestionTypes } from '../../components/CioQuiz/actions';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../components/CioQuiz/quizLocalReducer';
import { QuizEventsReturn, QuizResultsEventsProps } from '../../types';
import { isFunction } from '../../utils';

const useQuizSkipClick = (
  quizApiState: QuizAPIReducerState,
  quizLocalState: QuizLocalReducerState,
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>,
  onQuizSkipQuestion?: QuizResultsEventsProps.OnQuizSkipQuestion
): QuizEventsReturn.NextQuestion => {
  const quizSkipClickHandler = useCallback(() => {
    const currentQuestion = quizApiState.quizCurrentQuestion?.next_question;
    const currentQuestionId = currentQuestion?.id;

    if (dispatchLocalState && currentQuestionId) {
      if (!(currentQuestion?.type === 'cover')) {
        dispatchLocalState({
          type: QuestionTypes.Skip,
          payload: quizApiState.quizCurrentQuestion
        });
      }

      const currentAnswerInput = {
        ...quizLocalState.answerInputs[currentQuestionId],
        value: currentQuestion?.type === 'open' ? 'false' : null
      };

      if (currentQuestion && isFunction(onQuizSkipQuestion)) {
        onQuizSkipQuestion!({ ...currentQuestion, answer: currentAnswerInput });
      }
    }
  }, [
    dispatchLocalState,
    onQuizSkipQuestion,
    quizApiState.quizCurrentQuestion,
    quizLocalState.answerInputs
  ]);

  return quizSkipClickHandler;
};

export default useQuizSkipClick;
