import React, { useContext } from 'react';
import RedoButton from '../RedoButton/RedoButton';
import { QuestionTypes } from '../CioQuiz/actions';
import QuizContext from '../CioQuiz/context';
import ResultFilters from '../ResultFilters/ResultFilters';
import ZeroResults from '../ZeroResults/ZeroResults';
import Results, { ResultsProps } from '../Results/Results';

export interface IResultContainerProps {
  options: ResultsProps;
}

export default function ResultContainer(props: IResultContainerProps) {
  const { options } = props;
  const {
    addToCartCallback,
    clickItemCallback,
    resultCardSalePriceKey,
    resultCardRegularPriceKey,
  } = options;
  const { resultsResponse } = useContext(QuizContext);
  const { dispatch } = useContext(QuizContext);
  const filterExpression = resultsResponse?.request?.collection_filter_expression;
  const zeroResults = !resultsResponse?.response?.results?.length;
  const resultsTitle = zeroResults ? 'Oops, there are no results' : 'Here are your results';

  const onResetClick = () => {
    if (dispatch && resultsResponse) {
      dispatch({
        type: QuestionTypes.Reset,
      });
    }
  };

  if (resultsResponse) {
    return (
      <div className='cio-results-container'>
        <h1 className='cio-results-title'>{resultsTitle}</h1>
        <div className='cio-results-filter-and-redo-container'>
          <ResultFilters filters={filterExpression} />
          <RedoButton onClick={onResetClick} />
        </div>
        {!zeroResults && (
          <Results
            addToCartCallback={addToCartCallback}
            clickItemCallback={clickItemCallback}
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
