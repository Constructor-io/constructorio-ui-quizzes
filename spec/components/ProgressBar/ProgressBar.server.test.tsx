import React from 'react';
import { renderToString } from 'react-dom/server';

import { withContext } from '../../__tests__/utils';
import { CurrentQuestion, QuizReturnState } from '../../../src/types';
import { QuizContextValue } from '../../../src/components/CioQuiz/context';
import ProgressBar from '../../../src/components/ProgressBar/ProgressBar';

describe(`${ProgressBar.name} server`, () => {
  describe('with context function', () => {
    const Subject = withContext(ProgressBar, {
      contextMocks: {
        state: {
          quiz: {
            currentQuestion: {
              next_question: {
                title: 'Title',
                description: 'Description',
                cta_text: 'CTA Text',
                id: 2,
                type: 'open',
              },
              total_questions: 10,
            } as CurrentQuestion,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });

    it('renders the previous button', () => {
      const view = renderToString(<Subject />);
      expect(view).toContain('style="width:10%"');
    });
  });

  describe('without context function', () => {
    const Subject = withContext(ProgressBar, {
      contextMocks: {
        state: {
          quiz: {
            currentQuestion: undefined,
          } as QuizReturnState['quiz'],
        } as QuizContextValue['state'],
      },
    });
    it('does not render the previous button', () => {
      const view = renderToString(<Subject />);
      expect(view).toBe('');
    });
  });
});
