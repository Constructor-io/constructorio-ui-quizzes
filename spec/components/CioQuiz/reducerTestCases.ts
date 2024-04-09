import { QuizAPIActionTypes, QuestionTypes } from '../../../src/components/CioQuiz/actions';
import { initialState as apiInitialState } from '../../../src/components/CioQuiz/quizApiReducer';
import { initialState as localInitialState } from '../../../src/components/CioQuiz/quizLocalReducer';

import * as factories from '../../__tests__/factories';

const question = factories.selectQuestion.build({
  options: factories.selectOption.buildList(4),
});
const results = factories.quizResults.build();

export const apiReducerCases = [
  {
    initialState: apiInitialState,
    action: { type: QuizAPIActionTypes.SET_IS_LOADING },
    expectedState: {
      quizRequestState: 'LOADING',
      quizCurrentQuestion: undefined,
      quizResults: undefined,
    },
  },
  {
    initialState: apiInitialState,
    action: { type: QuizAPIActionTypes.SET_IS_ERROR },
    expectedState: {
      quizRequestState: 'ERROR',
      quizCurrentQuestion: undefined,
      quizResults: undefined,
      selectedOptionsWithAttributes: undefined,
      matchedOptions: undefined,
    },
  },
  {
    initialState: apiInitialState,
    action: {
      type: QuizAPIActionTypes.SET_CURRENT_QUESTION,
      payload: {
        quizCurrentQuestion: {
          next_question: question,
        },
      },
    },
    expectedState: {
      quizRequestState: 'SUCCESS',
      quizFirstQuestion: { next_question: question },
      quizCurrentQuestion: {
        next_question: question,
        isFirstQuestion: true,
        isOpenQuestion: false,
        isCoverQuestion: false,
        isSingleQuestion: true,
        isMultipleQuestion: false,
        isSelectQuestion: true,
      },
    },
  },
  {
    initialState: apiInitialState,
    action: {
      type: QuizAPIActionTypes.SET_QUIZ_RESULTS,
      payload: {
        quizResults: {
          ...results,
          quiz_selected_options: [
            { ...question.options[0], has_attribute: false, is_matched: true },
            { ...question.options[3], has_attribute: true, is_matched: false },
          ],
        },
      },
    },
    expectedState: {
      ...apiInitialState,
      quizRequestState: 'SUCCESS',
      quizResults: {
        ...results,
        quiz_selected_options: [
          {
            attribute: null,
            has_attribute: false,
            id: 1,
            is_matched: true,
            value: 'VALUE',
          },
          {
            attribute: null,
            has_attribute: true,
            id: 4,
            is_matched: false,
            value: 'VALUE',
          },
        ],
      },
      quizCurrentQuestion: undefined,
      selectedOptionsWithAttributes: ['VALUE'],
      matchedOptions: [],
    },
  },
  {
    initialState: apiInitialState,
    action: { type: 'unknown' },
    expectedState: apiInitialState,
  },
  {
    initialState: apiInitialState,
    action: {
      type: QuizAPIActionTypes.SET_QUIZ_SHARED_RESULTS,
      payload: {
        quizResults: results,
      },
    },
    expectedState: {
      ...apiInitialState,
      quizRequestState: 'SUCCESS',
      quizResults: results,
      quizCurrentQuestion: undefined,
    },
  },
  {
    initialState: apiInitialState,
    action: {
      type: QuizAPIActionTypes.SET_QUIZ_RESULTS_CONFIG,
      payload: {
        quizResultsConfig: { results_config: factories.quizResultsConfig.build() },
      },
    },
    expectedState: {
      ...apiInitialState,
      resultsConfig: factories.quizResultsConfig.build(),
    },
  },
  {
    initialState: apiInitialState,
    action: {
      type: QuizAPIActionTypes.SET_QUIZ_RESULTS_CONFIG_ERROR,
    },
    expectedState: {
      ...apiInitialState,
      resultsConfig: null,
    },
  },
  {
    initialState: {
      quizRequestState: 'SUCCESS',
      quizFirstQuestion: { next_question: question },
      quizCurrentQuestion: {
        next_question: question,
        isFirstQuestion: true,
        isOpenQuestion: false,
        isCoverQuestion: false,
        isSingleQuestion: true,
        isMultipleQuestion: false,
        isSelectQuestion: true,
      },
    },
    action: {
      type: QuizAPIActionTypes.RESET_QUIZ,
    },
    expectedState: apiInitialState,
  },
];

