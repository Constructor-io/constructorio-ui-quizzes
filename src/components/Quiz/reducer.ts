import {
  ActionAnswerQuestion,
  OpenTextQuestionPayload,
  QuestionTypes,
  SelectQuestionPayload
} from './actions';

export type Answers = string[][];
export type QuizReducerState = {
  answers: Answers;
  openTextInputs: OpenTextQuestionPayload[];
  singleSelectInputs: SelectQuestionPayload[];
  multipleSelectInputs: SelectQuestionPayload[];
};

export const initialState: QuizReducerState = {
  answers: [],
  openTextInputs: [],
  singleSelectInputs: [],
  multipleSelectInputs: []
};

export default function reducer(state: QuizReducerState, action: ActionAnswerQuestion) {
  switch (action.type) {
    case QuestionTypes.OpenText:
      return {
        ...state,
        answers: [...state.answers, ['true']],
        openTextInputs: [...state.openTextInputs, action.payload!]
      };
    case QuestionTypes.Cover:
      return {
        ...state,
        answers: [...state.answers, ['seen']]
      };
    case QuestionTypes.SingleSelect:
      return {
        ...state,
        answers: [...state.answers, action.payload?.input!],
        singleSelectInputs: [...state.singleSelectInputs, action.payload!]
      };
    case QuestionTypes.MultipleSelect:
      return {
        ...state,
        answers: [...state.answers, action.payload?.input!],
        multipleSelectInputs: [...state.multipleSelectInputs, action.payload!]
      };
    default:
      return state;
  }
}
