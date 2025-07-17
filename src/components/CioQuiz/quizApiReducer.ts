import { RequestStates } from '../../constants';
import {
  CurrentQuestion,
  NextQuestionResponse,
  QuizResultsResponse,
  QuizSharedResultsData,
  QuizResultsConfig,
} from '../../types';
import { getQuestionTypes } from '../../utils';
import { QuizAPIActionTypes, ActionQuizAPI } from './actions';

export type QuizAPIReducerState = {
  quizRequestState: RequestStates;
  quizCurrentQuestion?: CurrentQuestion;
  quizFirstQuestion?: NextQuestionResponse;
  quizResults?: QuizResultsResponse | QuizSharedResultsData;
  selectedOptionsWithAttributes?: string[];
  matchedOptions?: string[];
  resultsConfig?: QuizResultsConfig | null;
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
        matchedOptions: undefined,
      };
    case QuizAPIActionTypes.SET_CURRENT_QUESTION: {
      const {
        isOpenQuestion,
        isCoverQuestion,
        isSingleQuestion,
        isMultipleQuestion,
        isSelectQuestion,
        isSingleFilterQuestion,
        isMultipleFilterQuestion,
      } = getQuestionTypes(action.payload?.quizCurrentQuestion?.next_question?.type);
      const quizFirstQuestion = state.quizFirstQuestion || action.payload?.quizCurrentQuestion;
      return {
        ...state,
        quizRequestState: RequestStates.Success,
        quizCurrentQuestion: {
          ...action.payload?.quizCurrentQuestion!,
          isFirstQuestion:
            quizFirstQuestion?.next_question?.id ===
            action.payload?.quizCurrentQuestion?.next_question?.id,
          isOpenQuestion,
          isCoverQuestion,
          isSingleQuestion,
          isMultipleQuestion,
          isSelectQuestion,
          isSingleFilterQuestion,
          isMultipleFilterQuestion,
        },
        quizFirstQuestion,
        quizResults: undefined,
        selectedOptionsWithAttributes: undefined,
        matchedOptions: undefined,
      };
    }
    case QuizAPIActionTypes.SET_QUIZ_RESULTS: {
      const selectedOptionsWithAttributes =
        action.payload?.quizResults.quiz_selected_options
          .filter((option) => option.has_attribute)
          .map((option) => option.value) || [];
      const matchedOptions =
        action.payload?.quizResults.quiz_selected_options
          .filter((option) => option.is_matched && option.has_attribute)
          .map((option) => option.value) || [];

      return {
        ...state,
        quizRequestState: RequestStates.Success,
        quizResults: action.payload?.quizResults,
        quizCurrentQuestion: undefined,
        selectedOptionsWithAttributes,
        matchedOptions,
      };
    }
    case QuizAPIActionTypes.SET_QUIZ_SHARED_RESULTS: {
      return {
        ...state,
        quizRequestState: RequestStates.Success,
        quizResults: action.payload?.quizResults,
        quizCurrentQuestion: undefined,
        selectedOptionsWithAttributes: action.payload?.quizResults.attributes,
      };
    }
    case QuizAPIActionTypes.SET_QUIZ_RESULTS_CONFIG: {
      return {
        ...state,
        resultsConfig: action.payload?.quizResultsConfig.results_config,
      };
    }

    case QuizAPIActionTypes.SET_QUIZ_RESULTS_CONFIG_ERROR: {
      return {
        ...state,
        resultsConfig: null,
      };
    }

    case QuizAPIActionTypes.RESET_QUIZ:
      return { ...initialState };
    default:
      return state;
  }
}
