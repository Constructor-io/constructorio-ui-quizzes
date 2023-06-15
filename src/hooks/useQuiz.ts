import { UseQuiz } from '../types';
import { rgbToHsl } from '../utils';
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
  primaryColor,
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

  // Convert this to a hook, maybe?
  let primaryColorStyles = {};
  if (primaryColor) {
    const rgbMatch = primaryColor.trim().match(/^\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})/);

    if (rgbMatch && rgbMatch.length === 4) {
      const [r, g, b] = rgbMatch.slice(1);
      const [h, s, l] = rgbToHsl(Number(r), Number(g), Number(b));

      primaryColorStyles = {
        '--primary-color-h': `${h}`,
        '--primary-color-s': `${s}%`,
        '--primary-color-l': `${l}%`,
      };
    }
  }

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
    primaryColorStyles,
  };
};

export default useQuiz;
