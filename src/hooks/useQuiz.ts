import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { QuizContextValue } from '../components/CioQuiz/context';
import { ResultsPageOptions } from '../components/Results/Results';
import useConsoleErrors from './useConsoleErrors';
import useFetchQuiz from './useFetchQuiz';
import useQuizState from './useQuizState';

export interface IQuizProps {
  quizId: string;
  resultsPageOptions: ResultsPageOptions;
  apiKey?: string;
  cioJsClient?: ConstructorIOClient;
  quizVersionId?: string;
}

type UseQuiz = (quizProps: IQuizProps) => QuizContextValue & { resetQuizSessionId: () => void };

const useQuiz: UseQuiz = ({ quizId, apiKey, cioJsClient, resultsPageOptions, quizVersionId }) => {
  // Log console errors for required parameters quizId and resultsPageOptions
  useConsoleErrors(quizId, resultsPageOptions);

  // Quiz Local state
  const { dispatch, quizState, quizNextHandler, quizBackHandler } = useQuizState();

  // Quiz API state
  const {
    cioClient,
    requestState,
    isFirstQuestion,
    resultsResponse,
    questionResponse,
    resetQuizSessionId,
  } = useFetchQuiz(quizId, quizState, resultsPageOptions, quizVersionId, apiKey, cioJsClient);

  return {
    cioClient,
    dispatch,
    quizState,
    questionResponse,
    resultsResponse,
    isFirstQuestion,
    quizNextHandler,
    quizBackHandler,
    requestState,
    resetQuizSessionId,
  };
};

export default useQuiz;
