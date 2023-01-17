import { ActionAnswerQuestion, OpenTextQuestionState, QuestionTypes, SelectQuestionState } from './actions';

export type Answers = string[][];
export type QuizReducerState = {
  answers: Answers,
  openTextInputs: OpenTextQuestionState,
  singleSelectInputs: SelectQuestionState,
  multipleSelectInputs: SelectQuestionState,
};

export const initialState: QuizReducerState = {
  answers: [],
  openTextInputs: {},
  singleSelectInputs: {},
  multipleSelectInputs: {},
}

export default function reducer(
  state: QuizReducerState,
  action: ActionAnswerQuestion,
) {
  switch (action.type) {
    case QuestionTypes.OpenText:
      return {
        ...state,
        answers: [...state.answers, ['true']],
        openTextInputs: { ...state.openTextInputs, ...{ [String(action.payload!.questionId)]: action.payload!.input } }
      };
    case QuestionTypes.Cover:
      return {
        ...state,
        answers: [...state.answers, ['seen']],
      };
    case QuestionTypes.SingleSelect:
      return {
        ...state,
        answers: [...state.answers, action.payload?.input!],
        singleSelectInputs: { ...state.singleSelectInputs, ...{ [String(action.payload!.questionId)]: action.payload!.input } }
      };
    case QuestionTypes.MultipleSelect:
      return {
        ...state,
        answers: [...state.answers, action.payload?.input!],
        multipleSelectInputs: { ...state.multipleSelectInputs, ...{ [String(action.payload!.questionId)]: action.payload!.input } }
      };
    case QuestionTypes.Back:
      return {
        ...state,
        answers: action.payload ? [...state.answers.slice(0, -1)] : [...state.answers]
      };
    case QuestionTypes.Reset:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
