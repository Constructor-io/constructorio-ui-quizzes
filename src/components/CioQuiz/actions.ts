// eslint-disable-next-line import/no-cycle
import {
  CurrentQuestion,
  NextQuestionResponse,
  QuestionOption,
  QuizResultsResponse,
  QuizSharedResultsData,
  QuizResultsConfigResponse,
} from '../../types';
import type { QuizLocalReducerState } from './quizLocalReducer';

// Local Actions
export enum QuestionTypes {
  OpenText = 'open',
  Cover = 'cover',
  SingleSelect = 'single',
  MultipleSelect = 'multiple',
  SingleFilterValue = 'single_filter_value',
  MultipleFilterValues = 'multiple_filter_values',
  Next = 'next',
  Skip = 'skip',
  Back = 'back',
  Reset = 'reset',
  Hydrate = 'hydrate',
  Complete = 'complete',
}

export interface QuestionAnswer<Value> {
  questionId: number;
  input: Value;
}

export type SelectQuestionPayload = QuestionAnswer<Omit<QuestionOption, 'attribute' | 'images'>[]>;
export type OpenTextQuestionPayload = QuestionAnswer<string>;
export type CoverQuestionPayload = QuestionAnswer<string>;

interface Action<Type, Payload = {}> {
  type: Type;
  payload?: Payload;
}

export type ActionAnswerInputQuestion =
  | Action<QuestionTypes.OpenText, OpenTextQuestionPayload>
  | Action<QuestionTypes.SingleSelect, SelectQuestionPayload>
  | Action<QuestionTypes.MultipleSelect, SelectQuestionPayload>
  | Action<QuestionTypes.SingleFilterValue, SelectQuestionPayload>
  | Action<QuestionTypes.MultipleFilterValues, SelectQuestionPayload>
  | Action<QuestionTypes.Cover, CoverQuestionPayload>;

export type ActionAnswerQuestion =
  | ActionAnswerInputQuestion
  | Action<QuestionTypes.Next, CurrentQuestion>
  | Action<QuestionTypes.Skip, CurrentQuestion>
  | Action<QuestionTypes.Back, CurrentQuestion>
  | Action<QuestionTypes.Reset>
  | Action<QuestionTypes.Complete>
  | Action<QuestionTypes.Hydrate, Partial<QuizLocalReducerState>>;

// API actions
export enum QuizAPIActionTypes {
  SET_IS_LOADING,
  SET_IS_ERROR,
  SET_QUIZ_RESULTS,
  SET_CURRENT_QUESTION,
  RESET_QUIZ,
  SET_QUIZ_SHARED_RESULTS,
  SET_QUIZ_RESULTS_CONFIG,
  SET_QUIZ_RESULTS_CONFIG_ERROR,
}

export type ActionSetIsLoading = Action<QuizAPIActionTypes.SET_IS_LOADING>;
export type ActionSetIsError = Action<QuizAPIActionTypes.SET_IS_ERROR>;

export type ActionSetQuizResults = Action<
  QuizAPIActionTypes.SET_QUIZ_RESULTS,
  { quizResults: QuizResultsResponse }
>;
export type ActionSetQuizSharedResults = Action<
  QuizAPIActionTypes.SET_QUIZ_SHARED_RESULTS,
  {
    quizResults: QuizSharedResultsData;
  }
>;
export type ActionSetCurrentQuestion = Action<
  QuizAPIActionTypes.SET_CURRENT_QUESTION,
  { quizCurrentQuestion: NextQuestionResponse; quizSessionId?: string; quizVersionId?: string }
>;

export type ActionResetQuiz = Action<QuizAPIActionTypes.RESET_QUIZ>;
export type ActionSetQuizResultsConfig =
  | Action<
      QuizAPIActionTypes.SET_QUIZ_RESULTS_CONFIG,
      { quizResultsConfig: QuizResultsConfigResponse }
    >
  | Action<QuizAPIActionTypes.SET_QUIZ_RESULTS_CONFIG_ERROR>;
export type ActionQuizAPI =
  | ActionSetIsLoading
  | ActionSetIsError
  | ActionSetQuizResults
  | ActionSetCurrentQuestion
  | ActionResetQuiz
  | ActionSetQuizSharedResults
  | ActionSetQuizResultsConfig;
