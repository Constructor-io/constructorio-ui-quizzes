import * as React from 'react';
import QuizContext from './Quiz/context';
import ResultCard from './ResultCard';
import ResultHeroCard from './ResultHeroCard';

interface ResultContainerProps {
  numResults?: number;
}

export default function ResultContainer(props: ResultContainerProps) {
  const { dispatch, resultsResponse } = React.useContext(QuizContext);
  const { numResults = 6 } = props;

  if (resultsResponse) {
    return (
      <div className="cio-result-container">
        <div className="cio-result-container-text" />
        <ResultHeroCard resultRequest={resultsResponse?.request} heroItem={resultsResponse?.response?.results?.[0]} />
        <div className="cio-results">
          {resultsResponse?.response?.results?.slice(1, numResults + 1).map((result: any) =>
            <ResultCard result={result} />
          )}
        </div>
      </div>
    )
  }

  return (
    <div>Loading</div>
  )
}
