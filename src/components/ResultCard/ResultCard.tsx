import React, { KeyboardEvent, useContext } from 'react';
import ResultCtaButton from '../ResultCtaButton/ResultCtaButton';
import QuizContext from '../CioQuiz/context';
import { QuizResultDataPartial } from '../../types';

interface ResultCardProps {
  result: QuizResultDataPartial;
  salePriceKey?: string;
  regularPriceKey?: string;
  resultPosition: number;
}

export default function ResultCard(props: ResultCardProps) {
  const { result, salePriceKey, regularPriceKey, resultPosition } = props;
  const { resultClick, customClickItemCallback } = useContext(QuizContext);
  const salePrice = salePriceKey && result?.data?.[salePriceKey];
  const regularPrice = regularPriceKey && result?.data?.[regularPriceKey];

  const clickHandler = () => {
    if (resultClick) {
      resultClick(result, resultPosition);
    }
  };

  const keyDownHandler = (event: KeyboardEvent<HTMLAnchorElement>) => {
    if (event?.key === ' ' || event?.key === 'Enter') {
      if (resultClick) {
        resultClick(result, resultPosition);
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
    <>
      <a
        onClick={() => clickHandler()}
        onKeyDown={(e) => keyDownHandler(e)}
        className='cio-result-card-image'
        href={result.data?.url}>
        <img src={result.data?.image_url} alt='product' />
      </a>
      <a
        onClick={() => clickHandler()}
        onKeyDown={(e) => keyDownHandler(e)}
        className='cio-result-card-text'
        href={result.data?.url}>
        <p className='cio-result-card-title'>{result.value}</p>
        <div className='cio-result-card-prices'>
          {salePrice && <span className='cio-result-card-sale-price'>${salePrice}</span>}
          {regularPrice && (
            <span className={`cio-result-card-regular-price${salePrice ? '--strike-through' : ''}`}>
              ${regularPrice}
            </span>
          )}
        </div>
      </a>
      <ResultCtaButton item={result} price={salePrice || regularPrice} />
    </>
  );

  return (
    <div className='cio-result-card'>
      {!customClickItemCallback ? resultCardContentWithLink() : resultCardContent()}
    </div>
  );
}
