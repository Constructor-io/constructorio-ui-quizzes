import React, { useContext } from 'react';
import RedoButton from '../RedoButton/RedoButton';
import QuizContext from '../CioQuiz/context';
import ResultFilters from '../ResultFilters/ResultFilters';
import ZeroResults from '../ZeroResults/ZeroResults';
import { ResultCardProps } from '../../types';
import Results from '../Results/Results';

export interface IResultContainerProps {
  options: ResultCardProps;
}

export default function ResultContainer(props: IResultContainerProps) {
  const { options } = props;
  const {
    resultCardSalePriceKey,
    resultCardRegularPriceKey,
    resultCardRatingCountKey,
    resultCardRatingScoreKey,
    resultCardDiscountLabelKey,
    renderResultCardPriceDetails,
  } = options;
  const { state } = useContext(QuizContext);
  const zeroResults = !state?.quiz.results?.response?.results?.length;
  const resultsTitle = zeroResults ? '' : 'Here are your results';

  if (state?.quiz.results) {
    return (
      <div className='cio-results-container'>
        <h1 className='cio-results-title'>{resultsTitle}</h1>
        <div className='cio-results-filter-and-redo-container'>
          <ResultFilters hasNoResults={zeroResults} />
          <RedoButton />
        </div>
        {!zeroResults && (
          <Results
            resultCardSalePriceKey={resultCardSalePriceKey}
            resultCardRegularPriceKey={resultCardRegularPriceKey}
            resultCardRatingCountKey={resultCardRatingCountKey}
            resultCardRatingScoreKey={resultCardRatingScoreKey}
            resultCardDiscountLabelKey={resultCardDiscountLabelKey}
            renderResultCardPriceDetails={renderResultCardPriceDetails}
          />
        )}
        {zeroResults && <ZeroResults />}
      </div>
    );
  }

  return <div>Loading</div>;
}
