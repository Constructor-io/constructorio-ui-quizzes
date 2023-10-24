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
  const { removeSharedResultsQueryParams, isSharedResultsQuery } = useQueryParams();
  const quizResetClickHandler = useCallback(() => {
    if (quizResults) {
      dispatchLocalState({
        type: QuestionTypes.Reset,
      });
      dispatchApiState({
        type: QuizAPIActionTypes.RESET_QUIZ,
      });
      resetQuizSessionStorageState();
      if (isSharedResultsQuery) removeSharedResultsQueryParams();
    }
  }, [
    dispatchLocalState,
    dispatchApiState,
    resetQuizSessionStorageState,
    quizResults,
    removeSharedResultsQueryParams,
    isSharedResultsQuery,
  ]);

  return quizResetClickHandler;
};

export default useQuizResetClick;
