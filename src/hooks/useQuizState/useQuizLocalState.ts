import { useCallback, useEffect, useReducer } from 'react';
import { ActionAnswerQuestion } from '../../components/CioQuiz/actions';
import quizLocalReducer, { initialState } from '../../components/CioQuiz/quizLocalReducer';
import { quizSessionStateKey } from '../../constants';
import { getStateFromSessionStorage, logger } from '../../utils';

const useQuizLocalState = (sessionStateKey?: string) => {
  const [quizLocalState, dispatch] = useReducer(quizLocalReducer, initialState);
  const quizStateKey = sessionStateKey || quizSessionStateKey;

  useEffect(() => {
    // don't save state if initial state
    if (quizLocalState?.answers?.length) {
      window?.sessionStorage?.setItem(quizStateKey, JSON.stringify(quizLocalState));
    }
  }, [quizLocalState, quizStateKey]);

  const hasQuizStoredState = (): boolean => getStateFromSessionStorage(quizStateKey) !== null;

  const dispatchLocalState = useCallback(
    (action: ActionAnswerQuestion) => {
      logger(action);
      dispatch(action);
    },
    [dispatch]
  );

  return {
    quizLocalState,
    hasQuizStoredState,
    dispatchLocalState,
    quizStateKey,
  };
};

export default useQuizLocalState;
