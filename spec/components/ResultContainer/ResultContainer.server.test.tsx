import React from 'react';
import { renderToString } from 'react-dom/server';

import ResultContainer from '../../../src/components/ResultContainer/ResultContainer';
import { withContext } from '../../__tests__/utils';
import { QuizContextValue } from '../../../src/components/CioQuiz/context';
import * as factories from '../../__tests__/factories';
import { QuizReturnState } from '../../../src/types';

describe(`${ResultContainer.name} client`, () => {
  const props: React.ComponentProps<typeof ResultContainer> = {
    resultCardOptions: factories.resultCardOptions.build(),
    resultsPageOptions: factories.resultsPageOptions.build(),
    onShare: jest.fn(),
  };

  describe('before loading', () => {
    const contextMocks: Partial<QuizContextValue> = {
      state: {
        quiz: {
          resultsConfig: {
            desktop: {
              description: null,
              title: null,
              response_summary: {
                is_active: true,
                items_separator: ',',
                last_separator: ' and ',
                text: 'BEFORE TEXT @matched_options AFTER TEXT',
              },
            },
          },
        } as QuizReturnState['quiz'],
      } as QuizContextValue['state'],
    };

    const Subject = withContext(ResultContainer, { contextMocks });

    it('does not render any text', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).not.toContain('Sorry, ');
    });
  });

  describe('with zero results', () => {
    const contextMocks: Partial<QuizContextValue> = {
      state: {
        quiz: {
          results: factories.quizResults.build({
            response: {
              results: [],
              total_num_results: 0,
            },
          }),
          resultsConfig: {
            desktop: {
              description: null,
              title: null,
              response_summary: {
                is_active: true,
                items_separator: ',',
                last_separator: ' and ',
                text: 'BEFORE TEXT @matched_options AFTER TEXT',
              },
            },
          },
        } as QuizReturnState['quiz'],
      } as QuizContextValue['state'],
    };

    const Subject = withContext(ResultContainer, { contextMocks });

    it('renders zero results', () => {
      const view = renderToString(<Subject {...props} resultCardOptions={undefined} />);
      expect(view).toContain('Sorry, ');
    });

    it('does not render share button', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).not.toContain('Share Results');
    });

    it('renders retake button', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('Retake Quiz');
    });
  });

  describe('with results', () => {
    const contextMocks: Partial<QuizContextValue> = {
      state: {
        quiz: {
          results: factories.quizResults.build(),
          resultsConfig: {
            desktop: {
              description: null,
              title: null,
              response_summary: {
                is_active: true,
                items_separator: ',',
                last_separator: ' and ',
                text: 'BEFORE TEXT @matched_options AFTER TEXT',
              },
            },
          },
        } as QuizReturnState['quiz'],
      } as QuizContextValue['state'],
    };
    const Subject = withContext(ResultContainer, { contextMocks });

    it('renders results', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('1<!-- --> <!-- -->result');
    });

    it('renders share button', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('Share Results');
    });

    it('renders retake button', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('Retake Quiz');
    });

    it('renders add to cart button for item', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('Add to Cart');
    });
  });
});
