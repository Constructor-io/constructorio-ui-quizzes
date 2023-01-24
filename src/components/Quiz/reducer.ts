import {
  ActionAnswerQuestion,
  QuestionTypes,
  CoverQuestionPayload,
  OpenTextQuestionPayload,
  SelectQuestionPayload,
  ActionAnswerInputQuestion,
} from './actions';

export type Answers = string[][];
export type QuizReducerState = {
  answers: Answers;
  answerInputs: {};
};
export type AnswerInputState = {
  [key: string]: CoverQuestionPayload | OpenTextQuestionPayload | SelectQuestionPayload;
}

export const initialState: QuizReducerState = {
  answers: [],
  answerInputs: {},
};

function answerInputReducer(state: AnswerInputState, action: ActionAnswerInputQuestion) {
  return {
    ...state,
    ...{ [String(action.payload!.questionId)]: action.payload!.input },
  };
}

export default function reducer(state: QuizReducerState, action: ActionAnswerQuestion) {
  switch (action.type) {
    case QuestionTypes.OpenText:
      return {
        ...state,
        answers: [...state.answers, ['true']],
        answerInputs: answerInputReducer(state.answerInputs, action)
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
        answerInputs: answerInputReducer(state.answerInputs, action)
      };
    case QuestionTypes.MultipleSelect:
      return {
        ...state,
        answers: [...state.answers, action.payload?.input!],
        answerInputs: answerInputReducer(state.answerInputs, action)
      };
    case QuestionTypes.Back:
      return {
        ...state,
        answers: action.payload ? [...state.answers.slice(0, -1)] : [...state.answers]
      };
    case QuestionTypes.Reset:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
