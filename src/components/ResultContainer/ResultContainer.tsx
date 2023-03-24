import React, { useContext } from 'react';
import RedoButton from '../RedoButton/RedoButton';
import { QuestionTypes } from '../CioQuiz/actions';
import QuizContext from '../CioQuiz/context';
import ResultCard from '../ResultCard/ResultCard';
import ResultFilters from '../ResultFilters/ResultFilters';

interface ResultContainerProps {
  numResults?: number;
}

export default function ResultContainer(props: ResultContainerProps) {
  // Params:
  // Results to display
  const { numResults = 10 } = props;
  const { resultsResponse } = useContext(QuizContext);
  const { dispatch } = useContext(QuizContext);
  const filterExpression = resultsResponse?.request?.collection_filter_expression;

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
        <h1 className='cio-results-title'>Here are your results</h1>
        <ResultFilters filters={filterExpression} />
        <RedoButton onClick={onResetClick} />
        <div className='cio-results'>
          {resultsResponse?.response?.results?.slice(0, numResults).map((result) => (
            <ResultCard result={result} key={result.data?.id} />
          ))}
        </div>
      </div>
    );
  }

  return <div>Loading</div>;
}
