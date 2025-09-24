import { useCallback } from 'react';
import {
  ActionAnswerQuestion,
  ActionQuizAPI,
  QuestionTypes,
  QuizAPIActionTypes,
} from '../../components/CioQuiz/actions';
import { QuizEventsReturn } from '../../types';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../components/CioQuiz/quizLocalReducer';

type IUseJumpToQuestionProps = {
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>;
  dispatchApiState: React.Dispatch<ActionQuizAPI>;
  quizApiState: QuizAPIReducerState;
  quizLocalState: QuizLocalReducerState;
};

const useJumpToQuestion = (props: IUseJumpToQuestionProps): QuizEventsReturn.JumpToQuestion => {
  const { dispatchLocalState, dispatchApiState, quizApiState, quizLocalState } = props;
  const quizResetClickHandler = useCallback(
    (questionId: number) => {
      const isComplete = quizLocalState.isQuizCompleted;
      const currentQuestionId = quizApiState.quizCurrentQuestion?.id;

      if (isComplete || questionId >= currentQuestionId) {
        return;
      }
      dispatchLocalState({
        type: QuestionTypes.JumpToQuestion,
        payload: { questionId },
      });
      dispatchApiState({
        type: QuizAPIActionTypes.JUMP_TO_QUESTION,
        payload: { questionId },
      });
    },
    [
      quizLocalState.isQuizCompleted,
      quizApiState.quizCurrentQuestion?.id,
      dispatchLocalState,
      dispatchApiState,
    ]
  );

  return quizResetClickHandler;
};

export default useJumpToQuestion;
