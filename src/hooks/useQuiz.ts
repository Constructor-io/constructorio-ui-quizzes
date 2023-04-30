import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { QuestionTypes } from '../components/CioQuiz/actions';
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

type UseQuiz = (quizProps: IQuizProps) => any;

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

  const onResetClick = () => {
    if (dispatch && resultsResponse) {
      resetQuizSessionId();
      dispatch({
        type: QuestionTypes.Reset,
      });
    }
  };

  return {
    events: {
      quizNextHandler,
      quizBackHandler,
      onResetClick,
    },
    cioClient,
    dispatch,
    quizState,
    questionResponse,
    resultsResponse,
    isFirstQuestion,
    requestState,
    resetQuizSessionId,
  };
};

export default useQuiz;
