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
      quiz: { results: factories.quizResults.build() } as QuizReturnState['quiz'],
    } as QuizContextValue['state'],
  };

  const Subject = withContext(Results, { contextMocks });

  it('renders results', () => {
    const { container } = render(<Subject {...props} />);
    expect(container.firstChild).toHaveClass('cio-results');
    expect(screen.getAllByText('Add to Cart').length).toStrictEqual(1);
  });

  it('renders custom results', () => {
    props.renderResultCard = (result) => (
      <div key={result.data?.id} className='custom-result'>
        <img src={result.data?.image_url} className='product-image' alt='quiz-result' />
        <div className='product-title'>{result.value}</div>
        <div className='product-price'>{result.data?.price}</div>
      </div>
    );
    const { container } = render(<Subject {...props} />);
    expect(container.firstChild).toHaveClass('cio-results');
    expect(container.firstChild?.firstChild).toHaveClass('custom-result');
    expect(container.firstChild?.firstChild?.childNodes[0]).toHaveClass('product-image');
    expect(container.firstChild?.firstChild?.childNodes[1]).toHaveClass('product-title');
    expect(container.firstChild?.firstChild?.childNodes[2]).toHaveClass('product-price');
  });
});
