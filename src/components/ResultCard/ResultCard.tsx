import React, { useContext } from 'react';
import ResultCtaButton from '../ResultCtaButton/ResultCtaButton';
import QuizContext from '../CioQuiz/context';
import { QuizResultDataPartial } from '../../types';

interface ResultCardProps {
  result: QuizResultDataPartial;
  salePriceKey?: string;
  regularPriceKey?: string;
  ratingCountKey?: string;
  ratingScoreKey?: string;
  discountLabelKey?: string;
  resultPosition: number;
}

export default function ResultCard(props: ResultCardProps) {
  const {
    result,
    salePriceKey,
    regularPriceKey,
    resultPosition,
    ratingCountKey,
    ratingScoreKey,
    discountLabelKey,
  } = props;
  const { customClickItemCallback, getQuizResultButtonProps, getQuizResultLinkProps } =
    useContext(QuizContext);
  const salePrice = salePriceKey && result?.data?.[salePriceKey];
  const regularPrice = regularPriceKey && result?.data?.[regularPriceKey];
  const ratingCount = ratingCountKey && result?.data?.[ratingCountKey];
  const ratingScore = ratingScoreKey && result?.data?.[ratingScoreKey];
  const discountLabel = discountLabelKey && result?.data?.[discountLabelKey];

  console.log(discountLabelKey);
  console.log('result', result);
  const resultCardContent = () => (
    <>
      <div className='cio-result-card-image'>
        <img src={result.data?.image_url} alt='product' />
      </div>
      <div className='cio-result-card-text'>
        <p className='cio-result-card-title'>{result.value}</p>
        <div className='cio-result-card-details'>
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
            {discountLabel && <div className='cio-result-card-discount'>was ${discountLabel}</div>}
          </div>
        </div>
      </div>
    </>
  );

  const resultCardContentWithoutLink = () =>
    getQuizResultButtonProps && (
      <div {...getQuizResultButtonProps({ result, position: resultPosition, type: 'button' })}>
        {resultCardContent()}
      </div>
    );

  const resultCardContentWithLink = () =>
    getQuizResultLinkProps && (
      <a
        className='cio-result-card-anchor'
        {...getQuizResultLinkProps({ result, position: resultPosition, type: 'link' })}>
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
