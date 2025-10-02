import { useCallback } from 'react';
import {
  ActionAnswerQuestion,
  ActionQuizAPI,
  QuestionTypes,
  QuizAPIActionTypes,
} from '../../components/CioQuiz/actions';
import { QuizEventsReturn } from '../../types';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';

type IUseJumpToQuestionProps = {
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>;
  dispatchApiState: React.Dispatch<ActionQuizAPI>;
  quizApiState: QuizAPIReducerState;
};

const useJumpToQuestion = (props: IUseJumpToQuestionProps): QuizEventsReturn.JumpToQuestion => {
  const { dispatchLocalState, dispatchApiState, quizApiState } = props;
  const quizJumpToQuestionClickHandler = useCallback(
    (questionId: number) => {
      const currentQuestionId = quizApiState.quizCurrentQuestion?.id;

      if (questionId >= currentQuestionId) {
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
    [quizApiState.quizCurrentQuestion?.id, dispatchLocalState, dispatchApiState]
  );

  return quizJumpToQuestionClickHandler;
};

export default useJumpToQuestion;
