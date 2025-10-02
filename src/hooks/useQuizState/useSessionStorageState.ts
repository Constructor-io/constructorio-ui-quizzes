import { useEffect, useState } from 'react';
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
  const [quizData, setQuizData] = useState(getStateFromSessionStorage(quizSessionStorageStateKey));

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
      setQuizData(data);
    }
  }, [quizLocalState, quizSessionStorageStateKey, enableHydration, quizId]);

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
