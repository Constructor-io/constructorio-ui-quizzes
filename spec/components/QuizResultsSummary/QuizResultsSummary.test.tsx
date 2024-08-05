import React from 'react';
import { render, screen } from '@testing-library/react';

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
    render(<QuizResultsSummary {...props} />);
    expect(
      screen.getByText('MATCHED_OPTION_1 $ MATCHED_OPTION_2 and MATCHED_OPTION_3')
    ).toBeInTheDocument();
  });

  it('renders when active - only one option', () => {
    render(<QuizResultsSummary {...props} matchedOptions={props.matchedOptions!.slice(0, 1)} />);
    expect(screen.getByText('MATCHED_OPTION_1')).toBeInTheDocument();
    expect(screen.queryByText('$')).not.toBeInTheDocument();
    expect(screen.queryByText('and')).not.toBeInTheDocument();
  });

  it('renders when active - only two options', () => {
    render(<QuizResultsSummary {...props} matchedOptions={props.matchedOptions!.slice(0, 2)} />);
    expect(screen.getByText('MATCHED_OPTION_1 and MATCHED_OPTION_2')).toBeInTheDocument();
    expect(screen.queryByText('$')).not.toBeInTheDocument();
  });

  it('does not render when inactive', () => {
    const { container } = render(
      <QuizResultsSummary {...props} summary={{ ...summary, is_active: false }} />
    );
    expect(container).toBeEmptyDOMElement();
  });

  it('when response summary is null, renders default', () => {
    render(<QuizResultsSummary {...props} summary={null} />);
    expect(
      screen.getByText('MATCHED_OPTION_1, MATCHED_OPTION_2 and MATCHED_OPTION_3')
    ).toBeInTheDocument();
  });

  it('when matched options is empty', () => {
    const { container } = render(<QuizResultsSummary {...props} matchedOptions={undefined} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('when both are empty', () => {
    const { container } = render(<QuizResultsSummary summary={null} matchedOptions={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('when text is null', () => {
    const { container } = render(
      <QuizResultsSummary {...props} summary={{ ...summary, text: null }} />
    );
    expect(container).toBeEmptyDOMElement();
  });
});
