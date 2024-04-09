import { render, screen } from '@testing-library/react';

import * as factories from './__tests__/factories';
import { mockConstructorIOClient } from './__tests__/utils';

import * as utils from '../src/utils';
import { QuestionTypes } from '../src/components/CioQuiz/actions';

describe(`${utils.renderImages.name}`, () => {
  const images = factories.images.build();
  const cssClasses = 'my-class';

  it('renders primary image', () => {
    Object.assign(window, {
      innerWidth: 500,
    });
    render(utils.renderImages(images, cssClasses));

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', images.primary_url);
    expect(img).toHaveAttribute('alt', images.primary_alt);
  });

  it('renders secondary image', () => {
    Object.assign(window, {
      innerWidth: 1000,
    });
    render(utils.renderImages(images, cssClasses));

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', images.secondary_url);
    expect(img).toHaveAttribute('alt', images.secondary_alt);
  });

  it('renders no image', () => {
    render(utils.renderImages({}, cssClasses));
    expect(screen.queryByRole('img')).toBeNull();
  });
});

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
      },
    },
  ])('returns data for $questionType', ({ questionType, output }) => {
    expect(utils.getQuestionTypes(questionType as QuestionTypes)).toEqual(output);
  });
});

describe(`${utils.getPreferredColorScheme.name}`, () => {
  it('returns dark if prefers-color-scheme is dark', () => {
    window.matchMedia = function X() {
      return {
        matches: true,
        addListener() {},
        removeListener() {},
      };
    } as unknown as typeof window.matchMedia;
    expect(utils.getPreferredColorScheme()).toBe('dark');
  });

  it('returns light if prefers-color-scheme is light', () => {
    window.matchMedia = function X() {
      return {
        matches: false,
        addListener() {},
        removeListener() {},
      };
    } as unknown as typeof window.matchMedia;
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
  const localStorageMock = (() => {
    let store: { [key: string]: string } = { key1: '{"text":"value"}' };

    const getItem = (key: string) => store[key] || null;
    const setItem = (key: string, value: string) => {
      store[key] = value;
    };
    const removeItem = (key: string) => delete store[key];
    const clear = () => {
      store = { key1: '{"text":"value"}' };
    };

    return { getItem, setItem, removeItem, clear };
  })();

  beforeAll(() => {
    Object.defineProperty(window, 'sessionStorage', {
      value: localStorageMock,
    });
  });

  beforeEach(() => {
    window.sessionStorage.clear();
    jest.restoreAllMocks();
  });

  it('returns null', () => {
    expect(utils.getStateFromSessionStorage('key')).toBeNull();
  });

  it('returns value for existing key', () => {
    expect(utils.getStateFromSessionStorage('key1')).toStrictEqual({ text: 'value' });
  });
});
