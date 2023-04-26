import React, { useContext } from 'react';
import RedoButton from '../RedoButton/RedoButton';
import { QuestionTypes } from '../CioQuiz/actions';
import QuizContext from '../CioQuiz/context';
import ResultFilters from '../ResultFilters/ResultFilters';
import ZeroResults from '../ZeroResults/ZeroResults';
import Results, { ResultsProps } from '../Results/Results';

export interface IResultContainerProps {
  options: ResultsProps;
  resetQuizSessionId: () => void;
}

export default function ResultContainer(props: IResultContainerProps) {
  const { options, resetQuizSessionId } = props;
  const {
    addToCartCallback,
    clickItemCallback,
    resultCardSalePriceKey,
    resultCardRegularPriceKey,
  } = options;
  const { resultsResponse, cioClient, dispatch } = useContext(QuizContext);
  const filterExpression = resultsResponse?.request?.collection_filter_expression;
  const zeroResults = !resultsResponse?.response?.results?.length;
  const resultsTitle = zeroResults ? 'Oops, there are no results' : 'Here are your results';

  const onResetClick = () => {
    if (dispatch && resultsResponse) {
      resetQuizSessionId();
      dispatch({
        type: QuestionTypes.Reset,
      });
    }
  };

  if (resultsResponse && resultsResponse.request && resultsResponse.response) {
    /* eslint-disable @typescript-eslint/naming-convention */
    const {
      quiz_id,
      quiz_session_id,
      quiz_version_id,
      result_id,
      request: { section, page },
      response: { total_num_results },
    } = resultsResponse;
    /* eslint-enable @typescript-eslint/naming-convention */

    cioClient?.tracker.trackQuizResultsLoaded({
      quiz_id,
      quiz_version_id,
      quiz_session_id,
      url: window.location.href,
      section,
      result_count: total_num_results,
      result_page: page,
      result_id,
    });

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
