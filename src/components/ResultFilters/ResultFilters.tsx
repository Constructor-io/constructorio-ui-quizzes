import React, { useContext } from 'react';
import QuizContext from '../CioQuiz/context';

function ResultFilters() {
  const { quizApiState } = useContext(QuizContext);

  return (
    <div className='cio-results-filter-container'>
      <p>Because you answered</p>
      <div className='cio-results-filter-options'>
        {quizApiState?.quizResultsFilters?.map((filter) => (
          <div className='cio-results-filter-option' key={filter}>
            {filter}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResultFilters;
