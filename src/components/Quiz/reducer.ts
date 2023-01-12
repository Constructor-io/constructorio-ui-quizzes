import { ActionAnswerQuestion, QuestionTypes } from './actions';

export type Answers = string[][];
export type QuizReducerState = { 
  answers: Answers, 
  openTextInput: string, 
  singleSelectInput: string[]
  multipleSelectInput: string[], 
};

export const initialState: QuizReducerState  = {
  answers: [],
  openTextInput: '',
  singleSelectInput: [],
  multipleSelectInput: [],
}

export default function reducer(
  state: QuizReducerState,
  action: ActionAnswerQuestion,
) {
  switch (action.type) {
    case QuestionTypes.OpenText:
      return {  ...state, answers: [...state.answers, ['true']], openTextInput: action.payload };
    case QuestionTypes.Cover:
      return {  ...state, answers: [...state.answers, ['seen']] };
    case QuestionTypes.SingleSelect:
      return { ...state, answers: [...state.answers, action.payload!], singleSelectInput: action.payload };
    case QuestionTypes.MultipleSelect:
      return { ...state, answers: [...state.answers, action.payload!], multipleSelectInput: action.payload };
    default:
      return state;
  }
}
