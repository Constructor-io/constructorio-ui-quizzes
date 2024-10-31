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
      quiz: { results: factories.quizResults.build() } as QuizReturnState['quiz'],
    } as QuizContextValue['state'],
  };

  const Subject = withContext(Results, { contextMocks });

  it('renders results', () => {
    const view = renderToString(<Subject {...props} />);
    expect(view).toContain('cio-results');
    expect(view).toContain('Add to Cart');
  });

  it('renders custom results', () => {
    props.renderResultCard = (result) => (
      <div key={result.data?.id} className='custom-result'>
        <img src={result.data?.image_url} className='product-image' alt='quiz-result' />
        <div className='product-title'>{result.value}</div>
        <div className='product-price'>{result.data?.price}</div>
      </div>
    );
    const view = renderToString(<Subject {...props} />);
    expect(view).toContain('cio-results');
    expect(view).toContain('custom-result');
    expect(view).toContain('product-image');
    expect(view).toContain('product-title');
    expect(view).toContain('product-price');
  });
});
