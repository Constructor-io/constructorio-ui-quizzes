import { GetBrowseResultsResponseData } from '@constructor-io/constructorio-client-javascript/lib/types';
import React, { useContext } from 'react';
import { QuizResultsResponse } from '../../types';
import QuizContext from '../CioQuiz/context';
import ResultCard from '../ResultCard/ResultCard';

export interface ResultsProps {
  resultCardSalePriceKey?: string;
  resultCardRegularPriceKey?: string;
}

export interface ResultsPageOptions extends ResultsProps {
  numResultsToDisplay?: number;
  onQuizResultsLoaded?: (results: QuizResultsResponse) => void;
  onQuizResultClick?: (result: Partial<GetBrowseResultsResponseData>, position: number) => void;
  onAddToCartClick: (result: Partial<GetBrowseResultsResponseData>) => void;
}

function Results(props: ResultsProps) {
  const { resultCardSalePriceKey, resultCardRegularPriceKey } = props;
  const { quizApiState } = useContext(QuizContext);

  return (
    <div className='cio-results'>
      {quizApiState?.quizResults?.response?.results?.map((result, index) => (
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
