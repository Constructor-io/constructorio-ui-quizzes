import { useCallback } from 'react';
import { ActionAnswerQuestion, QuestionTypes } from '../../components/CioQuiz/actions';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { QuizEventsReturn } from '../../types';

const useQuizNextClick = (
  quizApiState: QuizAPIReducerState,
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>
): QuizEventsReturn.GetNextQuestion => {
  const quizNextHandler = useCallback(
    (payload?: string | string[]) => {
      switch (quizApiState.quizCurrentQuestion?.next_question.type) {
        case QuestionTypes.Cover:
          dispatchLocalState({
            type: QuestionTypes.Cover,
            payload: {
              isLastQuestion: quizApiState?.quizCurrentQuestion?.is_last_question,
            },
          });
          break;
        case QuestionTypes.OpenText:
          dispatchLocalState({
            type: QuestionTypes.OpenText,
            payload: {
              questionId: quizApiState?.quizCurrentQuestion.next_question.id,
              input: payload as string,
              isLastQuestion: quizApiState?.quizCurrentQuestion.is_last_question,
            },
          });
          break;
        case QuestionTypes.SingleSelect:
        case QuestionTypes.MultipleSelect:
          dispatchLocalState({
            type:
              quizApiState?.quizCurrentQuestion.next_question.type === QuestionTypes.SingleSelect
                ? QuestionTypes.SingleSelect
                : QuestionTypes.MultipleSelect,
            payload: {
              questionId: quizApiState?.quizCurrentQuestion.next_question.id,
              input: payload as string[],
              isLastQuestion: quizApiState?.quizCurrentQuestion.is_last_question,
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
