import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import ResultFiltersAndShare from '../../../src/components/ResultFiltersAndShare/ResultFiltersAndShare';
import { withContext } from '../../__tests__/utils';
import { QuizContextValue } from '../../../src/components/CioQuiz/context';
import { QuizReturnState } from '../../../src/types';

describe(`${ResultFiltersAndShare.name} client`, () => {
  const props: React.ComponentProps<typeof ResultFiltersAndShare> = {
    numberOfResults: 1,
    showShareButton: true,
    onShare: jest.fn(),
  };

  describe('with response summary', () => {
    const contextMocks: Partial<QuizContextValue> = {
      state: {
        quiz: {
          matchedOptions: ['MATCHED_OPTION_1', 'MATCHED_OPTION_2'],
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

    const Subject = withContext(ResultFiltersAndShare, { contextMocks });

    it('renders results', () => {
      render(<Subject {...props} />);
      expect(screen.getByText('1 result')).toBeInTheDocument();
    });

    it('shows share button', () => {
      render(<Subject {...props} />);
      expect(screen.getByText('Share Results')).toBeInTheDocument();
      fireEvent.click(screen.getByText('Share Results'));
      expect(props.onShare).toHaveBeenCalled();
    });

    it('does not render share button', () => {
      render(<Subject {...props} showShareButton={false} />);
      expect(screen.queryByText('Share Results')).not.toBeInTheDocument();
    });
  });

  describe('without response summary', () => {
    const contextMocks: Partial<QuizContextValue> = {
      state: {
        quiz: {
          matchedOptions: ['MATCHED_OPTION_1', 'MATCHED_OPTION_2'],
          resultsConfig: null,
        } as QuizReturnState['quiz'],
      } as QuizContextValue['state'],
    };

    const Subject = withContext(ResultFiltersAndShare, { contextMocks });

    it('renders results', () => {
      render(<Subject {...props} numberOfResults={2} />);
      expect(screen.getByText('2 results')).toBeInTheDocument();
    });
  });
});
