import { useReducer } from 'react';
import { QuestionTypes } from '../components/CioQuiz/actions';
import quizLocalReducer, { initialState } from '../components/CioQuiz/quizLocalReducer';

const useQuizLocalState = () => {
  const [quizLocalState, dispatch] = useReducer(quizLocalReducer, initialState);

  const resetQuizLocalState = () => {
    dispatch({
      type: QuestionTypes.Reset,
    });
  };
  return {
    quizLocalState,
    resetQuizLocalState,
    dispatchLocalState: dispatch,
  };
};

export default useQuizLocalState;
