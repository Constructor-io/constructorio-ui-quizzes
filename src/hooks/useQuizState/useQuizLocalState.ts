import { useCallback, useReducer } from 'react';
import { ActionAnswerQuestion } from '../../components/CioQuiz/actions';
import quizLocalReducer, { initialState } from '../../components/CioQuiz/quizLocalReducer';
import { logger } from '../../utils';

const useQuizLocalState = () => {
  const [quizLocalState, dispatch] = useReducer(quizLocalReducer, initialState);

  const dispatchLocalState = useCallback((action: ActionAnswerQuestion) => {
    logger(action);
    dispatch(action);
  }, []);

  return {
    quizLocalState,
    dispatchLocalState,
  };
};

export default useQuizLocalState;
