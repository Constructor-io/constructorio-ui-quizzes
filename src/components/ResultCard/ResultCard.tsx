import React, { KeyboardEvent } from 'react';
import { BrowseResultData } from '../../types';
import ResultCtaButton from '../ResultCtaButton/ResultCtaButton';

interface ResultCardProps {
  result: Partial<BrowseResultData>;
  callback?: (clickedResult: Partial<BrowseResultData>) => any;
  salePriceKey?: string;
  regularPriceKey?: string;
}

export default function ResultCard(props: ResultCardProps) {
  const { result, callback, salePriceKey, regularPriceKey } = props;
  const salePrice = salePriceKey && result?.data?.[salePriceKey];
  const regularPrice = regularPriceKey && result?.data?.[regularPriceKey];

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
        <p className='cio-result-card-title'>{result.value}</p>
        <div className='cio-result-card-prices'>
          {salePrice && <span className='cio-result-card-sale-price'>${salePrice}</span>}
          {regularPrice && (
            <span className={`cio-result-card-regular-price${salePrice ? '--strike-through' : ''}`}>
              ${regularPrice}
            </span>
          )}
        </div>
      </div>
      <ResultCtaButton item={result} />
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
