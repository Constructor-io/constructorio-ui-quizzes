import React from 'react';
import { render } from '@testing-library/react';

import { CurrentQuestion, Question, QuizReturnState } from '../../../src/types';
import { QuizContextValue } from '../../../src/components/CioQuiz/context';
import QuizQuestions from '../../../src/components/QuizQuestions';
import { withContext } from '../../__tests__/utils';

describe(`${QuizQuestions.name} client`, () => {
  const getSelectInputPropsMock = jest.fn().mockImplementation((option) => ({ key: option.id }));

  describe('open question', () => {
    const Subject = withContext(QuizQuestions, {
      contextMocks: {
        getSelectInputProps: getSelectInputPropsMock,
        state: {
          quiz: {
            currentQuestion: {
              next_question: {
                images: { primary_url: 'https://example.com/image.jpg', primary_alt: 'Image' },
                title: 'Title',
                description: 'Description',
                cta_text: 'CTA Text',
                id: 1,
                type: 'open',
              },
            } as CurrentQuestion,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders question', () => {
      const { container } = render(<Subject />);
      expect(container.firstChild).toHaveAttribute('data-cnstrc-question-type', 'open');
    });
  });

  describe('cover question', () => {
    const Subject = withContext(QuizQuestions, {
      contextMocks: {
        getSelectInputProps: getSelectInputPropsMock,
        state: {
          quiz: {
            currentQuestion: {
              next_question: {
                images: { primary_url: 'https://example.com/image.jpg', primary_alt: 'Image' },
                title: 'Title',
                description: 'Description',
                cta_text: 'CTA Text',
                id: 1,
                type: 'cover',
              },
            } as CurrentQuestion,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders question', () => {
      const { container } = render(<Subject />);
      expect(container.firstChild).toHaveAttribute('data-cnstrc-question-type', 'cover');
    });
  });

  describe('select question', () => {
    const Subject = withContext(QuizQuestions, {
      contextMocks: {
        getSelectInputProps: getSelectInputPropsMock,
        state: {
          quiz: {
            currentQuestion: {
              next_question: {
                images: { primary_url: 'https://example.com/image.jpg', primary_alt: 'Image' },
                title: 'Title',
                description: 'Description',
                cta_text: 'CTA Text',
                id: 1,
                type: 'single',
                options: [
                  {
                    id: 1,
                    value: 'Option 2',
                    attribute: null,
                    image: { primary_url: 'https://example.com/image.jpg', primary_alt: 'Image' },
                  },
                  {
                    id: 2,
                    value: 'Option 2',
                    attribute: null,
                    image: { primary_url: 'https://example.com/image.jpg', primary_alt: 'Image' },
                  },
                ],
              } as Question,
            } as CurrentQuestion,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders question', () => {
      const { container } = render(<Subject />);
      expect(container.firstChild).toHaveAttribute('data-cnstrc-question-type', 'single');
    });
  });

  describe('empty question', () => {
    const Subject = withContext(QuizQuestions, {
      contextMocks: {
        getSelectInputProps: getSelectInputPropsMock,
        state: {
          quiz: {
            currentQuestion: undefined,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders question', () => {
      const { container } = render(<Subject />);
      expect(container).toBeEmptyDOMElement();
    });
  });
});
