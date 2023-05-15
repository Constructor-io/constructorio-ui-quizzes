import { RequestStates } from '../../constants';
import { NextQuestionResponse, QuizResultsResponse } from '../../types';
import { getFilterValuesFromExpression } from '../../utils';
import { QuizAPIActionTypes, ActionQuizAPI } from './actions';

export type QuizAPIReducerState = {
  quizRequestState: RequestStates;
  quizFirstQuestion?: NextQuestionResponse;
  quizCurrentQuestion?: NextQuestionResponse;
  quizResults?: QuizResultsResponse;
  quizResultsFilters?: string[];
};

export const initialState: QuizAPIReducerState = {
  quizRequestState: RequestStates.Stale,
};

export default function apiReducer(state: QuizAPIReducerState, action: ActionQuizAPI) {
  switch (action.type) {
    case QuizAPIActionTypes.SET_IS_LOADING:
      return {
        ...state,
        quizRequestState: RequestStates.Loading,
      };
    case QuizAPIActionTypes.SET_IS_ERROR:
      return {
        ...state,
        quizRequestState: RequestStates.Error,
        quizResults: undefined,
      };
    case QuizAPIActionTypes.SET_CURRENT_QUESTION:
      return {
        ...state,
        quizRequestState: RequestStates.Success,
        quizCurrentQuestion: action.payload?.quizCurrentQuestion,
        quizResults: undefined,
        // If no current question set first question value
        ...(!state.quizCurrentQuestion && {
          quizFirstQuestion: action.payload?.quizCurrentQuestion,
        }),
      };
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
