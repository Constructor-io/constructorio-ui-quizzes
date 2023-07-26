import React, { useContext } from 'react';
import QuizContext from '../CioQuiz/context';

function ResultFilters() {
  const { state } = useContext(QuizContext);

  return (
    <div className='cio-results-filter-container'>
      <p>Because you answered</p>
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
