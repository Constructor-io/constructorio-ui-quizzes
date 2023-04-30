import React, { KeyboardEvent, useContext } from 'react';
import { BrowseResultData } from '../../types';
import ResultCtaButton from '../ResultCtaButton/ResultCtaButton';
import QuizContext from '../CioQuiz/context';

interface ResultCardProps {
  result: Partial<BrowseResultData>;
  salePriceKey?: string;
  regularPriceKey?: string;
  resultPosition: number;
}

export default function ResultCard(props: ResultCardProps) {
  const { result, salePriceKey, regularPriceKey, resultPosition } = props;
  const { resultClickHandler, customClickItemCallback } = useContext(QuizContext);
  const salePrice = salePriceKey && result?.data?.[salePriceKey];
  const regularPrice = regularPriceKey && result?.data?.[regularPriceKey];

  const clickHandler = (item: Partial<BrowseResultData>) => {
    if (resultClickHandler) {
      resultClickHandler(item, resultPosition);
    }
  };

  const keyDownHandler = (
    event: KeyboardEvent<HTMLDivElement>,
    item: Partial<BrowseResultData>
  ) => {
    if (event?.key === ' ' || event?.key === 'Enter') {
      if (resultClickHandler) {
        resultClickHandler(item, resultPosition);
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
      <ResultCtaButton item={result} price={salePrice || regularPrice} />
    </>
  );

  const resultCardContentWithLink = () => (
    <a className='cio-result-card-anchor' href={result.data?.url}>
      {resultCardContent()}
    </a>
  );

  return (
    <div
      onClick={() => clickHandler(result)}
      onKeyDown={(e) => keyDownHandler(e, result)}
      className='cio-result-card'
      role='button'
      tabIndex={0}>
      {!customClickItemCallback ? resultCardContentWithLink() : resultCardContent()}
    </div>
  );
}
