import { ReactElement } from 'react';
import {
  renderImages,
  getQuestionTypes,
  getPreferredColorScheme,
  rgbToHsl,
  validateNumberOrString,
  formatMatchedOptions,
  getNestedValueUsingDotNotation,
  resetQuizSessionStorageState,
  getStateFromSessionStorage,
  isFunction,
  convertPrimaryColorsToString,
  getDisplayedDescription,
} from '../../src/utils';
import { QuestionTypes } from '../../src/components/CioQuiz/actions';
import { Question } from '../../src/types';

describe('convertPrimaryColorsToString', () => {
  it('returns empty string when no images are provided', () => {
    const result = convertPrimaryColorsToString({
      '--primary-color-h': '0',
      '--primary-color-s': '0',
      '--primary-color-l': '0',
    });
    expect(result).toEqual(`{
    --primary-color-h: 0;
    --primary-color-s: 0;
    --primary-color-l: 0;
  }`);
  });
});

describe('renderImages', () => {
  it('renders primary image if provided', () => {
    global.innerWidth = 500;
    const images = { primary_url: 'primary.jpg', primary_alt: 'Primary' };
    const result = renderImages(images) as ReactElement;

    expect(result.props.children.props.src).toEqual('primary.jpg');
    expect(result.props.children.props.alt).toEqual('Primary');
  });

  it('renders secondary image if window width is above 768 and secondary image is provided', () => {
    global.innerWidth = 1024;
    const images = {
      primary_url: 'primary.jpg',
      primary_alt: 'Primary',
      secondary_url: 'secondary.jpg',
      secondary_alt: 'Secondary',
    };
    const result = renderImages(images) as ReactElement;

    expect(result.props.children.props.src).toEqual('secondary.jpg');
    expect(result.props.children.props.alt).toEqual('Secondary');
  });

  it('returns empty string when no images are provided', () => {
    const images = {};
    const result = renderImages(images) as ReactElement;
    expect(result).toEqual('');
  });
});

describe('getQuestionTypes', () => {
  it('identifies the correct question types', () => {
    expect(getQuestionTypes(QuestionTypes.OpenText)).toEqual({
      isOpenQuestion: true,
      isCoverQuestion: false,
      isSingleQuestion: false,
      isMultipleQuestion: false,
      isSelectQuestion: false,
      isMultipleFilterQuestion: false,
      isSingleFilterQuestion: false,
      isFreeFormQuestion: false,
    });
    expect(getQuestionTypes(QuestionTypes.Cover)).toEqual({
      isOpenQuestion: false,
      isCoverQuestion: true,
      isSingleQuestion: false,
      isMultipleQuestion: false,
      isSelectQuestion: false,
      isMultipleFilterQuestion: false,
      isSingleFilterQuestion: false,
      isFreeFormQuestion: false,
    });
    expect(getQuestionTypes(QuestionTypes.SingleFilterValue)).toEqual({
      isOpenQuestion: false,
      isCoverQuestion: false,
      isSingleQuestion: false,
      isMultipleQuestion: false,
      isSelectQuestion: true,
      isMultipleFilterQuestion: false,
      isSingleFilterQuestion: true,
      isFreeFormQuestion: false,
    });
    expect(getQuestionTypes(QuestionTypes.FreeForm)).toEqual({
      isOpenQuestion: false,
      isCoverQuestion: false,
      isSingleQuestion: false,
      isMultipleQuestion: false,
      isSelectQuestion: false,
      isMultipleFilterQuestion: false,
      isSingleFilterQuestion: false,
      isFreeFormQuestion: true,
    });
  });
});

describe('getPreferredColorScheme', () => {
  it('returns "dark" if prefers-color-scheme media query matches dark', () => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
    }));
    expect(getPreferredColorScheme()).toEqual('dark');
  });

  it('returns "light" by default', () => {
    window.matchMedia = jest.fn().mockImplementation(() => ({
      matches: false,
    }));
    expect(getPreferredColorScheme()).toEqual('light');
  });
});

