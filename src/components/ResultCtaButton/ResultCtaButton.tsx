import React, { useContext } from 'react';
import { BrowseResultData } from '../../types';
import QuizContext from '../CioQuiz/context';

interface ResultCtaButtonProps {
  item: Partial<BrowseResultData>;
  className?: string;
  price?: number;
}

export default function ResultCtaButton(props: ResultCtaButtonProps) {
  const { item, className, price } = props;
  const { addToCartClickHandler } = useContext(QuizContext);

  return (
    <button
      type='button'
      className={`cio-result-card-cta-button ${className || ''}`}
      onClick={(e) => {
        if (addToCartClickHandler) {
          addToCartClickHandler(e, item);
        }
      }}>
      Add to Cart
    </button>
  );
}
