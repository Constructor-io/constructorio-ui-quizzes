/* eslint-disable complexity */
import { AnswerInputState, QuestionOption } from '../../types';
import { ActionAnswerQuestion, QuestionTypes, ActionAnswerInputQuestion } from './actions';

export type Answers = string[][];
export type QuizLocalReducerState = {
  answers: Answers;
  answerInputs: AnswerInputState;
  prevAnswerInputs: AnswerInputState;
  isQuizCompleted: boolean;
  quizVersionId?: string;
  quizSessionId?: string;
};

export const initialState: QuizLocalReducerState = {
  answers: [],
  answerInputs: {},
  prevAnswerInputs: {},
  isQuizCompleted: false,
};

function handleNextQuestion(state: QuizLocalReducerState) {
  const { answers, answerInputs } = state;
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
    case QuestionTypes.MultipleSelect:
    case QuestionTypes.SingleFilterValue:
    case QuestionTypes.MultipleFilterValues:
      newAnswers.push(
        (currentAnswerInput.value as Omit<QuestionOption, 'attribute' | 'images'>[]).map(
          (answer) => answer.id
        )
      );
      break;
    default:
      newAnswers.push([]);
  }

  return {
    ...state,
    // We now commit current answers to prevAnswerInputs
    prevAnswerInputs: answerInputs,
    answers: newAnswers,
    isQuizCompleted: false,
  };
}

const handleAnswerInput = (state: QuizLocalReducerState, action: ActionAnswerInputQuestion) => ({
  ...state,
  answerInputs: {
    ...state.answerInputs,
    [String(action.payload!.questionId)]: {
      type: action.type,
      value: action.payload!.input,
    },
  },
  isQuizCompleted: false,
});

export default function quizLocalReducer(
  state: QuizLocalReducerState,
  action: ActionAnswerQuestion
): QuizLocalReducerState {
  switch (action.type) {
    case QuestionTypes.OpenText:
    case QuestionTypes.Cover:
    case QuestionTypes.SingleSelect:
    case QuestionTypes.MultipleSelect:
    case QuestionTypes.SingleFilterValue:
    case QuestionTypes.MultipleFilterValues:
      return handleAnswerInput(state, action);
    case QuestionTypes.Next: {
      return handleNextQuestion(state);
    }
    case QuestionTypes.Skip: {
      const { answers, answerInputs } = state;
      const newAnswers = [...answers];
      const lastAnswerInputIndex = answers.length;
      const currentAnswerInput = Object.values(state.answerInputs)[lastAnswerInputIndex];
      switch (currentAnswerInput.type) {
        case QuestionTypes.OpenText:
          newAnswers.push(['false']);
          break;
        case QuestionTypes.Cover:
          newAnswers.push(['seen']);
          break;
        case QuestionTypes.SingleSelect:
        case QuestionTypes.MultipleSelect:
        case QuestionTypes.SingleFilterValue:
        case QuestionTypes.MultipleFilterValues:
        default:
          newAnswers.push([]);
      }
      return {
        ...state,
        // We now commit current answers to prevAnswerInputs
        prevAnswerInputs: answerInputs,
        answers: newAnswers,
        isQuizCompleted: false,
      };
    }

    case QuestionTypes.Back: {
      const prevAnswerInputs = { ...state.prevAnswerInputs };
      return {
        ...state,
        answerInputs: prevAnswerInputs,
        answers: [...state.answers.slice(0, -1)],
        isQuizCompleted: false,
      };
    }

    case QuestionTypes.JumpToQuestion: {
      const questionId = action.payload?.questionId;
      if (questionId === undefined) return state;
      const prevAnswerInputs = { ...state.prevAnswerInputs };

      // Remove all keys greater than questionId from answerInputs
      const filteredAnswerInputs: AnswerInputState = {};
      Object.keys(prevAnswerInputs).forEach((key) => {
        if (parseInt(key, 10) > questionId) return;
        filteredAnswerInputs[key] = prevAnswerInputs[key];
      });

      return {
        ...state,
        answerInputs: filteredAnswerInputs,
        answers: [...state.answers.slice(0, -1)],
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