export const localReducerCases = [
  {
    action: {
      type: QuestionTypes.OpenText,
      payload: {
        questionId: '1',
        input: 'input',
      },
    },
    initialState: localInitialState,
    output: {
      ...localInitialState,
      isQuizCompleted: false,
      answerInputs: {
        '1': {
          type: QuestionTypes.OpenText,
          value: 'input',
        },
      },
    },
  },
  {
    action: {
      type: QuestionTypes.Cover,
      payload: {
        questionId: '1',
        input: 'input',
      },
    },
    initialState: localInitialState,
    output: {
      ...localInitialState,
      isQuizCompleted: false,
      answerInputs: {
        '1': {
          type: QuestionTypes.Cover,
          value: 'input',
        },
      },
    },
  },
  {
    action: {
      type: QuestionTypes.SingleSelect,
      payload: {
        questionId: '1',
        input: 'input',
      },
    },
    initialState: localInitialState,
    output: {
      ...localInitialState,
      isQuizCompleted: false,
      answerInputs: {
        '1': {
          type: QuestionTypes.SingleSelect,
          value: 'input',
        },
      },
    },
  },
  {
    action: {
      type: QuestionTypes.MultipleSelect,
      payload: {
        questionId: '1',
        input: 'input',
      },
    },
    initialState: localInitialState,
    output: {
      ...localInitialState,
      isQuizCompleted: false,
      answerInputs: {
        '1': {
          type: QuestionTypes.MultipleSelect,
          value: 'input',
        },
      },
    },
  },
  {
    initialState: {
      ...localInitialState,
      answerInputs: {
        '1': {
          type: QuestionTypes.OpenText,
          value: 'true',
        },
      },
    },
    action: {
      type: QuestionTypes.Next,
      payload: {
        isFirstQuestion: false,
        isOpenQuestion: true,
        isCoverQuestion: false,
        isSingleQuestion: false,
        isMultipleQuestion: false,
        isSelectQuestion: false,
      },
    },
    output: {
      ...localInitialState,
      isQuizCompleted: false,
      answers: [['true']],
      answerInputs: {
        '1': {
          type: QuestionTypes.OpenText,
          value: 'true',
        },
      },
      prevAnswerInputs: {
        '1': {
          type: 'open',
          value: 'true',
        },
      },
    },
  },
  {
    initialState: {
      ...localInitialState,
      answerInputs: {
        '1': {
          type: QuestionTypes.Cover,
          value: 'seen',
        },
      },
    },
    action: {
      type: QuestionTypes.Next,
      payload: {
        isFirstQuestion: false,
        isOpenQuestion: true,
        isCoverQuestion: false,
        isSingleQuestion: false,
        isMultipleQuestion: false,
        isSelectQuestion: false,
      },
    },
    output: {
      ...localInitialState,
      isQuizCompleted: false,
      answers: [['seen']],
      answerInputs: {
        '1': {
          type: QuestionTypes.Cover,
          value: 'seen',
        },
      },
      prevAnswerInputs: {
        '1': {
          type: 'cover',
          value: 'seen',
        },
      },
    },
  },
  {
    initialState: {
      ...localInitialState,
      answerInputs: {
        '1': {
          type: QuestionTypes.SingleSelect,
          value: [{ id: 1 }],
        },
      },
    },
    action: {
      type: QuestionTypes.Next,
      payload: {
        next_question: factories.selectQuestion.build({
          options: [
            factories.selectOption.build({ id: 1 }),
            factories.selectOption.build({ id: 2 }),
          ],
        }),
        isFirstQuestion: false,
        isOpenQuestion: true,
        isCoverQuestion: false,
        isSingleQuestion: false,
        isMultipleQuestion: false,
        isSelectQuestion: false,
      },
    },
    output: {
      ...localInitialState,
      isQuizCompleted: false,
      answers: [[1]],
      answerInputs: {
        '1': {
          type: QuestionTypes.SingleSelect,
          value: [{ id: 1 }],
        },
      },
      prevAnswerInputs: {
        '1': {
          type: 'single',
          value: [{ id: 1 }],
        },
      },
    },
  },
  {
    initialState: {
      ...localInitialState,
      answerInputs: {
        '1': {
          type: QuestionTypes.MultipleSelect,
          value: [{ id: 1 }, { id: 2 }],
        },
      },
    },
    action: {
      type: QuestionTypes.Next,
      payload: {
        next_question: factories.selectQuestion.build({
          type: QuestionTypes.MultipleSelect,
          options: [
            factories.selectOption.build({ id: 1 }),
            factories.selectOption.build({ id: 2 }),
          ],
        }),
        isFirstQuestion: false,
        isOpenQuestion: true,
        isCoverQuestion: false,
        isSingleQuestion: false,
        isMultipleQuestion: false,
        isSelectQuestion: false,
      },
    },
    output: {
      ...localInitialState,
      isQuizCompleted: false,
      answers: [[1, 2]],
      answerInputs: {
        '1': {
          type: QuestionTypes.MultipleSelect,
          value: [{ id: 1 }, { id: 2 }],
        },
      },
      prevAnswerInputs: {
        '1': {
          type: 'multiple',
          value: [{ id: 1 }, { id: 2 }],
        },
      },
    },
  },
  {
    initialState: {
      ...localInitialState,
      answerInputs: {
        '1': {
          type: 'unknown',
          value: [{ id: 1 }],
        },
      },
    },
    action: {
      type: QuestionTypes.Next,
      payload: {
        isFirstQuestion: false,
        isOpenQuestion: true,
        isCoverQuestion: false,
        isSingleQuestion: false,
        isMultipleQuestion: false,
        isSelectQuestion: false,
      },
    },
    output: {
      ...localInitialState,
      isQuizCompleted: false,
      answers: [[]],
      answerInputs: {
        '1': {
          type: 'unknown',
          value: [{ id: 1 }],
        },
      },
      prevAnswerInputs: {
        '1': {
          type: 'unknown',
          value: [{ id: 1 }],
        },
      },
    },
  },
  {
    initialState: localInitialState,
    action: {
      type: QuestionTypes.Complete,
      payload: {
        quizVersionId: 'quizVersionId',
        quizSessionId: 'quizSessionId',
      },
    },
    output: {
      ...localInitialState,
      isQuizCompleted: true,
    },
  },
  {
    initialState: localInitialState,
    action: {
      type: QuestionTypes.Reset,
    },
    output: localInitialState,
  },
  {
    initialState: localInitialState,
    action: {
      type: 'unknown',
    },
    output: localInitialState,
  },
  {
    initialState: {
      ...localInitialState,
      answerInputs: {
        '1': {
          type: QuestionTypes.SingleSelect,
          value: [],
        },
      },
    },
    action: {
      type: QuestionTypes.Skip,
      payload: {
        next_question: factories.selectQuestion.build({
          options: [
            factories.selectOption.build({ id: 1 }),
            factories.selectOption.build({ id: 2 }),
          ],
        }),
        isFirstQuestion: false,
        isOpenQuestion: true,
        isCoverQuestion: false,
        isSingleQuestion: false,
        isMultipleQuestion: false,
        isSelectQuestion: false,
      },
    },
    output: {
      ...localInitialState,
      isQuizCompleted: false,
      answers: [[]],
      answerInputs: {
        '1': {
          type: QuestionTypes.SingleSelect,
          value: [],
        },
      },
      prevAnswerInputs: {
        '1': {
          type: 'single',
          value: [],
        },
      },
    },
  },
  {
    initialState: {
      ...localInitialState,
      answerInputs: {
        '1': {
          type: QuestionTypes.OpenText,
          value: [],
        },
      },
    },
    action: {
      type: QuestionTypes.Skip,
      payload: {
        next_question: factories.openQuestion.build(),
        isFirstQuestion: false,
        isOpenQuestion: true,
        isCoverQuestion: false,
        isSingleQuestion: false,
        isMultipleQuestion: false,
        isSelectQuestion: false,
      },
    },
    output: {
      ...localInitialState,
      isQuizCompleted: false,
      answers: [['false']],
      answerInputs: {
        '1': {
          type: QuestionTypes.OpenText,
          value: [],
        },
      },
      prevAnswerInputs: {
        '1': {
          type: 'open',
          value: [],
        },
      },
    },
  },
  {
    initialState: {
      ...localInitialState,
      answerInputs: {
        '1': {
          type: QuestionTypes.Cover,
          value: [],
        },
      },
    },
    action: {
      type: QuestionTypes.Skip,
      payload: {
        next_question: factories.coverQuestion.build(),
        isFirstQuestion: false,
        isOpenQuestion: false,
        isCoverQuestion: true,
        isSingleQuestion: false,
        isMultipleQuestion: false,
        isSelectQuestion: false,
      },
    },
    output: {
      ...localInitialState,
      isQuizCompleted: false,
      answers: [['seen']],
      answerInputs: {
        '1': {
          type: QuestionTypes.Cover,
          value: [],
        },
      },
      prevAnswerInputs: {
        '1': {
          type: 'cover',
          value: [],
        },
      },
    },
  },
  {
    initialState: localInitialState,
    action: {
      type: QuestionTypes.Hydrate,
      payload: {
        quizVersionId: 'quizVersionId',
        quizSessionId: 'quizSessionId',
      },
    },
    output: {
      ...localInitialState,
      quizVersionId: 'quizVersionId',
      quizSessionId: 'quizSessionId',
    },
  },
  {
    initialState: {
      ...localInitialState,
      prevAnswerInputs: {
        '1': {
          type: QuestionTypes.OpenText,
          value: [],
        },
      },
      answerInputs: {
        '1': {
          type: QuestionTypes.OpenText,
          value: [],
        },
        '2': {
          type: QuestionTypes.SingleSelect,
          value: [],
        },
      },
      answers: [['false']],
    },
    action: {
      type: QuestionTypes.Back,
      payload: {
        next_question: factories.selectQuestion.build(),
        isFirstQuestion: false,
        isOpenQuestion: true,
        isCoverQuestion: false,
        isSingleQuestion: false,
        isMultipleQuestion: false,
        isSelectQuestion: false,
      },
    },
    output: {
      ...localInitialState,
      isQuizCompleted: false,
      answers: [],
      answerInputs: {
        '1': {
          type: QuestionTypes.OpenText,
          value: [],
        },
      },
      prevAnswerInputs: {
        '1': {
          type: 'open',
          value: [],
        },
      },
    },
  },
];
