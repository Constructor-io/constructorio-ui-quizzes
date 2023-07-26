import { UseQuiz } from '../types';
import useCioClient from './useCioClient';
import useConsoleErrors from './useConsoleErrors';
import usePropsGetters from './usePropsGetters';
import usePrimaryColorStyles from './usePrimaryColorStyles';
import useQuizEvents from './useQuizEvents';
import useQuizState from './useQuizState';

const useQuiz: UseQuiz = (quizOptions) => {
  const { apiKey, cioJsClient, primaryColor } = quizOptions;

  // Log console errors for required parameters quizId and resultsPageOptions
  useConsoleErrors(quizOptions);

  // Quiz Cio Client
  const cioClient = useCioClient({ apiKey, cioJsClient });

  // Quiz state (Local and API)
  const quizState = useQuizState(quizOptions, cioClient);

  // Quiz callback events
  const quizEvents = useQuizEvents(quizOptions, cioClient, quizState);

  // Props getters
  const { quizApiState, quizLocalState } = quizState;
  const propGetters = usePropsGetters(quizEvents, quizApiState, quizLocalState);

  const primaryColorStyles = usePrimaryColorStyles(primaryColor);

  console.log('quizLocalState.answerInputs', quizLocalState.answerInputs);
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
        currentQuestion: quizApiState.quizCurrentQuestion,
        results: quizApiState.quizResults,
        selectedOptionsWithAttributes: quizApiState.selectedOptionsWithAttributes,
      },
    },
    events: {
      ...quizEvents,
    },
    ...propGetters,
    primaryColorStyles,
  };
};

export default useQuiz;
