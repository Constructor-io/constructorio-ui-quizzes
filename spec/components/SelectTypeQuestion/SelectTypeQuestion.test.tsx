import React from 'react';
import { render, screen } from '@testing-library/react';

import SelectTypeQuestion from '../../../src/components/SelectTypeQuestion/SelectTypeQuestion';
import { withContext } from '../../__tests__/utils';
import { CurrentQuestion, QuizReturnState } from '../../../src/types';
import * as factories from '../../__tests__/factories';
import { QuizContextValue } from '../../../src/components/CioQuiz/context';

describe(`${SelectTypeQuestion.name} client`, () => {
  const getSelectInputPropsMock = jest.fn().mockImplementation((props) => ({
    key: props.id,
  }));

  describe('single select', () => {
    const question = factories.selectQuestion.build();
    const Subject = withContext(SelectTypeQuestion, {
      contextMocks: {
        getSelectInputProps: getSelectInputPropsMock,
        state: {
          quiz: {
            currentQuestion: { next_question: question } as CurrentQuestion,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders select question', () => {
      const { container } = render(<Subject />);
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(container.firstChild).toHaveAttribute('data-cnstrc-question-type', question.type);
      expect(container.firstChild).toHaveClass('cio-select-question-container');
    });
  });

  describe('multiple select', () => {
    const question = factories.selectQuestion.build({
      type: 'multiple',
    });
    const Subject = withContext(SelectTypeQuestion, {
      contextMocks: {
        getSelectInputProps: getSelectInputPropsMock,
        state: {
          quiz: {
            currentQuestion: { next_question: question } as CurrentQuestion,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders select question', () => {
      const { container } = render(<Subject />);
      expect(screen.getByText('Select one or more options')).toBeInTheDocument();
      expect(container.firstChild).toHaveAttribute('data-cnstrc-question-type', question.type);
    });
  });

  describe('with image', () => {
    const Subject = withContext(SelectTypeQuestion, {
      contextMocks: {
        getSelectInputProps: getSelectInputPropsMock,
        state: {
          quiz: {
            currentQuestion: {
              next_question: {
                images: { primary_url: 'https://example.com/image.jpg', primary_alt: 'Image' },
                title: 'Title',
                description: '',
                cta_text: 'CTA Text',
                id: 1,
                type: 'single',
                options: factories.selectOption.buildList(2, { images: factories.images.build() }),
              },
            } as CurrentQuestion,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders select question', () => {
      render(<Subject />);
      expect(screen.getAllByText('VALUE')).toHaveLength(2);
    });
  });

  describe('when question is null', () => {
    const Subject = withContext(SelectTypeQuestion, {
      contextMocks: {
        state: {
          quiz: { currentQuestion: undefined } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders empty', () => {
      const { container } = render(<Subject />);
      expect(container).toBeEmptyDOMElement();
    });
  });
});
