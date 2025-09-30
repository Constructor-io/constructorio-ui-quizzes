import React from 'react';
import { GetQuizResultSwatchProps, QuizResultDataPartial } from '../../types';

interface ResultCardSwatchesOptions {
  faceOutResult: QuizResultDataPartial;
  getQuizResultSwatchProps?: GetQuizResultSwatchProps;
}

export default function ResultCardSwatches(props: ResultCardSwatchesOptions) {
  const { faceOutResult, getQuizResultSwatchProps } = props;

  return (
    <div className='result-card-swatches-container'>
      {faceOutResult?.variations?.map((variation) => {
        const isSelected = faceOutResult?.data?.variation_id === variation.data.variation_id;

        return (
          getQuizResultSwatchProps && (
            <button {...getQuizResultSwatchProps(variation)} type='button'>
              {isSelected && <div className='cio-swatch-selected' />}
            </button>
          )
        );
      })}
    </div>
  );
}
