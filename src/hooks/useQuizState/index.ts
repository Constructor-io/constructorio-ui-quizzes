import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { ActionAnswerQuestion, ActionQuizAPI } from '../../components/CioQuiz/actions';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../components/CioQuiz/quizLocalReducer';
import { IQuizProps } from '../../types';
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
  quizStateKey: string;
};

const useQuizState: UseQuizState = (quizOptions, cioClient) => {
  const { sessionStateOptions } = quizOptions;

  // Quiz Local state
  const { quizLocalState, dispatchLocalState, hasQuizStoredState, quizStateKey } =
    useQuizLocalState(sessionStateOptions?.sessionStateKey);

  // Quiz API state
  const { quizApiState, dispatchApiState } = useQuizApiState(
    quizOptions,
    cioClient,
    quizLocalState,
    dispatchLocalState
  );

  return {
    quizApiState,
    quizLocalState,
    dispatchApiState,
    dispatchLocalState,
    hasQuizStoredState,
    quizStateKey,
  };
};

export default useQuizState;
