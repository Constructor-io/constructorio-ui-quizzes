import { RequestStates } from '../../constants';
import { NextQuestionResponse, QuizResultsResponse } from '../../types';
import { QuizAPIActionTypes, ActionQuizAPI } from './actions';

export type QuizAPIReducerState = {
  quizRequestState: RequestStates;
  quizVersionId?: string;
  quizSessionId?: string;
  quizFirstQuestion?: NextQuestionResponse;
  quizCurrentQuestion?: NextQuestionResponse;
  quizResults?: QuizResultsResponse;
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
        quizVersionId: action.payload?.quizVersionId,
        quizSessionId: action.payload?.quizSessionId,
        quizCurrentQuestion: action.payload?.quizCurrentQuestion,
        quizResults: undefined,
        // If no current question set first question value
        ...(!state.quizCurrentQuestion && {
          quizFirstQuestion: action.payload?.quizCurrentQuestion,
        }),
      };
    case QuizAPIActionTypes.SET_QUIZ_RESULTS:
      return {
        ...state,
        quizRequestState: RequestStates.Success,
        quizResults: action.payload?.quizResults,
        quizCurrentQuestion: undefined,
      };
    case QuizAPIActionTypes.RESET_QUIZ:
      return initialState;
    default:
      return state;
  }
}
