import React, { useContext } from 'react';
import CTAButton from '../CTAButton/CTAButton';
import { QuestionTypes } from '../CioQuiz/actions';
import QuizContext from '../CioQuiz/context';
import ResultCard from '../ResultCard/ResultCard';
import ResultHeroCard from '../ResultHeroCard/ResultHeroCard';
import './resultContainer.css';

interface ResultContainerProps {
  numResults?: number;
}

export default function ResultContainer(props: ResultContainerProps) {
  const { numResults = 6 } = props;
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
    const results = resultsResponse.response?.results;
    return (
      <div className='cio-result-container'>
        <h1 className='cio-result-container-text'>Here is your results</h1>

        {results && results.length > 0 ? <ResultHeroCard heroItem={results[0]} /> : ''}
        <div className='cio-results'>
          {resultsResponse?.response?.results?.slice(1, numResults).map((result) => (
            <ResultCard result={result} key={result.data?.id} />
          ))}
        </div>
        <CTAButton ctaText='Reset' onClick={onResetClick} />
      </div>
    );
  }

  return <div>Loading</div>;
}
