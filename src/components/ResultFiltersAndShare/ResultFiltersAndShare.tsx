import React, { useContext } from 'react';
import QuizContext from '../CioQuiz/context';
import ShareButton from '../ShareButton/ShareButton';
import { MATCHED_OPTIONS_PLACEHOLDER } from '../../constants';
import { formatMatchedOptions } from '../../utils';

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
  const {
    text = '',
    isActive,
    itemsSeparator,
    lastSeparator,
  } = state?.quiz?.resultsConfig?.desktop?.responseSummary || {};
  const isActiveSummary = !!isActive && !!matchedOptions.length && !!text.length;
  const matchedOptionsTemplate = formatMatchedOptions(
    matchedOptions,
    itemsSeparator,
    lastSeparator
  );
  const [summaryFirstPart, summaryLastPart] = text.split(MATCHED_OPTIONS_PLACEHOLDER);

  return (
    <div className='cio-results-filter-and-redo-container cio-results-button-group'>
      <div className='cio-results-filter-container'>
        {isActiveSummary && (
          <p className='cio-results-explanation'>
            {summaryFirstPart}
            <span>{matchedOptionsTemplate}</span>
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
