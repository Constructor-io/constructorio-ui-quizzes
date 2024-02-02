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
    is_active: isActive,
    items_separator: itemsSeparator,
    last_separator: lastSeparator,
  } = state?.quiz?.resultsConfig?.desktop?.response_summary || {};
  const isActiveSummary = !!isActive && !!matchedOptions.length && !!text?.length;
  const [summaryFirstPart, summaryLastPart] = text?.split(MATCHED_OPTIONS_PLACEHOLDER) || [];
  const matchedOptionsTemplate = formatMatchedOptions(
    matchedOptions,
    itemsSeparator,
    lastSeparator
  );

  return (
    <div className='cio-results-filter-and-redo-container cio-results-button-group'>
      <div className='cio-results-filter-container'>
        {isActiveSummary && (
          <p className='cio-results-explanation'>
            {!!summaryFirstPart?.length && summaryFirstPart}
            <span>{matchedOptionsTemplate}</span>
            {!!summaryLastPart?.length && summaryLastPart}
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
