import { useCallback, useEffect, useReducer } from 'react';
import { ActionAnswerQuestion } from '../../components/CioQuiz/actions';
import quizLocalReducer, { initialState } from '../../components/CioQuiz/quizLocalReducer';
import { quizSessionStateKey } from '../../constants';
import { getStateFromSessionStorage, logger } from '../../utils';
import { SessionStateOptions } from '../../types';

const useQuizLocalState = (sessionStateOptions?: SessionStateOptions) => {
  const [quizLocalState, dispatch] = useReducer(quizLocalReducer, initialState);
  const quizStateKey = sessionStateOptions?.sessionStateKey || quizSessionStateKey;

  useEffect(() => {
    // don't save state if initial state
    if (quizLocalState?.answers?.length) {
      window?.sessionStorage?.setItem(quizStateKey, JSON.stringify(quizLocalState));
    }
  }, [quizLocalState, quizStateKey]);

  const hasQuizStoredState = (): boolean => getStateFromSessionStorage(quizStateKey) !== null;

  const skipToResults =
    !!getStateFromSessionStorage(quizStateKey)?.isQuizCompleted &&
    !sessionStateOptions?.showSessionModalOnResults;

  const dispatchLocalState = useCallback((action: ActionAnswerQuestion) => {
    logger(action);
    dispatch(action);
  }, []);

  return {
    quizLocalState,
    hasQuizStoredState,
    dispatchLocalState,
    skipToResults,
    quizStateKey,
  };
};

export default useQuizLocalState;
