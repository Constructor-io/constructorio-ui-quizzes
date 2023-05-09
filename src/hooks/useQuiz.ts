import { UseQuiz } from '../types';
import useCioClient from './useCioClient';
import useConsoleErrors from './useConsoleErrors';
import useQuizApiState from './useQuizApiState';
import useQuizEvents from './useQuizEvents';
import useQuizLocalState from './useQuizLocalState';

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
