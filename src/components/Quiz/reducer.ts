import { ActionAnswerQuestion, QuestionTypes } from './actions';

export type Answers = string[][];
export type QuizReducerState = { answers: Answers };

export default function reducer(
  state: QuizReducerState,
  action: ActionAnswerQuestion,
) {
  switch (action.type) {
    case QuestionTypes.OpenText:
      return { answers: [...state.answers, ['true']] };
    case QuestionTypes.Cover:
      return { answers: [...state.answers, ['seen']] };
    case QuestionTypes.SingleSelect:
    case QuestionTypes.MultipleSelect:
      return { answers: [...state.answers, action.payload!] };
    default:
      return { answers: [] };
  }
}
