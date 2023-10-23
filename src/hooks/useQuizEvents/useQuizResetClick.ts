import { useCallback } from 'react';
import {
  ActionAnswerQuestion,
  ActionQuizAPI,
  QuestionTypes,
  QuizAPIActionTypes,
} from '../../components/CioQuiz/actions';
import { QuizEventsReturn, QuizResultsResponse, QuizSharedResultsData } from '../../types';
import useQueryParams from '../useQueryParams';

const useQuizResetClick = (
  resetQuizSessionStorageState: () => void,
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>,
  dispatchApiState: React.Dispatch<ActionQuizAPI>,
  quizResults?: QuizResultsResponse | QuizSharedResultsData
): QuizEventsReturn.NextQuestion => {
  const { removeQueryParams } = useQueryParams();
  const quizResetClickHandler = useCallback(() => {
    removeQueryParams();
    if (quizResults) {
      dispatchLocalState({
        type: QuestionTypes.Reset,
      });
      dispatchApiState({
        type: QuizAPIActionTypes.RESET_QUIZ,
      });
      resetQuizSessionStorageState();
    }
  }, [
    dispatchLocalState,
    dispatchApiState,
    resetQuizSessionStorageState,
    quizResults,
    removeQueryParams,
  ]);

  return quizResetClickHandler;
};

export default useQuizResetClick;
