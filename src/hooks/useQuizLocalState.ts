import { useEffect, useReducer } from 'react';
import { QuestionTypes } from '../components/CioQuiz/actions';
import quizLocalReducer, {
  QuizLocalReducerState,
  initialState,
} from '../components/CioQuiz/quizLocalReducer';
import { quizSessionStateKey } from '../constants';

const useQuizLocalState = (sessionStateKey?: string) => {
  const [quizLocalState, dispatch] = useReducer(quizLocalReducer, initialState);
  const quizStateKey = sessionStateKey || quizSessionStateKey;

  const getStateFromSessionStorage = (): QuizLocalReducerState | null => {
    const state = window?.sessionStorage?.getItem(quizStateKey);

    if (state) {
      return JSON.parse(state);
    }
    return null;
  };

  useEffect(() => {
    // don't save state if initial state
    if (quizLocalState?.answers?.length) {
      window?.sessionStorage?.setItem(quizStateKey, JSON.stringify(quizLocalState));
    }
  }, [quizLocalState, quizStateKey]);

  const resetQuizLocalState = () => {
    dispatch({
      type: QuestionTypes.Reset,
    });
  };

  const hydrateQuizLocalState = () => {
    const quizState = getStateFromSessionStorage();
    if (quizState) {
      dispatch({
        type: QuestionTypes.Hydrate,
        payload: quizState,
      });
    }
  };

  const resetQuizStoredState = () => {
    window?.sessionStorage?.removeItem(quizStateKey);
  };

  const hasQuizStoredState = (): boolean => getStateFromSessionStorage() !== null;

  return {
    quizLocalState,
    resetQuizLocalState,
    hydrateQuizLocalState,
    hasQuizStoredState,
    resetQuizStoredState,
    dispatchLocalState: dispatch,
  };
};

export default useQuizLocalState;
