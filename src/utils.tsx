import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { QuestionTypes } from './components/CioQuiz/actions';
import { Answers } from './components/CioQuiz/reducer';
import { QuestionImages } from './types';

// eslint-disable-next-line import/prefer-default-export
export const renderImages = (images: Partial<QuestionImages>, cssClasses?: string) => {
  const {
    primary_url: primaryUrl,
    primary_alt: primaryAlt,
    secondary_url: secondaryUrl,
    secondary_alt: secondaryAlt
  } = images;

  type ImageFocusEvent = React.MouseEvent<HTMLImageElement> | React.FocusEvent<HTMLImageElement>;

  if (primaryUrl) {
    const replaceImage = (e: ImageFocusEvent) => {
      if (secondaryUrl) {
        e.currentTarget.src = secondaryUrl;
        e.currentTarget.alt = secondaryAlt || '';
      }
    };
    const restoreImage = (e: ImageFocusEvent) => {
      e.currentTarget.src = primaryUrl;
      e.currentTarget.alt = primaryAlt || '';
    };

    return (
      <img
        className={`cio-question-image ${cssClasses || ''}`.trim()}
        src={primaryUrl}
        alt={secondaryAlt || undefined}
        onMouseOver={replaceImage}
        onMouseOut={restoreImage}
        onFocus={replaceImage}
        onBlur={restoreImage}
      />
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
        type: 'code'
      }
    }
  };
};

export const stringify = (obj) => JSON.stringify(obj, null, '  ');

export const getNextQuestion = (cioClient: any, quizId: string, answers: Answers) =>
  cioClient?.quizzes.getQuizNextQuestion(quizId, { answers });

export const getQuizResults = async (cioClient: any, quizId: string, answers: Answers) => {
  const quizResults = await cioClient?.quizzes.getQuizResults(quizId, { answers });
  if (quizResults?.result?.results_url) {
    return fetch(quizResults?.result.results_url).then((response: Response) => response.json());
  }
  return null;
};

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
    isSelectQuestion
  };
};

export const getCioClient = (apiKey?: string) => {
  if (apiKey) {
    return new ConstructorIOClient({
      apiKey
    });
  }

  return null;
};
