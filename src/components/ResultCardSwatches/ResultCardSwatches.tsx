import React, { useContext } from 'react';
import { QuizResultDataPartial } from '../../types';
import QuizContext from '../CioQuiz/context';

interface ResultCardSwatchesOptions {
  swatchImageKey?: string;
  faceOutResult: QuizResultDataPartial;
  onVariationClick: (variation: QuizResultDataPartial) => void;
}

export default function ResultCardSwatches(props: ResultCardSwatchesOptions) {
  const { faceOutResult, onVariationClick, swatchImageKey } = props;
  const { getQuizResultSwatchProps } = useContext(QuizContext);

  return (
    <div className='result-card-swatches-container'>
      {faceOutResult?.variations?.map((variation) => {
        const isSelected = faceOutResult?.data?.variation_id === variation.data.variation_id;

        return (
          getQuizResultSwatchProps && (
            // eslint-disable-next-line react/button-has-type
            <button
              {...getQuizResultSwatchProps(
                variation,
                onVariationClick,
                faceOutResult,
                swatchImageKey
              )}>
              {isSelected && <div className='cio-swatch-selected' />}
            </button>
          )
        );
      })}
    </div>
  );
}
