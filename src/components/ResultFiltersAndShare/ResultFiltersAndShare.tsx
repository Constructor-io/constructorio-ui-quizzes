import React, { useContext } from 'react';
import QuizContext from '../CioQuiz/context';
import ShareButton from '../ShareButton/ShareButton';

interface ResultFiltersAndShareProps {
  onShare: () => void;
  numberOfResults?: number;
  showShareButton: boolean;
}

const MATCHED_OPTIONS_PLACEHOLDER = '@matched_options';

function ResultFiltersAndShare({
  onShare,
  numberOfResults,
  showShareButton,
}: ResultFiltersAndShareProps) {
  const { state } = useContext(QuizContext);
  const matchedOptions = state?.quiz?.matchedOptions || '';
  const { text = '', isActive } = state?.quiz?.resultsConfig?.desktop?.responseSummary || {};
  const isActiveSummary = !!isActive && !!matchedOptions.length && !!text.length;
  const [summaryFirstPart, summaryLastPart] = text.split(MATCHED_OPTIONS_PLACEHOLDER);

  return (
    <div className='cio-results-filter-and-redo-container cio-results-button-group'>
      <div className='cio-results-filter-container'>
        {isActiveSummary && (
          <p className='cio-results-explanation'>
            {summaryFirstPart}
            <span>{matchedOptions}</span>
            {summaryLastPart}
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
