import { useCallback } from 'react';
import { ActionAnswerQuestion, QuestionTypes } from '../../components/CioQuiz/actions';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { QuestionOption, QuizEventsReturn } from '../../types';

const useQuizAnswerChangeHandler = (
  quizApiState: QuizAPIReducerState,
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>
): QuizEventsReturn.QuizAnswerChanged => {
  const quizAnswerChangedHandler: QuizEventsReturn.QuizAnswerChanged = useCallback(
    (payload) => {
      const questionType = quizApiState.quizCurrentQuestion?.next_question?.type;
      const currentQuestion = quizApiState.quizCurrentQuestion;
      if (currentQuestion?.next_question) {
        switch (questionType) {
          case QuestionTypes.Cover:
            dispatchLocalState({
              type: QuestionTypes.Cover,
              payload: {
                questionId: currentQuestion.next_question.id,
                input: '',
              },
            });
            break;
          case QuestionTypes.OpenText:
            dispatchLocalState({
              type: QuestionTypes.OpenText,
              payload: {
                questionId: currentQuestion!.next_question.id,
                input: payload as string,
              },
            });
            break;
          case QuestionTypes.SingleSelect:
          case QuestionTypes.MultipleSelect:
          case QuestionTypes.SingleFilterValue:
          case QuestionTypes.MultipleFilterValues:
            dispatchLocalState({
              type: currentQuestion!.next_question.type as
                | QuestionTypes.SingleSelect
                | QuestionTypes.MultipleSelect
                | QuestionTypes.SingleFilterValue
                | QuestionTypes.MultipleFilterValues,
              payload: {
                questionId: currentQuestion.next_question.id,
                input: payload as Omit<QuestionOption, 'attribute' | 'images'>[],
              },
            });
            break;
          default:
            break;
        }
      }
    },
    [quizApiState, dispatchLocalState]
  );

  return quizAnswerChangedHandler;
};

export default useQuizAnswerChangeHandler;
