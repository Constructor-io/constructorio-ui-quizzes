import React from 'react';
import { render, screen } from '@testing-library/react';

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
    const { container } = render(<Subject {...props} />);
    expect(container.firstChild).toHaveClass('cio-results');
    expect(screen.getAllByText('Add to Cart').length).toStrictEqual(1);
  });
});
