import React from 'react';
import { QuizResultDataPartial } from '../../types';

interface ResultCardSwatchesOptions {
  faceOutResult: QuizResultDataPartial;
  getQuizResultSwatchPropsWithVariationClick?: (variation: QuizResultDataPartial) => {};
}

export default function ResultCardSwatches(props: ResultCardSwatchesOptions) {
  const { faceOutResult, getQuizResultSwatchPropsWithVariationClick } = props;

  return (
    <div className='result-card-swatches-container'>
      {faceOutResult?.variations?.map((variation) => {
        const isSelected = faceOutResult?.data?.variation_id === variation.data.variation_id;

        return (
          getQuizResultSwatchPropsWithVariationClick && (
            // eslint-disable-next-line react/button-has-type
            <button {...getQuizResultSwatchPropsWithVariationClick(variation)}>
              {isSelected && <div className='cio-swatch-selected' />}
            </button>
          )
        );
      })}
    </div>
  );
}
