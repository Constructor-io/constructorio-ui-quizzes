import React, { useContext } from 'react';
import QuizContext from '../CioQuiz/context';
import ResultFiltersAndShare from '../ResultFiltersAndShare/ResultFiltersAndShare';
import ZeroResults from '../ZeroResults/ZeroResults';
import { ResultCardOptions, ResultsPageOptions } from '../../types';
import Results from '../Results/Results';
import Spinner from '../Spinner/Spinner';
import ResultsHeaderContainer from '../ResultsHeaderContainer/ResultsHeaderContainer';
import RedoButton from '../RedoButton/RedoButton';

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
  const resultsConfig = state?.quiz.resultsConfig;
  const zeroResults = !numberOfResults;

  if (state?.quiz.results) {
    return (
      <div className='cio-results-container'>
        {!zeroResults && <ResultsHeaderContainer resultsConfig={resultsConfig} />}
        {!zeroResults && (
          <ResultFiltersAndShare
            numberOfResults={numberOfResults}
            onShare={onShare}
            showShareButton={!!resultsPageOptions?.showShareResultsButton}
          />
        )}
        {!zeroResults && (
          <Results
            resultCardSalePriceKey={resultCardSalePriceKey}
            resultCardRegularPriceKey={resultCardRegularPriceKey}
            resultCardRatingCountKey={resultCardRatingCountKey}
            resultCardRatingScoreKey={resultCardRatingScoreKey}
            renderResultCardPriceDetails={renderResultCardPriceDetails}
          />
        )}
        {zeroResults && <ZeroResults />}
        {!zeroResults && (
          <div className='cio-redo-button-container'>
            <RedoButton />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='cio-results-container'>
      <Spinner />
    </div>
  );
}
