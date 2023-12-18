import React, { useContext } from 'react';
import QuizContext from '../CioQuiz/context';

interface ResultFiltersProps {
  hasNoResults: boolean;
}

function ResultFilters({ hasNoResults }: ResultFiltersProps) {
  const { state } = useContext(QuizContext);
  const matchedOptions = state?.quiz?.matchedOptions || [];
  const unmatchedOptions = (state?.quiz?.selectedOptionsWithAttributes || []).filter(
    (option) => !matchedOptions.includes(option)
  );

  return (
    <div className='cio-results-filter-container'>
      {!!matchedOptions.length && (
        <p className='cio-results-explanation'>
          Based on your answers{' '}
          {matchedOptions.map((o, idx) => (
            <span>
              {!!idx && ', '}
              {o}
            </span>
          ))}{' '}
          we recommend these matches.
        </p>
      )}
      {!!unmatchedOptions.length && (
        <p className='cio-results-explanation'>
          No results found with{' '}
          {unmatchedOptions.map((o, idx) => (
            <span>
              {!!idx && ', '}
              {o}
            </span>
          ))}
          .
        </p>
      )}
    </div>
  );
}

export default ResultFilters;
