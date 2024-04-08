import React from 'react';
import { render, screen } from '@testing-library/react';

import CoverTypeQuestion from '../../../src/components/CoverTypeQuestion/CoverTypeQuestion';
import { withContext } from '../../__tests__/utils';
import { CurrentQuestion, QuizReturnState } from '../../../src/types';
import { QuizContextValue } from '../../../src/components/CioQuiz/context';

describe(`${CoverTypeQuestion.name} client`, () => {
  describe('without image', () => {
    const Subject = withContext(CoverTypeQuestion, {
      contextMocks: {
        state: {
          quiz: {
            currentQuestion: {
              next_question: {
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

    it('renders cover page', () => {
      const { container } = render(<Subject />);
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(container.firstChild).toHaveAttribute('data-cnstrc-question-type', 'cover');
      expect(container.firstChild).toHaveClass('cio-cover-question-container');
    });
  });

  describe('with image', () => {
    const Subject = withContext(CoverTypeQuestion, {
      contextMocks: {
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

    it('renders cover page', () => {
      const { container } = render(<Subject />);
      expect(screen.getByAltText('Image')).toBeInTheDocument();
      expect(container.firstChild).toHaveClass('cio-cover-question-container--with-image');
    });
  });

  describe('when question is null', () => {
    const Subject = withContext(CoverTypeQuestion, {
      contextMocks: {
        state: {
          quiz: {
            currentQuestion: undefined,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders empty', () => {
      const { container } = render(<Subject />);
      expect(container).toBeEmptyDOMElement();
    });
  });
});
