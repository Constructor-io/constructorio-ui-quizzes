import { useEffect } from 'react';
import { UseQuiz } from '../types';
import useCioClient from './useCioClient';
import useConsoleErrors from './useConsoleErrors';
import usePropsGetters from './usePropsGetters';
import usePrimaryColorStyles from './usePrimaryColorStyles';
import useQuizEvents from './useQuizEvents';
import useQuizState from './useQuizState';
import usePrevious from './usePrevious';
import { QuestionTypes, QuizAPIActionTypes } from '../components/CioQuiz/actions';
import { resetQuizSessionStorageState } from '../utils';

const useQuiz: UseQuiz = (quizOptions) => {
  const { apiKey, cioJsClient, primaryColor, resultsPageOptions } = quizOptions;

  // Log console errors for required parameters quizId
  useConsoleErrors(quizOptions);

  // Quiz Cio Client
  const cioClient = useCioClient({ apiKey, cioJsClient });

  // Quiz state (Local and API)
  const quizState = useQuizState(quizOptions, cioClient);

  // Quiz callback events
  const quizEvents = useQuizEvents(quizOptions, cioClient, quizState);

  // Props getters
  const { quizApiState, quizLocalState, quizSessionStorageState } = quizState;
  const { skipToResults } = quizSessionStorageState;
  const propGetters = usePropsGetters(
    quizEvents,
    quizApiState,
    quizLocalState,
    resultsPageOptions?.favoriteItems
  );

  const primaryColorStyles = usePrimaryColorStyles(primaryColor);

  useEffect(() => {
    if (skipToResults) quizEvents.hydrateQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { quizId } = quizOptions;
  const { dispatchApiState, dispatchLocalState } = quizState;

  const prevQuizId = usePrevious(quizId);

  useEffect(() => {
    if (quizId === prevQuizId) return;
    if (!prevQuizId) return;
    resetQuizSessionStorageState(quizSessionStorageState.key)();
    dispatchLocalState({
      type: QuestionTypes.Reset,
    });
    dispatchApiState({
      type: QuizAPIActionTypes.RESET_QUIZ,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizId, prevQuizId]);

  return {
    cioClient,
    state: {
      answers: {
        inputs: quizLocalState.answerInputs,
      },
      quiz: {
        requestState: quizApiState.quizRequestState,
        versionId: quizLocalState.quizVersionId,
        sessionId: quizLocalState.quizSessionId,
        currentQuestion: quizApiState.quizCurrentQuestion,
        results: quizApiState.quizResults,
        selectedOptionsWithAttributes: quizApiState.selectedOptionsWithAttributes,
        matchedOptions: quizApiState.matchedOptions,
        resultsConfig: quizApiState.resultsConfig ?? null,
      },
      quizSessionStorageState,
    },
    events: {
      ...quizEvents,
    },
    ...propGetters,
    primaryColorStyles,
  };
};

export default useQuiz;
