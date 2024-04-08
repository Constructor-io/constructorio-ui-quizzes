import React from 'react';
import { renderToString } from 'react-dom/server';

import QuizResultsSummary from '../../../src/components/QuizResultsSummary/QuizResultsSummary';

describe(`${QuizResultsSummary.name} client`, () => {
  const summary: React.ComponentProps<typeof QuizResultsSummary>['summary'] = {
    items_separator: ' $ ',
    last_separator: ' and ',
    is_active: true,
    text: 'Based on your answers @matched_options we recommend these matches.',
  };
  const props: React.ComponentProps<typeof QuizResultsSummary> = {
    summary,
    matchedOptions: ['MATCHED_OPTION_1', 'MATCHED_OPTION_2', 'MATCHED_OPTION_3'],
  };

  it('renders when active', () => {
    const view = renderToString(<QuizResultsSummary {...props} />);
    expect(view).toContain('MATCHED_OPTION_1 $ MATCHED_OPTION_2 and MATCHED_OPTION_3');
  });

  it('does not render when inactive', () => {
    const view = renderToString(
      <QuizResultsSummary {...props} summary={{ ...summary, is_active: false }} />
    );
    expect(view).toContain('');
  });

  it('when response summary is null, renders default', () => {
    const view = renderToString(<QuizResultsSummary {...props} summary={null} />);
    expect(view).toContain('MATCHED_OPTION_1, MATCHED_OPTION_2 and MATCHED_OPTION_3');
  });

  it('when matched options is empty', () => {
    const view = renderToString(<QuizResultsSummary {...props} matchedOptions={undefined} />);
    expect(view).toContain('');
  });

  it('when text is null', () => {
    const view = renderToString(
      <QuizResultsSummary {...props} summary={{ ...summary, text: null }} />
    );
    expect(view).toContain('');
  });
});
