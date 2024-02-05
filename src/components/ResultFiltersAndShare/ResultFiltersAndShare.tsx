import React, { useContext } from 'react';
import QuizContext from '../CioQuiz/context';
import ShareButton from '../ShareButton/ShareButton';
import QuizResultsSummary from '../QuizResultsSummary/QuizResultsSummary';

interface ResultFiltersAndShareProps {
  onShare: () => void;
  numberOfResults?: number;
  showShareButton: boolean;
}

function ResultFiltersAndShare({
  onShare,
  numberOfResults,
  showShareButton,
}: ResultFiltersAndShareProps) {
  const { state } = useContext(QuizContext);
  const matchedOptions = state?.quiz?.matchedOptions;
  const summary = state?.quiz?.resultsConfig?.desktop?.response_summary ?? null;

  return (
    <div className='cio-results-filter-and-redo-container cio-results-button-group'>
      <div className='cio-results-filter-container'>
        <QuizResultsSummary summary={summary} matchedOptions={matchedOptions} />
      </div>
      <div className='cio-results-number-and-share-button-group'>
        {numberOfResults} {numberOfResults === 1 ? 'result' : 'results'}
        {showShareButton && <ShareButton onClick={onShare} />}
      </div>
    </div>
  );
}

export default ResultFiltersAndShare;
