import { useCallback } from 'react';
import {
  ActionAnswerQuestion,
  ActionQuizAPI,
  QuestionTypes,
  QuizAPIActionTypes,
} from '../../components/CioQuiz/actions';
import { QuizEventsReturn } from '../../types';

const useProceedToResultsFromSummaryPage = (
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>,
  dispatchApiState: React.Dispatch<ActionQuizAPI>,
  dispatchApiStateQuizResults: () => void
): QuizEventsReturn.ProceedToResultsFromSummaryPage => {
  const proceedToResultsFromSummaryPage = useCallback(() => {
    dispatchApiState({
      type: QuizAPIActionTypes.SET_IS_LOADING,
    });
    dispatchLocalState({
      type: QuestionTypes.SummaryPage,
      payload: { showSummaryPage: false },
    });

    dispatchApiStateQuizResults();
  }, [dispatchApiState, dispatchApiStateQuizResults, dispatchLocalState]);

  return proceedToResultsFromSummaryPage;
};

export default useProceedToResultsFromSummaryPage;
