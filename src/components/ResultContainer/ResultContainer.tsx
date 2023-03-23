import React, { useContext } from 'react';
import RedoButton from '../RedoButton/RedoButton';
import { QuestionTypes } from '../CioQuiz/actions';
import QuizContext from '../CioQuiz/context';
import ResultCard from '../ResultCard/ResultCard';

interface ResultContainerProps {
  numResults?: number;
}

export default function ResultContainer(props: ResultContainerProps) {
  // Params:
  // Results to display
  const { numResults = 10 } = props;
  const { resultsResponse } = useContext(QuizContext);
  const { dispatch } = useContext(QuizContext);

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
        <div className='cio-results-filter-container'>
          <p>Because you answered</p>
          <div className='cio-results-filter-options'>
            <div className='cio-results-filter-option'>Option</div>
            <div className='cio-results-filter-option'>Option</div>
            <div className='cio-results-filter-option'>Option</div>
          </div>
        </div>
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
