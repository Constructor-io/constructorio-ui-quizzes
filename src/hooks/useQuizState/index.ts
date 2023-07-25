import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { ActionAnswerQuestion, ActionQuizAPI } from '../../components/CioQuiz/actions';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../components/CioQuiz/quizLocalReducer';
import { IQuizProps, QuizEventsReturn } from '../../types';
import useQuizApiState from './useQuizApiState';
import useQuizLocalState from './useQuizLocalState';

type UseQuizState = (
  quizOptions: IQuizProps,
  cioClient: ConstructorIOClient
) => {
  quizApiState: QuizAPIReducerState;
  quizLocalState: QuizLocalReducerState;
  dispatchApiState: React.Dispatch<ActionQuizAPI>;
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>;
  hasQuizStoredState: () => boolean;
  isQuizCompleted: QuizEventsReturn.IsQuizCompleted;
  quizStateKey: string;
};

const useQuizState: UseQuizState = (quizOptions, cioClient) => {
  const { sessionStateOptions } = quizOptions;

  // Quiz Local state
  const { quizLocalState, dispatchLocalState, hasQuizStoredState, isQuizCompleted, quizStateKey } =
    useQuizLocalState(sessionStateOptions?.sessionStateKey);

  // Quiz API state
  const { quizApiState, dispatchApiState } = useQuizApiState(
    quizOptions,
    cioClient,
    quizLocalState,
    isQuizCompleted,
    dispatchLocalState
  );

  return {
    quizApiState,
    quizLocalState,
    dispatchApiState,
    dispatchLocalState,
    hasQuizStoredState,
    isQuizCompleted,
    quizStateKey,
  };
};

export default useQuizState;
