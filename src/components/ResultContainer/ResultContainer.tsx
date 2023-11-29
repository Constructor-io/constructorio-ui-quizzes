import React, { useContext } from 'react';
import RedoButton from '../RedoButton/RedoButton';
import ShareButton from '../ShareButton/ShareButton';
import QuizContext from '../CioQuiz/context';
import ResultFilters from '../ResultFilters/ResultFilters';
import ZeroResults from '../ZeroResults/ZeroResults';
import { ResultCardOptions, ResultsPageOptions } from '../../types';
import Results from '../Results/Results';
import Spinner from '../Spinner/Spinner';

export interface IResultContainerProps {
  resultCardOptions?: ResultCardOptions;
  resultsPageOptions?: ResultsPageOptions;
  onShare: () => void;
}

export default function ResultContainer(props: IResultContainerProps) {
  const { resultCardOptions, onShare, resultsPageOptions } = props;
  const { state } = useContext(QuizContext);

  const {
    resultCardSalePriceKey,
    resultCardRegularPriceKey,
    resultCardRatingCountKey,
    resultCardRatingScoreKey,
    renderResultCardPriceDetails,
  } = resultCardOptions || {};
  const numberOfResults = state?.quiz.results?.response?.results?.length;
  const resultsConfig = state?.quiz.resultsConfig?.desktop;
  const zeroResults = !numberOfResults;

  let resultsTitle: string;
  if (zeroResults) {
    resultsTitle = '';
  } else if (resultsConfig === null) {
    resultsTitle = 'Here are your results';
  } else if (resultsConfig?.title?.is_active) {
    resultsTitle = resultsConfig.title.text ?? '';
  } else {
    resultsTitle = '';
  }

  let resultsDescription: string;
  if (zeroResults) {
    resultsDescription = '';
  } else if (resultsConfig === null) {
    resultsDescription = 'Based on your answers, these are our recommendations.';
  } else if (resultsConfig?.description?.is_active) {
    resultsDescription = resultsConfig.description.text ?? '';
  } else {
    resultsDescription = '';
  }

  if (state?.quiz.results) {
    return (
      <div className='cio-results-container'>
        <h1 className='cio-results-title'>{resultsTitle}</h1>
        <p className='cio-results-description'>{resultsDescription}</p>
        <div className='cio-results-filter-and-redo-container cio-results-button-group'>
          <ResultFilters hasNoResults={zeroResults} />
          <div className='cio-results-redo-and-share-button-group'>
            <RedoButton />
            {resultsPageOptions?.showShareResultsButton && <ShareButton onClick={onShare} />}
          </div>
        </div>
        {!zeroResults && (
          <>
            <div className='cio-results-num-results'>
              {numberOfResults} {numberOfResults === 1 ? 'result' : 'results'}
            </div>
            <Results
              resultCardSalePriceKey={resultCardSalePriceKey}
              resultCardRegularPriceKey={resultCardRegularPriceKey}
              resultCardRatingCountKey={resultCardRatingCountKey}
              resultCardRatingScoreKey={resultCardRatingScoreKey}
              renderResultCardPriceDetails={renderResultCardPriceDetails}
            />
          </>
        )}
        {zeroResults && <ZeroResults />}
      </div>
    );
  }

  return (
    <div className='cio-results-container'>
      <Spinner />
    </div>
  );
}
