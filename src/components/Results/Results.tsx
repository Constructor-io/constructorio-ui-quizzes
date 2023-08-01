import React, { useContext } from 'react';
import { ResultCardProps } from '../../types';
import QuizContext from '../CioQuiz/context';
import ResultCard from '../ResultCard/ResultCard';

interface ResultsProps extends ResultCardProps {}

function Results(props: ResultsProps) {
  const {
    resultCardSalePriceKey,
    resultCardRegularPriceKey,
    resultCardRatingCountKey,
    resultCardRatingScoreKey,
    resultCardDiscountLabelKey,
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
          discountLabelKey={resultCardDiscountLabelKey}
          resultPosition={index + 1}
        />
      ))}
    </div>
  );
}

export default Results;
