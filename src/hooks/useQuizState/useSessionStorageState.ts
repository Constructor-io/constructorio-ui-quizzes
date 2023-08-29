import { useEffect } from 'react';
import { getStateFromSessionStorage } from '../../utils';
import { SessionStateOptions } from '../../types';
import { QuizLocalReducerState } from '../../components/CioQuiz/quizLocalReducer';
import { quizSessionStateKey } from '../../constants';

const useSessionStorageState = (
  quizLocalState?: QuizLocalReducerState,
  sessionStateOptions?: SessionStateOptions,
  enableHydration?: boolean
) => {
  const quizSessionStorageStateKey = sessionStateOptions?.sessionStateKey || quizSessionStateKey;
  // Save state to session storage
  useEffect(() => {
    // don't save state if initial state
    if (enableHydration && quizLocalState?.answers?.length) {
      window?.sessionStorage?.setItem(quizSessionStorageStateKey, JSON.stringify(quizLocalState));
    }
  }, [quizLocalState, quizSessionStorageStateKey, enableHydration]);

  const skipToResults =
    !!enableHydration &&
    !!getStateFromSessionStorage(quizSessionStorageStateKey)?.isQuizCompleted &&
    !sessionStateOptions?.showSessionModalOnResults;

  return {
    skipToResults,
    quizSessionStorageStateKey,
    hasSessionStorageState: () => getStateFromSessionStorage(quizSessionStorageStateKey) !== null,
  };
};

export default useSessionStorageState;
