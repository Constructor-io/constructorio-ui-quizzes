import { mockConstructorIOClient } from '../__tests__/utils';

import * as utils from '../../src/utils';
import { QuestionTypes } from '../../src/components/CioQuiz/actions';

describe(`${utils.stringifyWithDefaults.name}`, () => {
  it('does not error', () => {
    const callbacks = {
      onAddToCartClick: utils.functionStrings.onAddToCartClick,
      onQuizResultClick: utils.functionStrings.onQuizResultClick,
      onQuizResultsLoaded: () => {},
    };
    expect(utils.stringifyWithDefaults({ cioJsClient: mockConstructorIOClient, callbacks })).toBe(
      `{
  "cioJsClient": cioJsClient,
  "callbacks": {
    "onAddToCartClick": "(item) => console.dir(item)",
    "onQuizResultClick": "(result, position) => console.dir(result, position)",
    "onQuizResultsLoaded": (results) => console.dir(results)
  }
}`
    );
  });
});

describe(`${utils.getQuestionTypes.name}`, () => {
  it.each([
    {
      questionType: QuestionTypes.OpenText,
      output: {
        isOpenQuestion: true,
        isCoverQuestion: false,
        isSingleQuestion: false,
        isMultipleQuestion: false,
        isSelectQuestion: false,
        isMultipleFilterQuestion: false,
        isSingleFilterQuestion: false,
      },
    },
    {
      questionType: QuestionTypes.Cover,
      output: {
        isOpenQuestion: false,
        isCoverQuestion: true,
        isSingleQuestion: false,
        isMultipleQuestion: false,
        isSelectQuestion: false,
        isMultipleFilterQuestion: false,
        isSingleFilterQuestion: false,
      },
    },
    {
      questionType: QuestionTypes.SingleSelect,
      output: {
        isOpenQuestion: false,
        isCoverQuestion: false,
        isSingleQuestion: true,
        isMultipleQuestion: false,
        isSelectQuestion: true,
        isMultipleFilterQuestion: false,
        isSingleFilterQuestion: false,
      },
    },
    {
      questionType: QuestionTypes.MultipleSelect,
      output: {
        isOpenQuestion: false,
        isCoverQuestion: false,
        isSingleQuestion: false,
        isMultipleQuestion: true,
        isSelectQuestion: true,
        isMultipleFilterQuestion: false,
        isSingleFilterQuestion: false,
      },
    },
    {
      questionType: QuestionTypes.SingleFilterValue,
      output: {
        isOpenQuestion: false,
        isCoverQuestion: false,
        isSingleQuestion: false,
        isMultipleQuestion: false,
        isSelectQuestion: true,
        isMultipleFilterQuestion: false,
        isSingleFilterQuestion: true,
      },
    },
    {
      questionType: QuestionTypes.MultipleFilterValues,
      output: {
        isOpenQuestion: false,
        isCoverQuestion: false,
        isSingleQuestion: false,
        isMultipleQuestion: false,
        isSelectQuestion: true,
        isMultipleFilterQuestion: true,
        isSingleFilterQuestion: false,
      },
    },
    {
      questionType: QuestionTypes.Complete,
      output: {
        isOpenQuestion: false,
        isCoverQuestion: false,
        isSingleQuestion: false,
        isMultipleQuestion: false,
        isSelectQuestion: false,
        isMultipleFilterQuestion: false,
        isSingleFilterQuestion: false,
      },
    },
  ])('returns data for $questionType', ({ questionType, output }) => {
    expect(utils.getQuestionTypes(questionType as QuestionTypes)).toEqual(output);
  });
});

describe(`${utils.getPreferredColorScheme.name}`, () => {
  it('returns light if prefers-color-scheme is light', () => {
    expect(utils.getPreferredColorScheme()).toBe('light');
  });
});

describe(`${utils.isFunction.name}`, () => {
  it.each([
    {
      fn: () => {},
      output: true,
    },
    {
      fn: 'string',
      output: false,
    },
    {
      fn: undefined,
      output: false,
    },
  ])('returns data', ({ fn, output }) => {
    expect(utils.isFunction(fn)).toEqual(output);
  });
});

describe(`${utils.getStateFromSessionStorage.name}`, () => {
  it('returns null', () => {
    expect(utils.getStateFromSessionStorage('key')).toBeNull();
  });
});
