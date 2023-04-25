import React, { useContext } from 'react';
import QuizContext from '../CioQuiz/context';
import ResultCard from '../ResultCard/ResultCard';
import { BrowseResultData } from '../../types';

export interface ResultsProps {
  addToCartCallback: (item: Partial<BrowseResultData>) => any;
  clickItemCallback?: (item: Partial<BrowseResultData>) => any;
  resultCardSalePriceKey?: string;
  resultCardRegularPriceKey?: string;
}

function Results(props: ResultsProps) {
  const {
    addToCartCallback,
    clickItemCallback,
    resultCardSalePriceKey,
    resultCardRegularPriceKey,
  } = props;
  const { resultsResponse } = useContext(QuizContext);

  return (
    <div className='cio-results'>
      {resultsResponse?.response?.results?.map((result, index) => (
        <ResultCard
          result={result}
          key={result.data?.id}
          salePriceKey={resultCardSalePriceKey}
          regularPriceKey={resultCardRegularPriceKey}
          addToCartCallback={addToCartCallback}
          clickItemCallback={clickItemCallback}
          resultPosition={index + 1}
        />
      ))}
    </div>
  );
}

export default Results;
