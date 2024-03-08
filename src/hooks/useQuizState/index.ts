import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { ActionAnswerQuestion, ActionQuizAPI } from '../../components/CioQuiz/actions';
import { QuizAPIReducerState } from '../../components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../components/CioQuiz/quizLocalReducer';
import { IQuizProps, QuizSessionStorageState } from '../../types';
import useQuizApiState from './useQuizApiState';
import useQuizLocalState from './useQuizLocalState';
import useSessionStorageState from './useSessionStorageState';

type UseQuizState = (
  quizOptions: IQuizProps,
  cioClient: ConstructorIOClient
) => {
  quizApiState: QuizAPIReducerState;
  quizLocalState: QuizLocalReducerState;
  dispatchApiState: React.Dispatch<ActionQuizAPI>;
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>;
  quizSessionStorageState: QuizSessionStorageState;
};

const useQuizState: UseQuizState = (quizOptions, cioClient) => {
  const { sessionStateOptions, enableHydration } = quizOptions;

  // Quiz Local state
  const { quizLocalState, dispatchLocalState } = useQuizLocalState();

  // Quiz Session Storage state
  const { skipToResults, quizSessionStorageStateKey, hasSessionStorageState } =
    useSessionStorageState(
      quizLocalState,
      sessionStateOptions,
      enableHydration === undefined ? true : enableHydration
    );

  // Quiz API state
  const { quizApiState, dispatchApiState } = useQuizApiState(
    quizOptions,
    cioClient,
    quizLocalState,
    skipToResults,
    dispatchLocalState
  );

  return {
    quizApiState,
    quizLocalState,
    dispatchApiState,
    dispatchLocalState,
    quizSessionStorageState: {
      skipToResults,
      key: quizSessionStorageStateKey,
      hasSessionStorageState,
    },
  };
};

export default useQuizState;
