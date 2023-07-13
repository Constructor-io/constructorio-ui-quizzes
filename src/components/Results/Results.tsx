import React, { useContext } from 'react';
import { ResultCardProps } from '../../types';
import QuizContext from '../CioQuiz/context';
import ResultCard from '../ResultCard/ResultCard';

function Results(props: ResultCardProps) {
  const {
    resultCardSalePriceKey,
    resultCardRegularPriceKey,
    resultCardRatingCountKey,
    resultCardRatingScoreKey,
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
          resultPosition={index + 1}
        />
      ))}
    </div>
  );
}

export default Results;
