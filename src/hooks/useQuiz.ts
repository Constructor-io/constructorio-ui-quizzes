import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { ResultsPageOptions } from '../components/Results/Results';
import useCioClient from './useCioClient';
import useConsoleErrors from './useConsoleErrors';
import useQuizApiState from './useQuizApiState';
import useQuizLocalState from './useQuizLocalState';
import useQuizEvents, { QuizEvents } from './useQuizEvents';
import { RequestStates } from '../constants';
import { NextQuestionResponse, QuizResultsResponse } from '../types';

export interface IQuizProps {
  apiKey?: string;
  cioJsClient?: ConstructorIOClient;
  quizId: string;
  quizVersionId?: string;
  resultsPageOptions: ResultsPageOptions;
}

export interface UseQuizReturn {
  cioClient?: ConstructorIOClient;
  state: {
    answers: {
      inputs: Record<string, string | string[]>; // Key is the question Id and value is the answer input
      isLastAnswer: boolean;
    };
    quiz: {
      requestState: RequestStates;
      versionId?: string;
      sessionId?: string;
      firstQuestion?: NextQuestionResponse;
      currentQuestion?: NextQuestionResponse;
      results?: QuizResultsResponse;
      resultsFilters?: string[];
      isFirstQuestion?: boolean;
    };
  };
  events: QuizEvents;
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

  // Quiz callback events
  const quizEvents = useQuizEvents({
    cioClient,
    quizApiState,
    resultsPageOptions,
    dispatchLocalState,
    resetQuizApiState,
    resetQuizLocalState,
  });

  return {
    cioClient,
    state: {
      answers: {
        inputs: quizLocalState.answerInputs,
        isLastAnswer: quizLocalState.isLastAnswer,
      },
      quiz: {
        requestState: quizApiState.quizRequestState,
        versionId: quizApiState.quizVersionId,
        sessionId: quizApiState.quizSessionId,
        firstQuestion: quizApiState.quizFirstQuestion,
        currentQuestion: quizApiState.quizCurrentQuestion,
        results: quizApiState.quizResults,
        resultsFilters: quizApiState.quizResultsFilters,
        isFirstQuestion,
      },
    },
    events: {
      ...quizEvents,
    },
  };
};

export default useQuiz;
