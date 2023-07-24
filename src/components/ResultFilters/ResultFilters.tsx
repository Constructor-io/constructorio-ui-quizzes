import React, { useContext } from 'react';
import QuizContext from '../CioQuiz/context';

function ResultFilters({ hasNoResults }: Props) {
  const { state } = useContext(QuizContext);

  return (
    <div className='cio-results-filter-container'>
      <p>{hasNoResults ? 'Your preferences' : 'Because you answered'}</p>
      <div className='cio-results-filter-options'>
        {state?.quiz.resultsFilters?.map((filter) => (
          <div className='cio-results-filter-option' key={filter}>
            {filter}
          </div>
        ))}
      </div>
    </div>
  );
}

type Props = {
  hasNoResults: boolean;
};

export default ResultFilters;
