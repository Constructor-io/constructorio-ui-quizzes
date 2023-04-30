import React, { useContext } from 'react';
import RedoButton from '../RedoButton/RedoButton';
import QuizContext from '../CioQuiz/context';
import ResultFilters from '../ResultFilters/ResultFilters';
import ZeroResults from '../ZeroResults/ZeroResults';
import Results, { ResultsProps } from '../Results/Results';

export interface IResultContainerProps {
  options: ResultsProps;
}

export default function ResultContainer(props: IResultContainerProps) {
  const { options } = props;
  const { resultCardSalePriceKey, resultCardRegularPriceKey } = options;
  const { quizApiState, resetQuizClickHandler } = useContext(QuizContext);
  const zeroResults = !quizApiState?.quizResults?.response?.results?.length;
  const resultsTitle = zeroResults ? 'Oops, there are no results' : 'Here are your results';

  if (quizApiState?.quizResults) {
    return (
      <div className='cio-results-container'>
        <h1 className='cio-results-title'>{resultsTitle}</h1>
        <div className='cio-results-filter-and-redo-container'>
          <ResultFilters />
          <RedoButton onClick={resetQuizClickHandler} />
        </div>
        {!zeroResults && (
          <Results
            resultCardSalePriceKey={resultCardSalePriceKey}
            resultCardRegularPriceKey={resultCardRegularPriceKey}
          />
        )}
        {zeroResults && <ZeroResults />}
      </div>
    );
  }

  return <div>Loading</div>;
}
