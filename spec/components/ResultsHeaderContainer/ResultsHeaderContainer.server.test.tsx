import React from 'react';
import { renderToString } from 'react-dom/server';

import ResultsHeaderContainer from '../../../src/components/ResultsHeaderContainer/ResultsHeaderContainer';
import * as factories from '../../__tests__/factories';

describe(`${ResultsHeaderContainer.name} client`, () => {
  const props: React.ComponentProps<typeof ResultsHeaderContainer> = {
    resultsConfig: factories.quizResultsConfig.build(),
  };

  it('renders text when active', () => {
    const view = renderToString(<ResultsHeaderContainer {...props} />);
    expect(view).toContain('Desktop description');
    expect(view).toContain('Desktop title');
  });

  it('does not renders text when inactive', () => {
    const view = renderToString(
      <ResultsHeaderContainer
        resultsConfig={factories.quizResultsConfig.build({
          desktop: {
            description: { is_active: false },
            title: { is_active: false },
          },
        })}
      />
    );
    expect(view).not.toContain('Desktop description');
    expect(view).not.toContain('Desktop title');
  });

  it('renders default when config is null', () => {
    const view = renderToString(<ResultsHeaderContainer resultsConfig={null} />);
    expect(view).toContain('Here are your results');
  });
});
