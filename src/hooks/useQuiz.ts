/* eslint-disable @typescript-eslint/naming-convention */
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { GetBrowseResultsResponseData } from '@constructor-io/constructorio-client-javascript/lib/types';
import { QuizAPIReducerState } from '../components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../components/CioQuiz/quizLocalReducer';
import { ResultsPageOptions } from '../components/Results/Results';
import useCioClient from './useCioClient';
import useConsoleErrors from './useConsoleErrors';
import useQuizApiState from './useQuizApiState';
import useQuizLocalState from './useQuizLocalState';
import useQuizTrackingAndCbEvents from './useQuizTrackingAndCbEvents';

export interface IQuizProps {
  apiKey?: string;
  cioJsClient?: ConstructorIOClient;
  quizId: string;
  quizVersionId?: string;
  resultsPageOptions: ResultsPageOptions;
}

export interface UseQuizReturnEvents {
  quizNextHandler: () => void;
  quizBackHandler: () => void;
  resetQuizClickHandler: () => void;
  resultClickHandler: (result: Partial<GetBrowseResultsResponseData>, position: number) => void;
  addToCartClickHandler: (
    e: React.MouseEvent<HTMLElement>,
    result: Partial<GetBrowseResultsResponseData>,
    price: any
  ) => void;
}

export interface UseQuizReturn {
  cioClient?: ConstructorIOClient;
  quizLocalState?: QuizLocalReducerState;
  quizApiState?: QuizAPIReducerState;
  isFirstQuestion?: boolean;
  events: UseQuizReturnEvents;
}

type UseQuiz = (quizProps: IQuizProps) => UseQuizReturn;

const useQuiz: UseQuiz = ({ quizId, apiKey, cioJsClient, quizVersionId, resultsPageOptions }) => {
  // Log console errors for required parameters quizId and resultsPageOptions
  useConsoleErrors(quizId, resultsPageOptions);

  // Quiz Local state
  const { quizLocalState, resetQuizLocalState, dispatchLocalState } = useQuizLocalState();

  // Quiz Cio Client
  const cioClient = useCioClient({ apiKey, cioJsClient });

  // Quiz API state
  const { isFirstQuestion, quizApiState, resetQuizApiState } = useQuizApiState(
    quizId,
    quizLocalState,
    resultsPageOptions,
    quizVersionId,
    cioClient
  );

  // Quiz tracking and custom callback event
  const { addToCartClickHandler, resultClickHandler, quizNextHandler, quizBackHandler } =
    useQuizTrackingAndCbEvents(cioClient, quizApiState, resultsPageOptions, dispatchLocalState);

  const resetQuizClickHandler = () => {
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
      resetQuizClickHandler,
      resultClickHandler,
      addToCartClickHandler,
    },
  };
};

export default useQuiz;
