export enum QuestionTypes {
  OpenText = 'open',
  Cover = 'cover',
  SingleSelect = 'single',
  MultipleSelect = 'multiple'
}

export interface QuestionAnswer<Value> {
  questionId: number;
  input: Value;
}

export type SelectQuestionPayload = QuestionAnswer<string[]>;

export type OpenTextQuestionPayload = QuestionAnswer<string>;

interface Action<Type, Payload = {}> {
  type: Type;
  payload?: Payload;
}

export type ActionAnswerQuestion =
  | Action<QuestionTypes.Cover>
  | Action<QuestionTypes.OpenText, OpenTextQuestionPayload>
  | Action<QuestionTypes.SingleSelect, SelectQuestionPayload>
  | Action<QuestionTypes.MultipleSelect, SelectQuestionPayload>;
