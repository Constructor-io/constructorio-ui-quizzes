// eslint-disable-next-line import/no-cycle
import {
  CurrentQuestion,
  NextQuestionResponse,
  QuestionOption,
  QuizResultsResponse,
} from '../../types';
import type { QuizLocalReducerState } from './quizLocalReducer';

// Local Actions
export enum QuestionTypes {
  OpenText = 'open',
  Cover = 'cover',
  SingleSelect = 'single',
  MultipleSelect = 'multiple',
  Next = 'next',
  Back = 'back',
  Reset = 'reset',
  Hydrate = 'hydrate',
  Complete = 'complete',
}

export interface QuestionAnswer<Value> {
  questionId: number;
  input: Value;
  isLastQuestion?: boolean;
}

export type SelectQuestionPayload = QuestionAnswer<Partial<QuestionOption>[]>;
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
  | Action<QuestionTypes.Cover, CoverQuestionPayload>;

export type ActionAnswerQuestion =
  | ActionAnswerInputQuestion
  | Action<QuestionTypes.Next, CurrentQuestion>
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
}

export type ActionSetIsLoading = Action<QuizAPIActionTypes.SET_IS_LOADING>;
export type ActionSetIsError = Action<QuizAPIActionTypes.SET_IS_ERROR>;

export type ActionSetQuizResults = Action<
  QuizAPIActionTypes.SET_QUIZ_RESULTS,
  { quizResults: QuizResultsResponse }
>;
export type ActionSetCurrentQuestion = Action<
  QuizAPIActionTypes.SET_CURRENT_QUESTION,
  { quizCurrentQuestion: NextQuestionResponse; quizSessionId?: string; quizVersionId?: string }
>;

export type ActionResetQuiz = Action<QuizAPIActionTypes.RESET_QUIZ>;

export type ActionQuizAPI =
  | ActionSetIsLoading
  | ActionSetIsError
  | ActionSetQuizResults
  | ActionSetCurrentQuestion
  | ActionResetQuiz;
