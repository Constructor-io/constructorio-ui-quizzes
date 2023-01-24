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
export type OpenTextQuestionPayload = QuestionAnswer<string>;
export type CoverQuestionPayload = QuestionAnswer<string>;
export type ShowResultsPayload = string;

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
  | Action<QuestionTypes.Cover>
  | Action<QuestionTypes.Back, boolean>
  | Action<QuestionTypes.Reset>;