describe('rgbToHsl', () => {
  it('converts RGB to HSL correctly, max=r', () => {
    expect(rgbToHsl(255, 0, 0)).toEqual([0, 100, 50]);
  });

  it('converts RGB to HSL correctly, max=g', () => {
    expect(rgbToHsl(0, 255, 0)).toEqual([120, 100, 50]);
  });

  it('converts RGB to HSL correctly, max=b', () => {
    expect(rgbToHsl(0, 0, 255)).toEqual([240, 100, 50]);
  });
});

describe('validateNumberOrString', () => {
  it('returns the string if the value is a string', () => {
    expect(validateNumberOrString('test')).toEqual('test');
  });

  it('returns the number if the value is a number', () => {
    expect(validateNumberOrString(42)).toEqual(42);
  });

  it('returns undefined for non-string and non-number values', () => {
    expect(validateNumberOrString({})).toBeUndefined();
    expect(validateNumberOrString(undefined)).toBeUndefined();
    expect(validateNumberOrString(true)).toBeUndefined();
  });
});

describe('formatMatchedOptions', () => {
  it('correctly formats options with separators', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const separator = ', ';
    const lastSeparator = ' and ';
    expect(formatMatchedOptions(options, separator, lastSeparator)).toEqual(
      'Option 1, Option 2 and Option 3'
    );
  });

  it('returns empty string if options array is empty', () => {
    expect(formatMatchedOptions([], ', ', ' and ')).toEqual('');
  });

  it('returns empty string if separator or lastSeparator is not provided', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    expect(formatMatchedOptions(options, null, ' and ')).toEqual('');
    expect(formatMatchedOptions(options, ', ', null)).toEqual('');
  });
});

describe('getNestedValueUsingDotNotation', () => {
  const testObject = {
    level1: {
      level2: {
        level3: 'value',
      },
    },
  };

  it('retrieves a nested value given a dot notation key', () => {
    expect(getNestedValueUsingDotNotation(testObject, 'level1.level2.level3')).toEqual('value');
  });

  it('returns undefined if the key does not exist', () => {
    expect(getNestedValueUsingDotNotation(testObject, 'level1.level2.nonexistent')).toBeUndefined();
  });

  it('returns undefined if the key is not provided', () => {
    expect(getNestedValueUsingDotNotation(testObject)).toBeUndefined();
  });

  it('returns undefined if the object is not provided or is null', () => {
    expect(getNestedValueUsingDotNotation(null, 'level1.level2.level3')).toBeUndefined();
    expect(getNestedValueUsingDotNotation(undefined, 'level1.level2.level3')).toBeUndefined();
  });
});

describe('isFunction', () => {
  it('returns true for a function', () => {
    const func = () => {};
    expect(isFunction(func)).toBe(true);
  });

  it('returns false for non-function values', () => {
    expect(isFunction(42)).toBe(false);
    expect(isFunction('string')).toBe(false);
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
  });

  it('returns undefined for undefined values', () => {
    expect(isFunction(undefined)).toBe(false);
  });

  it('returns null for nullable values', () => {
    expect(isFunction(null)).toBe(false);
  });
});

describe('getStateFromSessionStorage', () => {
  const sessionStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
    removeItem: jest.fn(),
    key: jest.fn(),
    length: 0,
  };

  beforeEach(() => {
    Object.defineProperty(window, 'sessionStorage', {
      value: sessionStorageMock,
    });
  });

  it('retrieves and parses state correctly from sessionStorage', () => {
    const quizState = { answer: '42' };
    sessionStorageMock.getItem.mockReturnValue(JSON.stringify(quizState));
    expect(getStateFromSessionStorage('quizState')).toEqual(quizState);
  });

  it('returns null if no state is found for the key', () => {
    sessionStorageMock.getItem = jest.fn().mockReturnValue(null);
    expect(getStateFromSessionStorage('quizState')).toBeNull();
  });
});

