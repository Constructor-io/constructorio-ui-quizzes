import React from 'react';
import { render } from '@testing-library/react';

import ProgressBar from '../../../src/components/ProgressBar/ProgressBar';
import { withContext } from '../../__tests__/utils';
import { CurrentQuestion, QuizReturnState } from '../../../src/types';
import { QuizContextValue } from '../../../src/components/CioQuiz/context';

describe(`${ProgressBar.name} client`, () => {
  describe('with current question', () => {
    const Subject = withContext(ProgressBar, {
      contextMocks: {
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
              total_questions: 10,
            } as CurrentQuestion,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders progress bar', () => {
      const { container } = render(<Subject />);
      expect(container.firstChild).not.toBeEmptyDOMElement();
    });
  });

  describe('without current question', () => {
    const Subject = withContext(ProgressBar, {
      contextMocks: {
        state: {
          quiz: {
            currentQuestion: undefined,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders progress bar', () => {
      const { container } = render(<Subject />);
      expect(container).toBeEmptyDOMElement();
    });
  });
});
