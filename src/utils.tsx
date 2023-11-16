/* eslint-disable no-console */
import React from 'react';
import { QuestionTypes } from './components/CioQuiz/actions';
import { QuizLocalReducerState } from './components/CioQuiz/quizLocalReducer';
import { PrimaryColorStyles, QuestionImages } from './types';

export const renderImages = (images: Partial<QuestionImages>, cssClasses?: string) => {
  const {
    primary_url: primaryUrl,
    primary_alt: primaryAlt,
    secondary_url: secondaryUrl,
    secondary_alt: secondaryAlt,
  } = images;

  if (primaryUrl) {
    const windowWidth = window.innerWidth;
    let src = primaryUrl;
    let alt = primaryAlt || 'Quiz Image';

    if (windowWidth > 768 && secondaryUrl) {
      src = secondaryUrl;

      if (secondaryAlt) {
        alt = secondaryAlt;
      }
    }
    return (
      <span className={`${cssClasses || ''}`.trim()}>
        <img className='cio-question-image' src={src} alt={alt} />
      </span>
    );
  }

  return '';
};

export const functionStrings = {
  onAddToCartClick: `(item) => console.dir(item)`,
  onQuizResultClick: `(result, position) => console.dir(result, position)`,
  onAddToFavoritesClick: `(result) => {
      if (result.data) {
        if (!favorites.includes(result.data.id)) {
          setFavorites([...favorites, result.data.id]);
        } else {
          setFavorites(favorites.filter((id) => id !== result.data?.id));
        }
      }
    }`,
  onQuizResultsLoaded: `(results) => console.dir(results)`,
  onQuizNextQuestion: `(question) => console.dir(question)`,
  onQuizSkipQuestion: `(question) => console.dir(question)`,
  onEmailResults: `(data) => console.dir(data)`,
  cioJsClient: `cioJsClient`,
};

export const stringifyWithDefaults = (obj: {
  cioJsClient?: any;
  callbacks: {
    onAddToCartClick: any;
    onQuizResultClick: any;
    onQuizResultsLoaded: any;
  };
}) => {
  // Stringify non-function values normally. Add a template block for functions to be replaced later
  const customJsonTransformer = (key: string, value: any) => {
    if (value instanceof Function) {
      return `${key}_CODE`;
    }

    if (key === 'cioJsClient') {
      return `${key}_CODE`;
    }

    return value;
  };
  let res = JSON.stringify(obj, customJsonTransformer, '  ');

  // Replace template blocks with function strings
  Array.from(res.matchAll(/"(\w*)_CODE"/g)).forEach((match) => {
    const [codePlaceholder, key] = match;
    const functionString = functionStrings[key];

    if (functionString) {
      res = res.replaceAll(codePlaceholder, functionString);
    } else {
      console.error(`Function string for ${key} not found.`); // eslint-disable-line
    }
  });

  return res;
};

export const stringify = (obj: any) => JSON.stringify(obj, null, '  ');

export const getQuestionTypes = (questionType?: `${QuestionTypes}`) => {
  const isOpenQuestion = questionType === QuestionTypes.OpenText;
  const isCoverQuestion = questionType === QuestionTypes.Cover;
  const isSingleQuestion = questionType === QuestionTypes.SingleSelect;
  const isMultipleQuestion = questionType === QuestionTypes.MultipleSelect;
  const isSelectQuestion = isSingleQuestion || isMultipleQuestion;

  return {
    isOpenQuestion,
    isCoverQuestion,
    isSingleQuestion,
    isMultipleQuestion,
    isSelectQuestion,
  };
};

export function getPreferredColorScheme() {
  let colorScheme = 'light';
  // Check if the dark-mode Media-Query matches
  if (window.matchMedia('(prefers-color-scheme: dark)')?.matches) {
    colorScheme = 'dark';
  }
  return colorScheme;
}

export function isFunction(fn): boolean {
  return fn && typeof fn === 'function';
}

export const getStateFromSessionStorage = (quizStateKey: string): QuizLocalReducerState | null => {
  const state = window?.sessionStorage?.getItem(quizStateKey);

  if (state) {
    return JSON.parse(state);
  }
  return null;
};

export const resetQuizSessionStorageState = (quizStateKey: string) => () => {
  window?.sessionStorage?.removeItem(quizStateKey);
};

export const logger = (action: any) => {
  if (process?.env?.LOGGER) {
    console.group(
      `%cAction:%c  ${action.type}`,
      'color: red; font-weight: bold;',
      'color: green; font-weight: lighter;'
    );
    console.log('%c type:', 'color: #9E9E9E; font-weight: 700;', action.type);
    console.log('%c payload:', 'color: #00A7F7; font-weight: 700;', action.payload);
    console.groupEnd();
  }
};

// Function to emulate pausing between interactions
export function sleep(ms) {
  // eslint-disable-next-line
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function rgbToHsl(r: number, g: number, b: number) {
  const rConverted = r / 255;
  const gConverted = g / 255;
  const bConverted = b / 255;
  const max = Math.max(rConverted, gConverted, bConverted);
  const min = Math.min(rConverted, gConverted, bConverted);
  const delta = max - min;
  let h = 0;

  if (delta === 0) h = 0;
  else if (max === rConverted) h = ((gConverted - bConverted) / delta) % 6;
  else if (max === gConverted) h = (bConverted - rConverted) / delta + 2;
  else if (max === bConverted) h = (rConverted - gConverted) / delta + 4;

  const l = (min + max) / 2;
  const s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  const finalH = Math.round(h * 60);
  const finalS = Math.round(s * 100);
  const finalL = Math.round(l * 100);

  return [finalH, finalS, finalL];
}

export function convertPrimaryColorsToString(primaryColorStyles: PrimaryColorStyles) {
  return `{
    --primary-color-h: ${primaryColorStyles['--primary-color-h']}; 
    --primary-color-s: ${primaryColorStyles['--primary-color-s']}; 
    --primary-color-l: ${primaryColorStyles['--primary-color-l']}; 
  }`;
}
