import { useEffect } from 'react';
import { getStateFromSessionStorage } from '../../utils';
import { SessionStateOptions } from '../../types';
import { QuizLocalReducerState } from '../../components/CioQuiz/quizLocalReducer';
import { quizSessionStateKey } from '../../constants';

const useSessionStorageState = (
  quizId: string,
  quizLocalState?: QuizLocalReducerState,
  sessionStateOptions?: SessionStateOptions,
  enableHydration?: boolean
) => {
  const quizSessionStorageStateKey = sessionStateOptions?.sessionStateKey || quizSessionStateKey;

  // Save state to session storage
  useEffect(() => {
    // don't save state if initial state
    if (enableHydration && quizLocalState?.answers?.length) {
      const data = getStateFromSessionStorage(quizSessionStorageStateKey);
      const dataToSave = {
        ...data,
        [quizId]: quizLocalState,
      };
      window?.sessionStorage?.setItem(quizSessionStorageStateKey, JSON.stringify(dataToSave));
    }
  }, [quizLocalState, quizSessionStorageStateKey, enableHydration, quizId]);

  const quizData = getStateFromSessionStorage(quizSessionStorageStateKey);

  const skipToResults =
    !!enableHydration &&
    !!quizData?.[quizId]?.isQuizCompleted &&
    !sessionStateOptions?.showSessionModalOnResults;

  return {
    skipToResults,
    quizSessionStorageStateKey,
    hasSessionStorageState: () => !!quizData && !!quizData[quizId],
  };
};

export default useSessionStorageState;
