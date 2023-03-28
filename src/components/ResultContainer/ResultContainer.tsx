import React, { useContext } from 'react';
import RedoButton from '../RedoButton/RedoButton';
import { QuestionTypes } from '../CioQuiz/actions';
import QuizContext from '../CioQuiz/context';
import ResultCard from '../ResultCard/ResultCard';
import ResultFilters from '../ResultFilters/ResultFilters';
import CTAButton from '../CTAButton/CTAButton';
import { BrowseResultData } from '../../types';

export interface ResultsPageOptions {
  addToCartCallback: (item: Partial<BrowseResultData>) => any;
  clickItemCallback?: (item: Partial<BrowseResultData>) => any;
  resultCardSalePriceKey: string;
  resultCardRegularPriceKey: string;
  numResultsToDisplay?: number;
}

export interface IResultContainerProps {
  options: ResultsPageOptions;
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
          <div className='cio-results'>
            {resultsResponse?.response?.results?.map((result) => (
              <ResultCard
                result={result}
                key={result.data?.id}
                salePriceKey={resultCardSalePriceKey}
                regularPriceKey={resultCardRegularPriceKey}
                addToCartCallback={addToCartCallback}
                clickItemCallback={clickItemCallback}
              />
            ))}
          </div>
        )}
        {zeroResults && (
          <div className='cio-zero-results'>
            <h3 className='cio-zero-results-subtitle'>
              Sorry, it seems like we couldn’t find results based on your answers.
            </h3>
            <p className='cio-zero-results-description'>
              This is embarrassing 😢. It might be that some of the questions are not properly set
              up from our end. Would you give us another try?
            </p>
            <CTAButton ctaText='Try Again' onClick={onResetClick} />
          </div>
        )}
      </div>
    );
  }

  return <div>Loading</div>;
}
