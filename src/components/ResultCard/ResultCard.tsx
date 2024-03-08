import React, { useContext } from 'react';
import ResultCtaButton from '../ResultCtaButton/ResultCtaButton';
import ResultFavoritesButton from '../ResultFavoritesButton/ResultFavoritesButton';
import QuizContext from '../CioQuiz/context';
import { QuizResultDataPartial } from '../../types';
import { getNestedValueUsingDotNotation, validateNumberOrString } from '../../utils';

interface ResultCardOptions {
  result: QuizResultDataPartial;
  salePriceKey?: string;
  regularPriceKey?: string;
  ratingCountKey?: string;
  ratingScoreKey?: string;
  resultPosition: number;
  renderResultCardPriceDetails?: (result: QuizResultDataPartial) => JSX.Element;
}

export default function ResultCard(props: ResultCardOptions) {
  const {
    result,
    salePriceKey,
    regularPriceKey,
    resultPosition,
    ratingCountKey,
    ratingScoreKey,
    renderResultCardPriceDetails,
  } = props;
  const {
    customAddToFavoritesCallback,
    customClickItemCallback,
    getQuizResultButtonProps,
    getQuizResultLinkProps,
  } = useContext(QuizContext);

  const salePrice = validateNumberOrString(
    getNestedValueUsingDotNotation(result?.data, salePriceKey),
  );
  const regularPrice = validateNumberOrString(
    getNestedValueUsingDotNotation(result?.data, regularPriceKey),
  );
  const ratingCount = validateNumberOrString(
    getNestedValueUsingDotNotation(result?.data, ratingCountKey),
  );
  const ratingScore = validateNumberOrString(
    getNestedValueUsingDotNotation(result?.data, ratingScoreKey),
  );

  const resultCardContent = () => (
    <>
      <div className='cio-result-card-image'>
        <img src={result.data?.image_url} alt='product' />
      </div>
      <div className='cio-result-card-text'>
        <p className='cio-result-card-title'>{result.value}</p>
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
            renderResultCardPriceDetails(result)
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
      <div {...getQuizResultButtonProps({ result, position: resultPosition, type: 'button' })}>
        {resultCardContent()}
      </div>
    );

  const resultCardContentWithLink = () =>
    getQuizResultLinkProps && (
      <a
        className='cio-result-card-anchor'
        rel='noreferrer'
        target='_blank'
        {...getQuizResultLinkProps({ result, position: resultPosition, type: 'link' })}>
        {resultCardContent()}
      </a>
    );

  return (
    <div className='cio-result-card'>
      {customAddToFavoritesCallback && (
        <ResultFavoritesButton item={result} price={salePrice || regularPrice} />
      )}
      {!customClickItemCallback ? resultCardContentWithLink() : resultCardContentWithoutLink()}
      <ResultCtaButton item={result} price={salePrice || regularPrice} />
    </div>
  );
}
