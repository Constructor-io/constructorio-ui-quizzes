import { useContext } from 'react';
import CTAButton from '../CTAButton/CTAButton';
import { QuestionTypes } from '../CioQuiz/actions';
import QuizContext from '../CioQuiz/context';
import ResultCard from '../ResultCard/ResultCard';
import ResultHeroCard from '../ResultHeroCard/ResultHeroCard';
import './resultContainer.css';
import { BrowseResultData } from '../../types';

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
        type: QuestionTypes.Reset
      });
    }
  };

  if (resultsResponse) {
    return (
      <div className='cio-result-container'>
        <h1 className='cio-result-container-text'>Here is your results</h1>
        {resultsResponse.response?.results && resultsResponse.response?.results.length > 0 ? (
          <ResultHeroCard heroItem={resultsResponse?.response?.results?.[0]} />
        ) : (
          ''
        )}
        <div className='cio-results'>
          {resultsResponse?.response?.results
            ?.slice(1, numResults)
            .map((result: Partial<BrowseResultData>) => (
              <ResultCard result={result} key={result.data?.id} />
            ))}
        </div>
        <CTAButton ctaText='Reset' onClick={onResetClick} />
      </div>
    );
  }

  return <div>Loading</div>;
}
