import { useCallback } from 'react';
import {
  ActionAnswerQuestion,
  ActionQuizAPI,
  QuestionTypes,
  QuizAPIActionTypes,
} from '../../components/CioQuiz/actions';
import {
  IQuizProps,
  QuizEventsReturn,
  QuizResultsResponse,
  QuizSharedResultsData,
} from '../../types';
import useQueryParams from '../useQueryParams';

type IUseQuizResetClickProps = {
  resetQuizSessionStorageState: () => void;
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>;
  dispatchApiState: React.Dispatch<ActionQuizAPI>;
  quizResults?: QuizResultsResponse | QuizSharedResultsData;
  quizBasePath?: IQuizProps['quizBasePath'];
};

const useQuizResetClick = (props: IUseQuizResetClickProps): QuizEventsReturn.NextQuestion => {
  const {
    resetQuizSessionStorageState,
    dispatchLocalState,
    dispatchApiState,
    quizResults,
    quizBasePath,
  } = props;
  const { removeSharedResultsQueryParams, isSharedResultsQuery } = useQueryParams(quizBasePath);
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
