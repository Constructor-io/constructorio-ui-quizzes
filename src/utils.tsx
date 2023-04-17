import React from 'react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { QuestionTypes } from './components/CioQuiz/actions';
import {
  QuestionImages,
  QuizzesParameters,
  QuizzesResultsParameters,
  NextQuestionResponse,
  QuizResultsResponse,
} from './types';

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

export const defaultAddToCartCallbackCode = `"addToCartCallback": (item) => console.dir(item)`;

export const stringifyWithDefaults = (obj: { cioJsClient?: any; addToCartCallback: any }) => {
  const { addToCartCallback, cioJsClient, ...rest } = obj;
  let res = JSON.stringify(rest, null, '  ');

  if (cioJsClient) {
    res = res.replace(
      '"resultsPageOptions": {',
      `"cioJsClient": cioJsClient,
  "resultsPageOptions": {`
    );
  }

  res = res.replace(
    '"resultsPageOptions": {',
    `"resultsPageOptions": {
    ${defaultAddToCartCallbackCode},`
  );
  return res;
};

export const stringify = (obj: any) => JSON.stringify(obj, null, '  ');

export const getNextQuestion = (
  cioClient: ConstructorIOClient,
  quizId: string,
  parameters: QuizzesParameters
): Promise<NextQuestionResponse> => cioClient?.quizzes.getQuizNextQuestion(quizId, parameters);

export const getQuizResults = async (
  cioClient: ConstructorIOClient,
  quizId: string,
  parameters: QuizzesResultsParameters
): Promise<QuizResultsResponse> => cioClient?.quizzes.getQuizResults(quizId, parameters);

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

export const getCioClient = (apiKey?: string) => {
  if (apiKey) {
    return new ConstructorIOClient({
      apiKey,
    });
  }

  return null;
};

export function getPreferredColorScheme() {
  let colorScheme = 'light';
  // Check if the dark-mode Media-Query matches
  if (window.matchMedia('(prefers-color-scheme: dark)')?.matches) {
    colorScheme = 'dark';
  }
  return colorScheme;
}
