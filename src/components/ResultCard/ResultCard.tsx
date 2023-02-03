import { KeyboardEvent } from 'react';
import { BrowseResultData } from '../../types';
import ResultCtaButton from '../ResultCtaButton/ResultCtaButton';
import './resultCard.css';

interface ResultCardProps {
  result: Partial<BrowseResultData>;
  callback?: (clickedResult: Partial<BrowseResultData>) => any;
}

export default function ResultCard(props: ResultCardProps) {
  const { result, callback } = props;

  const clickHandler = () => {
    if (callback && typeof callback === 'function') {
      callback(result);
    }
  };

  const keyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event?.key === ' ' || event?.key === 'Enter') {
      if (callback && typeof callback === 'function') {
        callback(result);
      }
    }
  };

  const resultCardContent = () => (
    <>
      <div className='cio-result-card-image'>
        <img src={result.data?.image_url} alt='product' />
      </div>
      <div className='cio-result-card-text'>
        <div className='cio-result-card-title'>
          <span>{result.value}</span>
        </div>
        <div className='cio-result-card-price'>
          <span>${result.data?.price}</span>
        </div>
      </div>
      <ResultCtaButton items={[result]} />
    </>
  );

  if (callback) {
    return (
      <div
        onClick={clickHandler}
        onKeyDown={keyDownHandler}
        className='cio-result-card'
        role='button'
        tabIndex={0}>
        {resultCardContent()}
      </div>
    );
  }

  return (
    <div className='cio-result-card'>
      <a className='cio-result-card-anchor' href={result.data?.url}>
        {resultCardContent()}
      </a>
    </div>
  );
}
