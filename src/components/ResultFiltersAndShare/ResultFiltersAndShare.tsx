import React, { useContext } from 'react';
import QuizContext from '../CioQuiz/context';
import ShareButton from '../ShareButton/ShareButton';

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
  const matchedOptions = state?.quiz?.matchedOptions || [];

  return (
    <div className='cio-results-filter-and-redo-container cio-results-button-group'>
      <div className='cio-results-filter-container'>
        {!!matchedOptions.length && (
          <p className='cio-results-explanation'>
            Based on your answers <span>{matchedOptions}</span> we recommend these items:
          </p>
        )}
      </div>
      <div className='cio-results-number-and-share-button-group'>
        {numberOfResults} {numberOfResults === 1 ? 'result' : 'results'}
        {showShareButton && <ShareButton onClick={onShare} />}
      </div>
    </div>
  );
}

export default ResultFiltersAndShare;
