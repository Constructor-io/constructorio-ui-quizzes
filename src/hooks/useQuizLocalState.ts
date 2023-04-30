import { useCallback, useReducer } from 'react';
import { ActionAnswerQuestion, QuestionTypes } from '../components/CioQuiz/actions';
import quizLocalReducer, { initialState } from '../components/CioQuiz/quizLocalReducer';

const useQuizLocalState = () => {
  const [quizLocalState, dispatch] = useReducer(quizLocalReducer, initialState);

  const quizNextHandler = useCallback(
    (action?: ActionAnswerQuestion) => {
      if (action) {
        dispatch(action);
      }
    },
    [dispatch]
  );

  const quizBackHandler = useCallback(() => {
    if (dispatch) {
      dispatch({ type: QuestionTypes.Back });
    }
  }, [dispatch]);

  const resetQuizLocalState = () => {
    dispatch({
      type: QuestionTypes.Reset,
    });
  };
  return {
    dispatch,
    quizLocalState,
    quizNextHandler,
    quizBackHandler,
    resetQuizLocalState,
  };
};

export default useQuizLocalState;
