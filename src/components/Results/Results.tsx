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
    renderResultCardPriceDetails,
    renderResultCard,
    getResultCardImageUrl,
  } = props;

  const { state, getAddToCartButtonProps, getAddToFavoritesButtonProps, getQuizResultLinkProps } =
    useContext(QuizContext);
  const getters = { getAddToCartButtonProps, getAddToFavoritesButtonProps, getQuizResultLinkProps };
  return (
    <div className='cio-results'>
      {state?.quiz?.results?.response?.results?.map((result, index) =>
        renderResultCard ? (
          renderResultCard(result, getters, index)
        ) : (
          <ResultCard
            result={result}
            key={result.data?.id}
            salePriceKey={resultCardSalePriceKey}
            regularPriceKey={resultCardRegularPriceKey}
            ratingCountKey={resultCardRatingCountKey}
            ratingScoreKey={resultCardRatingScoreKey}
            renderResultCardPriceDetails={renderResultCardPriceDetails}
            getResultCardImageUrl={getResultCardImageUrl}
            resultPosition={index + 1}
          />
        )
      )}
    </div>
  );
}

export default Results;
