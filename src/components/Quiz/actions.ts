export enum QuestionTypes {
  OpenText = 'open',
  Cover = 'cover',
  SingleSelect = 'single',
  MultipleSelect = 'multiple',
  Back = 'back',
  Reset = 'reset'
}

export interface QuestionAnswer<Value> {
  questionId: number;
  input: Value;
}

export interface QuestionState<Value> {
  [key: string]: Value;
}

export type SelectQuestionPayload = QuestionAnswer<string[]>;
export type SelectQuestionState = QuestionState<string[]>;

export type OpenTextQuestionPayload = QuestionAnswer<string>;
export type OpenTextQuestionState = QuestionState<string>;

export type ShowResultsPayload = string;

interface Action<Type, Payload = {}> {
  type: Type;
  payload?: Payload;
}

export type ActionAnswerQuestion =
  | Action<QuestionTypes.Cover>
  | Action<QuestionTypes.OpenText, OpenTextQuestionPayload>
  | Action<QuestionTypes.SingleSelect, SelectQuestionPayload>
  | Action<QuestionTypes.MultipleSelect, SelectQuestionPayload>
  | Action<QuestionTypes.Back, boolean>
  | Action<QuestionTypes.Reset>;
