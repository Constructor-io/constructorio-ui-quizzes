/* eslint-disable no-restricted-syntax */
import { AnswerInputState } from '../../types';
import { ActionAnswerQuestion, QuestionTypes, ActionAnswerInputQuestion } from './actions';

export type Answers = string[][];
export type QuizLocalReducerState = {
  answers: Answers;
  answerInputs: AnswerInputState;
  isLastAnswer: boolean;
  quizVersionId?: string;
  quizSessionId?: string;
};

export const initialState: QuizLocalReducerState = {
  answers: [],
  answerInputs: {},
  isLastAnswer: false,
};

function answerInputReducer(state: AnswerInputState, action: ActionAnswerInputQuestion) {
  return {
    ...state,
    [String(action.payload!.questionId)]: {
      type: action.type,
      value: action.payload!.input,
      ignore: false,
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
      };
    case QuestionTypes.Cover:
      return {
        ...state,
        answerInputs: answerInputReducer(state.answerInputs, action),
        isLastAnswer: !!action.payload?.isLastQuestion,
      };
    case QuestionTypes.SingleSelect:
      return {
        ...state,
        answerInputs: answerInputReducer(state.answerInputs, action),
        isLastAnswer: !!action.payload?.isLastQuestion,
      };
    case QuestionTypes.MultipleSelect:
      return {
        ...state,
        answerInputs: answerInputReducer(state.answerInputs, action),
        isLastAnswer: !!action.payload?.isLastQuestion,
      };
    case QuestionTypes.Next: {
      const answers: string[][] = [];
      for (const input of Object.values(state.answerInputs)) {
        if (!input.ignore) {
          switch (input.type) {
            case QuestionTypes.OpenText:
              answers.push(['true']);
              break;
            case QuestionTypes.Cover:
              answers.push(['seen']);
              break;
            case QuestionTypes.SingleSelect:
              answers.push(input.value as string[]);
              break;
            case QuestionTypes.MultipleSelect:
              answers.push(input.value as string[]);
              break;
            default:
              answers.push([]);
          }
        }
      }

      return {
        ...state,
        answers,
        isLastAnswer: false,
      };
    }

    case QuestionTypes.Back: {
      const questionToDeleteId = action.payload?.next_question.id!;
      const newAnswerInputs = { ...state.answerInputs };
      newAnswerInputs[questionToDeleteId].ignore = true;
      return {
        ...state,
        answerInputs: { ...newAnswerInputs },
        answers: [...state.answers.slice(0, -1)],
        isLastAnswer: false,
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
    default:
      return state;
  }
}
