import { useCallback } from 'react';
import { ActionAnswerQuestion, QuestionTypes } from '../../components/CioQuiz/actions';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { QuizEventsReturn } from '../../types';

const useQuizNextClick = (
  quizApiState: QuizAPIReducerState,
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>
): QuizEventsReturn.NextQuestion => {
  const quizNextHandler = useCallback(
    (payload?: string | string[]) => {
      const questionType = quizApiState.quizCurrentQuestion?.next_question.type;
      const currentQuestion = quizApiState.quizCurrentQuestion;
      switch (questionType) {
        case QuestionTypes.Cover:
          dispatchLocalState({
            type: QuestionTypes.Cover,
            payload: {
              isLastQuestion: currentQuestion!.is_last_question,
            },
          });
          break;
        case QuestionTypes.OpenText:
          dispatchLocalState({
            type: QuestionTypes.OpenText,
            payload: {
              questionId: currentQuestion!.next_question.id,
              input: payload as string,
              isLastQuestion: currentQuestion!.is_last_question,
            },
          });
          break;
        case QuestionTypes.SingleSelect:
        case QuestionTypes.MultipleSelect:
          dispatchLocalState({
            type:
              currentQuestion!.next_question.type === QuestionTypes.SingleSelect
                ? QuestionTypes.SingleSelect
                : QuestionTypes.MultipleSelect,
            payload: {
              questionId: currentQuestion!.next_question.id,
              input: payload as string[],
              isLastQuestion: currentQuestion!.is_last_question,
            },
          });
          break;

        default:
          break;
      }
    },
    [quizApiState, dispatchLocalState]
  );

  return quizNextHandler;
};

export default useQuizNextClick;
