import * as React from 'react';
import ResultCtaButton from './ResultCtaButton';

interface ResultCardProps {
  result: any;
  callback?: (clickedResult: any) => any;
}

export default function ResultCard(props: ResultCardProps) {
  const { result, callback } = props;

  const clickHandler = () => {
    if (callback && typeof callback === 'function') {
      callback(result);
    }
  }

  if (callback) {
  return (
    <div onClick={clickHandler} className="cio-result-card">
      <div className="cio-result-card-image">
        <img src={result?.data?.image_url} />
      </div>
      <div className="cio-result-card-text">
        <div className="cio-result-card-title">
          <span>{result?.value}</span>
        </div>
        <div className="cio-result-card-price">
          <span>${result?.data?.price}</span>
        </div>
      </div>
      <ResultCtaButton items={[result]} />
    </div>
  );
  }

    return (
    <div className="cio-result-card">
      <a className="cio-result-card-anchor" href={result?.data?.url}>
      <div className="cio-result-card-image">
        <img src={result?.data?.image_url} />
      </div>
      <div className="cio-result-card-text">
        <div className="cio-result-card-title">
          <span>{result?.value}</span>
        </div>
        <div className="cio-result-card-price">
          <span>${result?.data?.price}</span>
        </div>
      </div>
      <ResultCtaButton items={[result]} />
      </a>
    </div>
    )
}
