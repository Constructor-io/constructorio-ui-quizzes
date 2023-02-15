import {
  ActionAnswerQuestion,
  QuestionTypes,
  OpenTextQuestionPayload,
  SelectQuestionPayload,
  ActionAnswerInputQuestion,
} from './actions';

export type Answers = string[][];
export type QuizReducerState = {
  answers: Answers;
  answerInputs: {};
  isLastAnswer: boolean;
};
export type AnswerInputState = {
  [key: string]: OpenTextQuestionPayload | SelectQuestionPayload;
};

export const initialState: QuizReducerState = {
  answers: [],
  answerInputs: {},
  isLastAnswer: false,
};

function answerInputReducer(state: AnswerInputState, action: ActionAnswerInputQuestion) {
  return {
    ...state,
    [String(action.payload!.questionId)]: action.payload!.input,
  };
}

export default function reducer(state: QuizReducerState, action: ActionAnswerQuestion) {
  switch (action.type) {
    case QuestionTypes.OpenText:
      return {
        ...state,
        answers: [...state.answers, ['true']],
        answerInputs: answerInputReducer(state.answerInputs, action),
        isLastAnswer: !!action.payload?.isLastQuestion,
      };
    case QuestionTypes.Cover:
      return {
        ...state,
        answers: [...state.answers, ['seen']],
        isLastAnswer: !!action.payload?.isLastQuestion,
      };
    case QuestionTypes.SingleSelect:
      return {
        ...state,
        answers: [...state.answers, action.payload?.input!],
        answerInputs: answerInputReducer(state.answerInputs, action),
        isLastAnswer: !!action.payload?.isLastQuestion,
      };
    case QuestionTypes.MultipleSelect:
      return {
        ...state,
        answers: [...state.answers, action.payload?.input!],
        answerInputs: answerInputReducer(state.answerInputs, action),
        isLastAnswer: !!action.payload?.isLastQuestion,
      };
    case QuestionTypes.Back:
      return {
        ...state,
        answers: [...state.answers.slice(0, -1)],
        isLastAnswer: false,
      };
    case QuestionTypes.Reset:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
