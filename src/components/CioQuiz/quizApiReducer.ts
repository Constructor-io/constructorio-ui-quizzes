import { RequestStates } from '../../constants';
import { CurrentQuestion, NextQuestionResponse, QuizResultsResponse } from '../../types';
import { getFilterValuesFromExpression, getQuestionTypes } from '../../utils';
import { QuizAPIActionTypes, ActionQuizAPI } from './actions';

export type QuizAPIReducerState = {
  quizRequestState: RequestStates;
  quizCurrentQuestion?: CurrentQuestion;
  quizFirstQuestion?: NextQuestionResponse;
  quizResults?: QuizResultsResponse;
  quizResultsFilters?: string[];
};

export const initialState: QuizAPIReducerState = {
  quizRequestState: RequestStates.Stale,
};

export default function apiReducer(
  state: QuizAPIReducerState,
  action: ActionQuizAPI
): QuizAPIReducerState {
  switch (action.type) {
    case QuizAPIActionTypes.SET_IS_LOADING:
      return {
        ...state,
        quizRequestState: RequestStates.Loading,
        quizCurrentQuestion: undefined,
        quizResults: undefined,
      };
    case QuizAPIActionTypes.SET_IS_ERROR:
      return {
        ...state,
        quizRequestState: RequestStates.Error,
        quizCurrentQuestion: undefined,
        quizResults: undefined,
      };
    case QuizAPIActionTypes.SET_CURRENT_QUESTION: {
      const {
        isOpenQuestion,
        isCoverQuestion,
        isSingleQuestion,
        isMultipleQuestion,
        isSelectQuestion,
      } = getQuestionTypes(action.payload?.quizCurrentQuestion?.next_question?.type);
      const quizFirstQuestion = state.quizFirstQuestion || action.payload?.quizCurrentQuestion;
      return {
        ...state,
        quizRequestState: RequestStates.Success,
        quizCurrentQuestion: {
          ...action.payload?.quizCurrentQuestion!,
          isFirstQuestion:
            quizFirstQuestion?.next_question.id ===
            action.payload?.quizCurrentQuestion?.next_question?.id,
          isOpenQuestion,
          isCoverQuestion,
          isSingleQuestion,
          isMultipleQuestion,
          isSelectQuestion,
        },
        quizFirstQuestion,
        quizResults: undefined,
      };
    }
    case QuizAPIActionTypes.SET_QUIZ_RESULTS: {
      const filterExpression =
        action.payload?.quizResults?.request?.collection_filter_expression || null;
      const quizResultsFilters = [...new Set(getFilterValuesFromExpression(filterExpression))];
      return {
        ...state,
        quizRequestState: RequestStates.Success,
        quizResults: action.payload?.quizResults,
        quizResultsFilters,
        quizCurrentQuestion: undefined,
      };
    }

    case QuizAPIActionTypes.RESET_QUIZ:
      return initialState;
    default:
      return state;
  }
}
