import { UseQuiz } from '../types';
import useCioClient from './useCioClient';
import useConsoleErrors from './useConsoleErrors';
import useQuizApiState from './useQuizApiState';
import useQuizEvents from './useQuizEvents';
import useQuizLocalState from './useQuizLocalState';

const useQuiz: UseQuiz = ({
  quizId,
  apiKey,
  cioJsClient,
  quizVersionId,
  resultsPageOptions,
  sessionStateOptions,
}) => {
  // Log console errors for required parameters quizId and resultsPageOptions
  useConsoleErrors(quizId, resultsPageOptions);

  // Quiz Local state
  const {
    quizLocalState,
    resetQuizLocalState,
    dispatchLocalState,
    hydrateQuizLocalState,
    hasQuizStoredState,
    resetQuizStoredState,
  } = useQuizLocalState(sessionStateOptions?.sessionStateKey);

  // Quiz Cio Client
  const cioClient = useCioClient({ apiKey, cioJsClient });

  // Quiz API state
  const { isFirstQuestion, quizApiState, resetQuizApiState } = useQuizApiState(
    quizId,
    quizLocalState,
    dispatchLocalState,
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
    hydrateQuizLocalState,
    resetQuizStoredState,
    hasQuizStoredState,
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
        versionId: quizLocalState.quizVersionId,
        sessionId: quizLocalState.quizSessionId,
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
