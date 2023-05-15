import { NextQuestionResponse, QuizResultsResponse } from '../../types';
import type { QuizLocalReducerState } from './quizLocalReducer';

// Local Actions
export enum QuestionTypes {
  OpenText = 'open',
  Cover = 'cover',
  SingleSelect = 'single',
  MultipleSelect = 'multiple',
  Back = 'back',
  Reset = 'reset',
  Hydrate = 'hydrate',
  UpdateClientAndSession = 'updateClientAndSession',
}

export interface QuestionAnswer<Value> {
  questionId: number;
  input: Value;
  isLastQuestion?: boolean;
}

export type SelectQuestionPayload = QuestionAnswer<string[]>;
export type OpenTextQuestionPayload = QuestionAnswer<string>;
export type CoverQuestionPayload = { isLastQuestion?: boolean };
export type UpdateClientAndSessionPayload = { quizVersionId?: string; quizSessionId?: string };

interface Action<Type, Payload = {}> {
  type: Type;
  payload?: Payload;
}

export type ActionAnswerInputQuestion =
  | Action<QuestionTypes.OpenText, OpenTextQuestionPayload>
  | Action<QuestionTypes.SingleSelect, SelectQuestionPayload>
  | Action<QuestionTypes.MultipleSelect, SelectQuestionPayload>;

export type ActionAnswerQuestion =
  | ActionAnswerInputQuestion
  | Action<QuestionTypes.Cover, CoverQuestionPayload>
  | Action<QuestionTypes.Back>
  | Action<QuestionTypes.Reset>
  | Action<QuestionTypes.Hydrate, QuizLocalReducerState>
  | Action<QuestionTypes.UpdateClientAndSession, UpdateClientAndSessionPayload>;

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
