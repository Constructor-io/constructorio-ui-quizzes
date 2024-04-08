import React from 'react';
import { renderToString } from 'react-dom/server';

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
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('>1<!-- --> <!-- -->result');
    });

    it('shows share button', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('Share Results');
    });

    it('does not render share button', () => {
      const view = renderToString(<Subject {...props} showShareButton={false} />);
      expect(view).not.toContain('Share Results');
    });
  });
});