describe('resetQuizSessionStorageState', () => {
  beforeEach(() => {
    global.window = { sessionStorage: jest.fn() } as any;
    window.sessionStorage.removeItem = jest.fn();
  });

  it('removes the specified key from sessionStorage', () => {
    window.sessionStorage.setItem = jest.fn();

    const mockData = { QUIZ_ID_1: { answer: '42' } };

    jest.spyOn(window.sessionStorage, 'getItem').mockReturnValue(JSON.stringify(mockData));

    const reset = resetQuizSessionStorageState('quizState', 'QUIZ_ID_1');
    reset();
    expect(window.sessionStorage.setItem).toHaveBeenCalledWith(
      'quizState',
      JSON.stringify({ QUIZ_ID_1: null })
    );
  });

  it('does not modify other quiz data from session', () => {
    window.sessionStorage.setItem = jest.fn();

    const mockData = { QUIZ_ID_2: { answer: '42' } };

    jest.spyOn(window.sessionStorage, 'getItem').mockReturnValue(JSON.stringify(mockData));

    const reset = resetQuizSessionStorageState('quizState', 'QUIZ_ID_1');
    reset();
    expect(window.sessionStorage.setItem).toHaveBeenCalledWith(
      'quizState',
      JSON.stringify({ ...mockData, QUIZ_ID_1: null })
    );
  });
});

describe('getDisplayedDescription', () => {
  const makeQuestion = (
    type: string,
    description?: string,
    options?: { id: number | string; value: string; description?: string }[]
  ) => ({ type, description, options } as unknown as Question);

  it('returns undefined when question is null or undefined', () => {
    expect(getDisplayedDescription(null, {})).toBeUndefined();
    expect(getDisplayedDescription(undefined, {})).toBeUndefined();
  });

  it('returns undefined when question has no description and no options', () => {
    const question = makeQuestion(QuestionTypes.SingleSelect, undefined, undefined);
    expect(getDisplayedDescription(question, {})).toBeUndefined();
  });

  it('returns question description for non-single question types', () => {
    const question = makeQuestion(QuestionTypes.MultipleSelect, 'Question desc', [
      { id: 1, value: 'A', description: 'Option desc' },
    ]);
    expect(getDisplayedDescription(question, { 1: true })).toBe('Question desc');
  });

  it('returns question description when no option is selected (single select)', () => {
    const question = makeQuestion(QuestionTypes.SingleSelect, 'Question desc', [
      { id: 1, value: 'A', description: 'Option desc' },
    ]);
    expect(getDisplayedDescription(question, {})).toBe('Question desc');
  });

  it('returns selected option description when one option is selected (single select)', () => {
    const question = makeQuestion(QuestionTypes.SingleSelect, 'Question desc', [
      { id: 1, value: 'A', description: 'Option desc' },
      { id: 2, value: 'B', description: 'Other desc' },
    ]);
    expect(getDisplayedDescription(question, { 1: true })).toBe('Option desc');
  });

  it('returns question description when selected option has no description (single select)', () => {
    const question = makeQuestion(QuestionTypes.SingleSelect, 'Question desc', [
      { id: 1, value: 'A' },
    ]);
    expect(getDisplayedDescription(question, { 1: true })).toBe('Question desc');
  });

  it('returns selected option description for single filter value type', () => {
    const question = makeQuestion(QuestionTypes.SingleFilterValue, 'Question desc', [
      { id: 1, value: 'A', description: 'Filter option desc' },
    ]);
    expect(getDisplayedDescription(question, { 1: true })).toBe('Filter option desc');
  });

  it('returns question description when selected option has no description (single filter value)', () => {
    const question = makeQuestion(QuestionTypes.SingleFilterValue, 'Question desc', [
      { id: 1, value: 'A' },
    ]);
    expect(getDisplayedDescription(question, { 1: true })).toBe('Question desc');
  });
});
