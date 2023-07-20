import React, { KeyboardEvent, useContext } from 'react';
import ResultCtaButton from '../ResultCtaButton/ResultCtaButton';
import QuizContext from '../CioQuiz/context';
import { QuizResultDataPartial } from '../../types';

interface ResultCardProps {
  result: QuizResultDataPartial;
  salePriceKey?: string;
  regularPriceKey?: string;
  ratingCountKey?: string;
  ratingScoreKey?: string;
  resultPosition: number;
}

export default function ResultCard(props: ResultCardProps) {
  const { result, salePriceKey, regularPriceKey, ratingCountKey, ratingScoreKey, resultPosition } =
    props;
  const { resultClick, customClickItemCallback } = useContext(QuizContext);
  const salePrice = salePriceKey && result?.data?.[salePriceKey];
  const regularPrice = regularPriceKey && result?.data?.[regularPriceKey];
  const ratingCount = ratingCountKey && result?.data?.[ratingCountKey];
  const ratingScore = ratingScoreKey && result?.data?.[ratingScoreKey];

  const clickHandler = () => {
    if (resultClick) {
      resultClick(result, resultPosition);
    }
  };

  const keyDownHandler = (event: KeyboardEvent<HTMLElement>) => {
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
        <div>
          <div className='cio-result-card-rating'>
            {ratingScore && (
              <span className='cio-result-card-rating-score'>
                {Array(Number(ratingScore)).fill('★')}
                {Array(5 - Number(ratingScore)).fill('☆')}
              </span>
            )}
            {ratingCount && <span className='cio-result-card-rating-count'>({ratingCount})</span>}
          </div>
          <div className='cio-result-card-prices'>
            {salePrice && <span className='cio-result-card-sale-price'>${salePrice}</span>}
            {regularPrice && (
              <span
                className={`cio-result-card-regular-price${salePrice ? '--strike-through' : ''}`}>
                ${regularPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );

  const resultCardContentWithoutLink = () => (
    <div
      className='cio-result-card-container'
      onClick={() => clickHandler()}
      onKeyDown={(e) => keyDownHandler(e)}
      role='button'
      tabIndex={0}>
      {resultCardContent()}
    </div>
  );

  const resultCardContentWithLink = () => (
    <a
      className='cio-result-card-anchor'
      href={result.data?.url}
      onClick={() => clickHandler()}
      onKeyDown={(e) => keyDownHandler(e)}>
      {resultCardContent()}
    </a>
  );

  return (
    <div className='cio-result-card'>
      {!customClickItemCallback ? resultCardContentWithLink() : resultCardContentWithoutLink()}
      <ResultCtaButton item={result} price={salePrice || regularPrice} />
    </div>
  );
}
