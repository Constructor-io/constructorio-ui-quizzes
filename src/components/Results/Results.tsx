import React, { useContext } from 'react';
import { ResultsProps } from '../../types';
import QuizContext from '../CioQuiz/context';
import ResultCard from '../ResultCard/ResultCard';

function Results(props: ResultsProps) {
  const { resultCardSalePriceKey, resultCardRegularPriceKey } = props;
  const { state } = useContext(QuizContext);
  return (
    <div className='cio-results'>
      {state?.quiz?.results?.response?.results?.map((result, index) => (
        <ResultCard
          result={result}
          key={result.data?.id}
          salePriceKey={resultCardSalePriceKey}
          regularPriceKey={resultCardRegularPriceKey}
          resultPosition={index + 1}
        />
      ))}
    </div>
  );
}

export default Results;
