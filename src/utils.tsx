import React from 'react';
import {
  FilterExpression,
  FilterExpressionGroupOr,
  FilterExpressionGroupAnd,
  FilterExpressionValue,
} from '@constructor-io/constructorio-client-javascript/lib/types';
import { QuestionTypes } from './components/CioQuiz/actions';
import { QuestionImages } from './types';

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

// More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
export const getStoryParams = (storyCode, templateCode, importCode) => {
  const code = `
${importCode}
${storyCode}
${templateCode}
`;

  return {
    docs: {
      source: {
        code,
        language: 'jsx',
        format: true,
        type: 'code',
      },
    },
  };
};

export const defaultOnAddToCartClickCode = `"onAddToCartClick": (item) => console.dir(item)`;
export const defaultOnQuizResultClickCode = `"onQuizResultClick": (result, position) => console.dir(result, position)`;
export const defaultOnQuizResultsLoadedCode = `"onQuizResultsLoaded": (results) => console.dir(results)`;

export const stringifyWithDefaults = (obj: {
  cioJsClient?: any;
  resultsPageOptions: {
    onAddToCartClick: any;
    onQuizResultClick: any;
    onQuizResultsLoaded: any;
  };
}) => {
  const { resultsPageOptions, cioJsClient, ...rest } = obj;
  const { onAddToCartClick, onQuizResultsLoaded, onQuizResultClick } = resultsPageOptions;
  let res = JSON.stringify({ ...rest, resultsPageOptions }, null, '  ');

  if (cioJsClient) {
    res = res.replace(
      '"resultsPageOptions": {',
      `"cioJsClient": cioJsClient,
  "resultsPageOptions": {`
    );
  }

  if (onQuizResultsLoaded) {
    res = res.replace(
      '"resultsPageOptions": {',
      `"resultsPageOptions": {
    ${defaultOnQuizResultsLoadedCode},`
    );
  }

  if (onQuizResultClick) {
    res = res.replace(
      '"resultsPageOptions": {',
      `"resultsPageOptions": {
    ${defaultOnQuizResultClickCode},`
    );
  }

  if (onAddToCartClick) {
    res = res.replace(
      '"resultsPageOptions": {',
      `"resultsPageOptions": {
    ${defaultOnAddToCartClickCode},`
    );
  }

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

const isValueExpression = (exp: FilterExpression): exp is FilterExpressionValue =>
  'name' in exp && 'value' in exp;
const isAndFilter = (exp: FilterExpression): exp is FilterExpressionGroupAnd => 'and' in exp;
const isOrFilter = (exp: FilterExpression): exp is FilterExpressionGroupOr => 'or' in exp;

export const getFilterValuesFromExpression = (exp: FilterExpression | null): string[] => {
  if (!exp) {
    return [];
  }
  if (isAndFilter(exp)) {
    return exp.and.flatMap((innerExpression: FilterExpression) =>
      getFilterValuesFromExpression(innerExpression)
    );
  }
  if (isOrFilter(exp)) {
    return exp.or.flatMap((innerExpression: FilterExpression) =>
      getFilterValuesFromExpression(innerExpression)
    );
  }
  if (isValueExpression(exp)) {
    return [exp.value];
  }

  return [];
};

export function isTrackingRequestSent(trackingRequestUrl) {
  // eslint-disable-next-line
  const trackingRequestsQueue = window.localStorage?._constructorio_requests;

  return (
    trackingRequestsQueue &&
    JSON.parse(trackingRequestsQueue)?.some((request) => request?.url?.includes(trackingRequestUrl))
  );
}
