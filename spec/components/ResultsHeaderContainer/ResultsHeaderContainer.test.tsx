import React from 'react';
import { render, screen } from '@testing-library/react';

import ResultsHeaderContainer from '../../../src/components/ResultsHeaderContainer/ResultsHeaderContainer';
import * as factories from '../../__tests__/factories';

describe(`${ResultsHeaderContainer.name} client`, () => {
  const props: React.ComponentProps<typeof ResultsHeaderContainer> = {
    resultsConfig: factories.quizResultsConfig.build(),
  };

  it('renders text when active', () => {
    render(<ResultsHeaderContainer {...props} />);
    expect(screen.getByText('Desktop description')).toBeInTheDocument();
    expect(screen.getByText('Desktop title')).toBeInTheDocument();
  });

  it('does not renders text when inactive', () => {
    render(
      <ResultsHeaderContainer
        resultsConfig={factories.quizResultsConfig.build({
          desktop: {
            description: { is_active: false },
            title: { is_active: false },
          },
        })}
      />
    );
    expect(screen.queryByText('Desktop description')).not.toBeInTheDocument();
    expect(screen.queryByText('Desktop title')).not.toBeInTheDocument();
  });

  it('renders default when config is null', () => {
    render(<ResultsHeaderContainer resultsConfig={null} />);
    expect(screen.getByText('Here are your results')).toBeInTheDocument();
  });
});
