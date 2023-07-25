import { RequestStates } from '../../constants';
import { CurrentQuestion, NextQuestionResponse, QuizResultsResponse } from '../../types';
import { getQuestionTypes } from '../../utils';
import { QuizAPIActionTypes, ActionQuizAPI } from './actions';

export type QuizAPIReducerState = {
  quizRequestState: RequestStates;
  quizCurrentQuestion?: CurrentQuestion;
  quizFirstQuestion?: NextQuestionResponse;
  quizResults?: QuizResultsResponse;
  selectedOptionsWithAttributes?: string[];
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
        selectedOptionsWithAttributes: undefined,
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
        selectedOptionsWithAttributes: undefined,
      };
    }
    case QuizAPIActionTypes.SET_QUIZ_RESULTS: {
      const selectedOptionsWithAttributes =
        action.payload?.quizResults.quiz_selected_options
          .filter((option) => option.has_attribute)
          .map((option) => option.value) || [];

      return {
        ...state,
        quizRequestState: RequestStates.Success,
        quizResults: action.payload?.quizResults,
        quizCurrentQuestion: undefined,
        selectedOptionsWithAttributes,
      };
    }

    case QuizAPIActionTypes.RESET_QUIZ:
      return initialState;
    default:
      return state;
  }
}
