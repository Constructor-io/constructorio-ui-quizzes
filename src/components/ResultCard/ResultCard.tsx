import React, { useContext } from 'react';
import ResultCtaButton from '../ResultCtaButton/ResultCtaButton';
import ResultFavoritesButton from '../ResultFavoritesButton/ResultFavoritesButton';
import QuizContext from '../CioQuiz/context';
import { QuizResultDataPartial, RenderResultCard } from '../../types';
import { getNestedValueUsingDotNotation, validateNumberOrString } from '../../utils';
import ResultCardSwatches from '../ResultCardSwatches/ResultCardSwatches';
import useResultCard from '../../hooks/useResultCard';

interface ResultCardProps {
  result: QuizResultDataPartial;
  salePriceKey?: string;
  regularPriceKey?: string;
  ratingCountKey?: string;
  ratingScoreKey?: string;
  swatchImageKey?: string;
  resultPosition: number;
  renderResultCardPriceDetails?: (result: QuizResultDataPartial) => JSX.Element;
  getResultCardImageUrl?: (result: QuizResultDataPartial) => string;
  renderResultCard?: RenderResultCard;
}

export default function ResultCard(props: ResultCardProps) {
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
    renderResultCard,
  } = props;
  const {
    customAddToFavoritesCallback,
    customClickItemCallback,
    getQuizResultButtonProps,
    getAddToCartButtonProps,
    getAddToFavoritesButtonProps,
    getQuizResultLinkProps,
  } = useContext(QuizContext);

  const { faceOutResult, getQuizResultSwatchProps } = useResultCard(result, swatchImageKey);
  const { data, value } = faceOutResult || {};

  const salePrice = validateNumberOrString(getNestedValueUsingDotNotation(data, salePriceKey));
  const regularPrice = validateNumberOrString(
    getNestedValueUsingDotNotation(data, regularPriceKey)
  );
  const ratingCount = validateNumberOrString(getNestedValueUsingDotNotation(data, ratingCountKey));
  const ratingScore = validateNumberOrString(getNestedValueUsingDotNotation(data, ratingScoreKey));

  const resultCardContent = () => (
    <>
      <div className='cio-result-card-image'>
        <img
          src={getResultCardImageUrl ? getResultCardImageUrl(faceOutResult) : data?.image_url}
          alt='product'
        />
      </div>
      <ResultCardSwatches
        faceOutResult={faceOutResult}
        getQuizResultSwatchProps={getQuizResultSwatchProps}
      />
      <div className='cio-result-card-text'>
        <p className='cio-result-card-title'>{value}</p>
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

  const getters = {
    getQuizResultButtonProps,
    getAddToCartButtonProps,
    getAddToFavoritesButtonProps,
    getQuizResultLinkProps,
    getQuizResultSwatchProps, // The only getter function that's not from useProgGetters
  };

  if (renderResultCard) {
    return renderResultCard(faceOutResult, getters, resultPosition);
  }

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
