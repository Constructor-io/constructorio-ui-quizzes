import { Question } from '@constructor-io/constructorio-client-javascript/lib/types';
import { QuestionTypes } from '../../../components/CioQuiz/actions';
import { QuizContextValue } from '../../../components/CioQuiz/context';

export const getMockQuestion = (type: QuestionTypes) => ({
  id: 1,
  title: 'This is question title',
  description: 'This is question description',
  cta_text: 'Continue',
  type,
});

const getMockImages = () => ({
  images: {
    primary_url:
      'https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png',
  },
});

export const getMockQuestionWithImage = (type: QuestionTypes) => ({
  ...getMockQuestion(type),
  ...getMockImages(),
});

const getMockOption = (id, value) => ({
  id,
  value,
  attribute: {
    name: value,
    value,
  },
});

const getMockOptionWithImage = (id, value) => ({
  ...getMockOption(id, value),
  ...getMockImages(),
});

export const questionOptionsWithImages = [
  {
    ...getMockOptionWithImage(0, 'coffee'),
  },
  {
    ...getMockOptionWithImage(1, 'tea'),
  },
  {
    ...getMockOptionWithImage(2, 'water'),
  },
];

export const questionOptions = [
  {
    ...getMockOption(0, 'coffee'),
  },
  {
    ...getMockOption(1, 'tea'),
  },
  {
    ...getMockOption(2, 'water'),
  },
];

export const getMockState = (question?: Question): any => ({
  answers: {
    inputs: { 1: '' }, // Key is the question Id and value is the answer input
    isLastAnswer: false,
  },
  quiz: {
    requestState: 1,
    versionId: '',
    sessionId: '',
    isFirstQuestion: false,
    currentQuestion: {
      next_question: question,
    },
    results: {
      response: {
        results: [
          {
            value: 'This is a result card item',
            data: {
              id: '0',
              price: 100,
              ratingCount: '12',
              ratingScore: '4',
              image_url:
                'https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png',
            },
          },
          {
            value: 'This is a result card item',
            data: {
              id: '1',
              price: 200,
              salePrice: 150,
              ratingCount: '6',
              ratingScore: '3',
              image_url:
                'https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png',
            },
          },
          {
            value: 'This is a result card item',
            data: {
              id: '2',
              price: 300,
              salePrice: 250,
              ratingCount: '2',
              ratingScore: '5',
              image_url:
                'https://demo.constructor.io/sandbox_files/farmstandquizassets/HiThereNameInput.png',
            },
          },
        ],
      },
    },
    resultsFilters: ['Chocolate', 'Medium'],
  },
});

export const getMockContextValue = (question?: Question): QuizContextValue => ({
  state: getMockState(question),
  previousQuestion: () => {},
  nextQuestion: () => {},
  addToCart: () => {},
  customClickItemCallback: false,
  resetQuiz: () => {},
  resultClick: () => {},
});
