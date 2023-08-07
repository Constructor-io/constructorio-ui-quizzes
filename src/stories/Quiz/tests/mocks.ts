import { Question } from '@constructor-io/constructorio-client-javascript/lib/types';
import { RequestStates } from '../../../constants';
import { InputQuestionsTypes, QuizReturnState } from '../../../types';
import { QuestionTypes } from '../../../components/CioQuiz/actions';
import { QuizContextValue } from '../../../components/CioQuiz/context';
import useOpenTextInputProps from '../../../hooks/usePropsGetters/useOpenTextInputProps';
import useCoverQuestionProps from '../../../hooks/usePropsGetters/useCoverQuestionProps';
import useSelectInputProps from '../../../hooks/usePropsGetters/useSelectInputProps';

export const getMockQuestion = (type: QuestionTypes) => ({
  id: 1,
  title: 'This is question title',
  description: 'This is question description',
  cta_text: 'Continue',
  type,
  input_placeholder: 'Answer here...',
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

export const getMockState = (question?: Question): QuizReturnState => ({
  answers: {
    inputs: {
      1: {
        type: question?.type as InputQuestionsTypes,
        value: '',
      },
    }, // Key is the question Id and value is the answer input
    isLastAnswer: false,
  },
  quiz: {
    requestState: RequestStates.Success,
    versionId: '',
    sessionId: '',
    skipToResults: false,
    currentQuestion: {
      next_question: question!,
      isFirstQuestion: false,
      isOpenQuestion: question?.type === 'open',
      isCoverQuestion: question?.type === 'cover',
      isSingleQuestion: question?.type === 'single',
      isMultipleQuestion: question?.type === 'multiple',
      isSelectQuestion: question?.type === 'single',
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
              discount: '59.9',
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
        facets: [],
        groups: [],
        sort_options: [],
        refined_content: [],
        total_num_results: 10,
        features: [],
        result_sources: {},
      },
      quiz_id: '',
      quiz_session_id: '',
      quiz_version_id: '',
      quiz_selected_options: [
        { value: 'Chocolate', has_attribute: true },
        { value: 'Medium', has_attribute: true },
      ],
    },
    selectedOptionsWithAttributes: ['Chocolate', 'Medium'],
  },
});

const mockElementProps = {
  className: '',
  type: 'submit' as 'submit',
  onClick: () => {},
  onChange: () => {},
  onKeyDown: () => {},
  role: 'button' as 'button',
  tabIndex: 0,
  key: 0,
  style: {},
  placeholder: '',
  value: '',
};

export const useMockContextValue = (question?: Question): QuizContextValue => {
  const getOpenTextInputProps = useOpenTextInputProps(
    () => {},
    () => {},
    question
  );

  const getCoverQuestionProps = useCoverQuestionProps(() => {}, question);

  const getSelectInputProps = useSelectInputProps(
    () => {},
    () => {},
    question
  );

  return {
    state: getMockState(question),
    getCoverQuestionProps,
    getOpenTextInputProps,
    getSelectInputProps,
    getAddToCartButtonProps: () => ({
      ...mockElementProps,
      className: 'cio-result-card-cta-button',
    }),
    getAddToFavoritesButtonProps: () => ({
      ...mockElementProps,
      className: 'cio-result-card-favorites-button',
    }),
    getHydrateQuizButtonProps: () => ({
      ...mockElementProps,
      className: 'cio-question-cta-button',
    }),
    getNextQuestionButtonProps: () => ({
      ...mockElementProps,
      className: 'cio-question-cta-button',
    }),
    getPreviousQuestionButtonProps: () => ({
      ...mockElementProps,
      className: 'cio-question-back-button',
    }),
    getQuizImageProps: () => mockElementProps,
    getQuizResultButtonProps: () => mockElementProps,
    getQuizResultLinkProps: () => mockElementProps,
    getResetQuizButtonProps: () => ({ ...mockElementProps, className: 'cio-question-redo-button' }),
    primaryColorStyles: {
      '--primary-color-h': '12',
      '--primary-color-s': '14',
      '--primary-color-l': '14',
    },
    customClickItemCallback: false,
    customAddToFavoritesCallback: true,
  };
};
