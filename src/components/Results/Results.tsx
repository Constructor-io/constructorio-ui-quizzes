import { QuizResultData } from '@constructor-io/constructorio-client-javascript/lib/types';
import React, { useContext } from 'react';
import QuizContext from '../CioQuiz/context';
import ResultCard from '../ResultCard/ResultCard';

export interface ResultsProps {
  resultCardSalePriceKey?: string;
  resultCardRegularPriceKey?: string;
}

export namespace QuizResultsEventsProps {
  export type OnQuizResultsLoaded = (results: Partial<QuizResultData>) => void;
  export type OnQuizResultClick = (result: Partial<QuizResultData>, position: number) => void;
  export type OnAddToCartClick = (result: Partial<QuizResultData>) => void;
}

export interface ResultsPageOptions extends ResultsProps {
  numResultsToDisplay?: number;
  onQuizResultsLoaded?: QuizResultsEventsProps.OnQuizResultsLoaded;
  onQuizResultClick?: QuizResultsEventsProps.OnQuizResultClick;
  onAddToCartClick: QuizResultsEventsProps.OnAddToCartClick;
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
