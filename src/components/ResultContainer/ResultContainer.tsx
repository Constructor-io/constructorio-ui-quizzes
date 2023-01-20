import { useContext } from 'react';
import QuizContext from '../Quiz/context';
import ResultCard from '../ResultCard/ResultCard';
import ResultHeroCard from '../ResultHeroCard/ResultHeroCard';
import './resultContainer.css';

interface ResultContainerProps {
  numResults?: number;
}

export default function ResultContainer(props: ResultContainerProps) {
  const { resultsResponse } = useContext(QuizContext);
  const { numResults = 6 } = props;

  if (resultsResponse) {
    return (
      <div className='cio-result-container'>
        <div className='cio-result-container-text' />
        <ResultHeroCard
          resultRequest={resultsResponse?.request}
          heroItem={resultsResponse?.response?.results?.[0]}
        />
        <div className='cio-results'>
          {resultsResponse?.response?.results?.slice(1, numResults).map((result: any) => (
            <ResultCard result={result} key={result?.data?.id} />
          ))}
        </div>
      </div>
    );
  }

  return <div>Loading</div>;
}
