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
  isLastQuestion?: boolean;
}

export type SelectQuestionPayload = QuestionAnswer<string[]>;
export type OpenTextQuestionPayload = QuestionAnswer<string>;
export type CoverQuestionPayload = { isLastQuestion?: boolean };

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
  | Action<QuestionTypes.Reset>;
