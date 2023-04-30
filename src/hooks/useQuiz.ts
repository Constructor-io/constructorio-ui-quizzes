import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { QuizAPIReducerState } from '../components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../components/CioQuiz/quizLocalReducer';
import { ResultsPageOptions } from '../components/Results/Results';
import useConsoleErrors from './useConsoleErrors';
import useQuizApiState from './useQuizApiState';
import useQuizLocalState from './useQuizLocalState';

export interface IQuizProps {
  quizId: string;
  resultsPageOptions: ResultsPageOptions;
  apiKey?: string;
  cioJsClient?: ConstructorIOClient;
  quizVersionId?: string;
}

type UseQuiz = (quizProps: IQuizProps) => {
  cioClient?: ConstructorIOClient;
  quizLocalState?: QuizLocalReducerState;
  quizApiState?: QuizAPIReducerState;
  isFirstQuestion?: boolean;
  events: {
    quizNextHandler: () => void;
    quizBackHandler: () => void;
    onResetClick: () => void;
  };
};

const useQuiz: UseQuiz = ({ quizId, apiKey, cioJsClient, resultsPageOptions, quizVersionId }) => {
  // Log console errors for required parameters quizId and resultsPageOptions
  useConsoleErrors(quizId, resultsPageOptions);

  // Quiz Local state
  const { quizLocalState, quizNextHandler, quizBackHandler, resetQuizLocalState } =
    useQuizLocalState();

  // Quiz API state
  const { cioClient, isFirstQuestion, quizApiState, resetQuizApiState } = useQuizApiState(
    quizId,
    quizLocalState,
    resultsPageOptions,
    quizVersionId,
    apiKey,
    cioJsClient
  );

  const onResetClick = () => {
    if (quizApiState.quizResults) {
      resetQuizApiState();
      resetQuizLocalState();
    }
  };

  return {
    cioClient,
    quizLocalState,
    quizApiState,
    isFirstQuestion,
    events: {
      quizNextHandler,
      quizBackHandler,
      onResetClick,
    },
  };
};

export default useQuiz;
