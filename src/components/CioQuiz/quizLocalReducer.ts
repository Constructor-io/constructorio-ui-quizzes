import {
  ActionAnswerQuestion,
  QuestionTypes,
  OpenTextQuestionPayload,
  SelectQuestionPayload,
  ActionAnswerInputQuestion,
} from './actions';

export type Answers = string[][];
export type QuizLocalReducerState = {
  answers: Answers;
  answerInputs: {};
  isLastAnswer: boolean;
  quizVersionId?: string;
  quizSessionId?: string;
};
export type AnswerInputState = {
  [key: string]: OpenTextQuestionPayload | SelectQuestionPayload;
};

export const initialState: QuizLocalReducerState = {
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

export default function quizLocalReducer(
  state: QuizLocalReducerState,
  action: ActionAnswerQuestion
) {
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
    case QuestionTypes.Hydrate:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
