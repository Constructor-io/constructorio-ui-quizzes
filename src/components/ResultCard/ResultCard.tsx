import React, { useContext } from 'react';
import ResultCtaButton from '../ResultCtaButton/ResultCtaButton';
import ResultFavoritesButton from '../ResultFavoritesButton/ResultFavoritesButton';
import QuizContext from '../CioQuiz/context';
import { QuizResultDataPartial } from '../../types';
import { getNestedValueUsingDotNotation, validateNumberOrString } from '../../utils';
import ResultCardSwatches from '../ResultCardSwatches/ResultCardSwatches';
import useResult from './useResult';

interface ResultCardOptions {
  result: QuizResultDataPartial;
  salePriceKey?: string;
  regularPriceKey?: string;
  ratingCountKey?: string;
  ratingScoreKey?: string;
  swatchImageKey?: string;
  resultPosition: number;
  renderResultCardPriceDetails?: (result: QuizResultDataPartial) => JSX.Element;
  getResultCardImageUrl?: (result: QuizResultDataPartial) => string;
}

export default function ResultCard(props: ResultCardOptions) {
  const {
    result,
    salePriceKey,
    regularPriceKey,
    resultPosition,
    ratingCountKey,
    ratingScoreKey,
    swatchImageKey,
    renderResultCardPriceDetails,
    getResultCardImageUrl,
  } = props;
  const {
    customAddToFavoritesCallback,
    customClickItemCallback,
    getQuizResultButtonProps,
    getQuizResultLinkProps,
  } = useContext(QuizContext);
  const { faceOutResult, onVariationClick } = useResult(result);

  const salePrice = validateNumberOrString(
    getNestedValueUsingDotNotation(faceOutResult?.data, salePriceKey)
  );
  const regularPrice = validateNumberOrString(
    getNestedValueUsingDotNotation(faceOutResult?.data, regularPriceKey)
  );
  const ratingCount = validateNumberOrString(
    getNestedValueUsingDotNotation(faceOutResult?.data, ratingCountKey)
  );
  const ratingScore = validateNumberOrString(
    getNestedValueUsingDotNotation(faceOutResult?.data, ratingScoreKey)
  );

  const resultCardContent = () => (
    <>
      <div className='cio-result-card-image'>
        <img
          src={
            getResultCardImageUrl
              ? getResultCardImageUrl(faceOutResult)
              : faceOutResult.data?.image_url
          }
          alt='product'
        />
      </div>
      <ResultCardSwatches
        swatchImageKey={swatchImageKey}
        faceOutResult={faceOutResult}
        onVariationClick={onVariationClick}
      />
      <div className='cio-result-card-text'>
        <p className='cio-result-card-title'>{faceOutResult.value}</p>
        <div className='cio-result-card-details'>
          <div className='cio-result-card-rating'>
            {!!ratingScore && (
              <span className='cio-result-card-rating-score'>
                {Array(Number(ratingScore)).fill('★')}
                {Array(5 - Number(ratingScore)).fill('☆')}
              </span>
            )}
            {!!ratingCount && <span className='cio-result-card-rating-count'>({ratingCount})</span>}
          </div>
          {renderResultCardPriceDetails ? (
            renderResultCardPriceDetails(faceOutResult)
          ) : (
            <div className='cio-result-card-prices'>
              {!!salePrice && <span className='cio-result-card-sale-price'>${salePrice}</span>}
              {!!regularPrice && (
                <span
                  className={`cio-result-card-regular-price${salePrice ? '--strike-through' : ''}`}>
                  ${regularPrice}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );

  const resultCardContentWithoutLink = () =>
    getQuizResultButtonProps && (
      <div
        {...getQuizResultButtonProps({
          result: faceOutResult,
          position: resultPosition,
          type: 'button',
        })}>
        {resultCardContent()}
      </div>
    );

  const resultCardContentWithLink = () =>
    getQuizResultLinkProps && (
      <a
        className='cio-result-card-anchor'
        rel='noreferrer'
        target='_blank'
        {...getQuizResultLinkProps({
          result: faceOutResult,
          position: resultPosition,
          type: 'link',
        })}>
        {resultCardContent()}
      </a>
    );

  return (
    <div className='cio-result-card'>
      {customAddToFavoritesCallback && (
        <ResultFavoritesButton item={faceOutResult} price={salePrice || regularPrice} />
      )}
      {!customClickItemCallback ? resultCardContentWithLink() : resultCardContentWithoutLink()}
      <ResultCtaButton item={faceOutResult} price={salePrice || regularPrice} />
    </div>
  );
}
