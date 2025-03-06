import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import OpenTextQuestion from '../../../src/components/OpenTextTypeQuestion/OpenTextTypeQuestion';
import { withContext } from '../../__tests__/utils';
import { CurrentQuestion, QuizReturnState } from '../../../src/types';
import { QuizContextValue } from '../../../src/components/CioQuiz/context';

describe(`${OpenTextQuestion.name} client`, () => {
  const getOpenTextInputPropsMock = jest.fn().mockReturnValue({ placeholder: 'placeholder' });

  describe('without image', () => {
    const Subject = withContext(OpenTextQuestion, {
      contextMocks: {
        getOpenTextInputProps: getOpenTextInputPropsMock,
        state: {
          quiz: {
            currentQuestion: {
              next_question: {
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

    it('renders open page', () => {
      const { container } = render(<Subject />);
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(container.firstChild).toHaveAttribute('data-cnstrc-question-type', 'open');
      expect(container.firstChild).toHaveClass('cio-open-text-question-container');
    });
  });

  describe('with image', () => {
    const Subject = withContext(OpenTextQuestion, {
      contextMocks: {
        getOpenTextInputProps: getOpenTextInputPropsMock,
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

    it('renders open page', () => {
      const { container } = render(<Subject />);
      expect(screen.getByAltText('Image')).toBeInTheDocument();
      expect(container.firstChild).toHaveClass('cio-open-text-question-container--with-image');
    });
  });

  describe('when question is null', () => {
    const Subject = withContext(OpenTextQuestion, {
      contextMocks: {
        getOpenTextInputProps: getOpenTextInputPropsMock,
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

  describe('callback on enter key event', () => {
    const onOpenQuestionInput = jest.fn();
    let inputValue = '';

    const Subject = withContext(OpenTextQuestion, {
      contextMocks: {
        getOpenTextInputProps: () => ({
          placeholder: 'placeholder',
          className: 'test-input',
          value: inputValue,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            inputValue = e.target.value;
          },
          onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              onOpenQuestionInput(inputValue, 'open');
            }
          },
        }),
        state: {
          quiz: {
            currentQuestion: {
              next_question: {
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

    beforeEach(() => {
      onOpenQuestionInput.mockClear();
      inputValue = '';
    });

    it('calls callback when pressing Enter', () => {
      render(<Subject />);
      const input = screen.getByRole('textbox');

      fireEvent.change(input, { target: { value: 'test text' } });
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(onOpenQuestionInput).toHaveBeenCalledTimes(1);
      expect(onOpenQuestionInput).toHaveBeenCalledWith('test text', 'open');
    });
  });
});
