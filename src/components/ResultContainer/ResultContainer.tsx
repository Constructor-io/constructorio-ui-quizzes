import { useContext } from 'react';
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
  const { resultsResponse, setShowResults } = useContext(QuizContext);
  const { dispatch } = useContext(QuizContext);

  const onNextClick = () => {
    if (dispatch && resultsResponse && setShowResults) {
      dispatch({
        type: QuestionTypes.Reset
      });
      setShowResults(false);
    }
  };

  if (resultsResponse) {
    return (
      <div className='cio-result-container'>
        <h1 className='cio-result-container-text'>Here is your results</h1>
        <ResultHeroCard
          resultRequest={resultsResponse?.request}
          heroItem={resultsResponse?.response?.results?.[0]}
        />
        <div className='cio-results'>
          {resultsResponse?.response?.results?.slice(1, numResults).map((result: any) => (
            <ResultCard result={result} key={result?.data?.id} />
          ))}
        </div>
        <CTAButton ctaText='Reset' onClick={onNextClick} />
      </div>
    );
  }

  return <div>Loading</div>;
}
