import React from 'react';
import { render, screen } from '@testing-library/react';

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
      render(<Subject {...props} />);
      expect(screen.queryByText(/Sorry, /)).not.toBeInTheDocument();
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
      render(<Subject {...props} resultCardOptions={undefined} />);
      expect(screen.getByText(/Sorry, /)).toBeInTheDocument();
    });

    it('does not render share button', () => {
      render(<Subject {...props} />);
      expect(screen.queryByText('Share Results')).not.toBeInTheDocument();
    });

    it('renders retake button', () => {
      render(<Subject {...props} />);
      expect(screen.getByText('Retake Quiz')).toBeInTheDocument();
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
      render(<Subject {...props} />);
      expect(screen.getByText('1 result')).toBeInTheDocument();
    });

    it('renders share button', () => {
      render(<Subject {...props} />);
      expect(screen.getByText('Share Results')).toBeInTheDocument();
    });

    it('renders retake button', () => {
      render(<Subject {...props} />);
      expect(screen.getByText('Retake Quiz')).toBeInTheDocument();
    });

    it('renders add to cart button for item', () => {
      render(<Subject {...props} />);
      expect(screen.getByText('Add to Cart')).toBeInTheDocument();
    });
  });
});
