import React, { useContext } from 'react';
import { ResultCardOptions } from '../../types';
import QuizContext from '../CioQuiz/context';
import ResultCard from '../ResultCard/ResultCard';

interface ResultsProps extends ResultCardOptions {}

function Results(props: ResultsProps) {
  const {
    resultCardSalePriceKey,
    resultCardRegularPriceKey,
    resultCardRatingCountKey,
    resultCardRatingScoreKey,
    swatchImageKey,
    renderResultCardPriceDetails,
    renderResultCard,
    getResultCardImageUrl,
  } = props;

  const { state } = useContext(QuizContext);

  return (
    <div className='cio-results'>
      {state?.quiz?.results?.response?.results?.map((result, index) => (
        <ResultCard
          result={result}
          key={result.data?.id}
          salePriceKey={resultCardSalePriceKey}
          regularPriceKey={resultCardRegularPriceKey}
          ratingCountKey={resultCardRatingCountKey}
          ratingScoreKey={resultCardRatingScoreKey}
          swatchImageKey={swatchImageKey}
          renderResultCardPriceDetails={renderResultCardPriceDetails}
          getResultCardImageUrl={getResultCardImageUrl}
          resultPosition={index + 1}
          renderResultCard={renderResultCard}
        />
      ))}
    </div>
  );
}

export default Results;
