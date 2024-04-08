import React from 'react';
import { renderToString } from 'react-dom/server';

import Results from '../../../src/components/Results/Results';
import { withContext } from '../../__tests__/utils';
import { QuizContextValue } from '../../../src/components/CioQuiz/context';
import * as factories from '../../__tests__/factories';
import { QuizReturnState } from '../../../src/types';

describe(`${Results.name} client`, () => {
  const props: React.ComponentProps<typeof Results> = {
    ...factories.resultCardOptions.build(),
  };

  const contextMocks: Partial<QuizContextValue> = {
    state: {
      quiz: {
        results: factories.quizResults.build(),
      } as QuizReturnState['quiz'],
    } as QuizContextValue['state'],
  };

  const Subject = withContext(Results, { contextMocks });

  it('renders results', () => {
    const view = renderToString(<Subject {...props} />);
    expect(view).toContain('cio-results');
    expect(view).toContain('Add to Cart');
  });
});
