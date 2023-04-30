import { useCallback, useReducer } from 'react';
import { ActionAnswerQuestion, QuestionTypes } from '../components/CioQuiz/actions';
import reducer, { initialState } from '../components/CioQuiz/quizLocalReducer';

const useQuizState = () => {
  const [quizState, dispatch] = useReducer(reducer, initialState);

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

  return {
    dispatch,
    quizState,
    quizNextHandler,
    quizBackHandler,
  };
};

export default useQuizState;
