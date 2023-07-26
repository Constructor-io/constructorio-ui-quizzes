import React, { useContext } from 'react';
import QuizContext from '../CioQuiz/context';

interface ResultFiltersProps {
  hasNoResults: boolean;
}

function ResultFilters({ hasNoResults }: ResultFiltersProps) {
  const { state } = useContext(QuizContext);

  return (
    <div className='cio-results-filter-container'>
      <p>{hasNoResults ? 'Your preferences' : 'Because you answered'}</p>
      <div className='cio-results-filter-options'>
        {state?.quiz.selectedOptionsWithAttributes?.map((option) => (
          <div className='cio-results-filter-option' key={option}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultFilters;
