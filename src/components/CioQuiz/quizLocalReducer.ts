import { AnswerInputState } from '../../types';
import { ActionAnswerQuestion, QuestionTypes, ActionAnswerInputQuestion } from './actions';

export type Answers = string[][];
export type QuizLocalReducerState = {
  answers: Answers;
  answerInputs: AnswerInputState;
  isLastAnswer: boolean;
  isQuizCompleted: boolean;
  quizVersionId?: string;
  quizSessionId?: string;
};

export const initialState: QuizLocalReducerState = {
  answers: [],
  answerInputs: {},
  isLastAnswer: false,
  isQuizCompleted: false,
};

function answerInputReducer(state: AnswerInputState, action: ActionAnswerInputQuestion) {
  return {
    ...state,
    [String(action.payload!.questionId)]: {
      type: action.type,
      value: action.payload!.input,
    },
  };
}

export default function quizLocalReducer(
  state: QuizLocalReducerState,
  action: ActionAnswerQuestion
): QuizLocalReducerState {
  switch (action.type) {
    case QuestionTypes.OpenText:
      return {
        ...state,
        answerInputs: answerInputReducer(state.answerInputs, action),
        isLastAnswer: !!action.payload?.isLastQuestion,
        isQuizCompleted: false,
      };
    case QuestionTypes.Cover:
      return {
        ...state,
        answerInputs: answerInputReducer(state.answerInputs, action),
        isLastAnswer: !!action.payload?.isLastQuestion,
        isQuizCompleted: false,
      };
    case QuestionTypes.SingleSelect:
      return {
        ...state,
        answerInputs: answerInputReducer(state.answerInputs, action),
        isLastAnswer: !!action.payload?.isLastQuestion,
        isQuizCompleted: false,
      };
    case QuestionTypes.MultipleSelect:
      return {
        ...state,
        answerInputs: answerInputReducer(state.answerInputs, action),
        isLastAnswer: !!action.payload?.isLastQuestion,
        isQuizCompleted: false,
      };
    case QuestionTypes.Next: {
      const { answers } = state;
      const newAnswers = [...answers];
      const lastAnswerInputIndex = answers.length;
      const currentAnswerInput = Object.values(state.answerInputs)?.[lastAnswerInputIndex];
      switch (currentAnswerInput.type) {
        case QuestionTypes.OpenText:
          newAnswers.push(['true']);
          break;
        case QuestionTypes.Cover:
          newAnswers.push(['seen']);
          break;
        case QuestionTypes.SingleSelect:
          newAnswers.push(currentAnswerInput.value as string[]);
          break;
        case QuestionTypes.MultipleSelect:
          newAnswers.push(currentAnswerInput.value as string[]);
          break;
        default:
          newAnswers.push([]);
      }
      return {
        ...state,
        answers: newAnswers,
        isQuizCompleted: false,
      };
    }

    case QuestionTypes.Back: {
      const newAnswerInputs = { ...state.answerInputs };
      return {
        ...state,
        answerInputs: newAnswerInputs,
        answers: [...state.answers.slice(0, -1)],
        isLastAnswer: false,
        isQuizCompleted: false,
      };
    }

    case QuestionTypes.Reset:
      return {
        ...initialState,
      };
    case QuestionTypes.Hydrate:
      return {
        ...state,
        ...action.payload,
      };
    case QuestionTypes.Complete:
      return {
        ...state,
        isQuizCompleted: true,
      };
    default:
      return state;
  }
}
