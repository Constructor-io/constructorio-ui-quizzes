import { useCallback } from 'react';
import {
  ActionAnswerQuestion,
  ActionQuizAPI,
  QuestionTypes,
  QuizAPIActionTypes,
} from '../../components/CioQuiz/actions';
import { QuizEventsReturn, QuizResultsResponse, QuizSharedResultsData } from '../../types';
import { RequestStates } from '../../constants';
import useQueryParams from '../useQueryParams';

type IUseQuizResetClickProps = {
  resetQuizSessionStorageState: () => void;
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>;
  dispatchApiState: React.Dispatch<ActionQuizAPI>;
  quizResults?: QuizResultsResponse | QuizSharedResultsData;
  quizRequestState: RequestStates;
};

const useQuizResetClick = (props: IUseQuizResetClickProps): QuizEventsReturn.ResetQuiz => {
  const {
    resetQuizSessionStorageState,
    dispatchLocalState,
    dispatchApiState,
    quizResults,
    quizRequestState,
  } = props;
  const { removeSharedResultsQueryParams, isSharedResultsQuery } = useQueryParams();
  const quizResetClickHandler = useCallback(() => {
    if (quizResults || quizRequestState === RequestStates.Error) {
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
    quizRequestState,
    removeSharedResultsQueryParams,
    isSharedResultsQuery,
  ]);

  return quizResetClickHandler;
};

export default useQuizResetClick;
