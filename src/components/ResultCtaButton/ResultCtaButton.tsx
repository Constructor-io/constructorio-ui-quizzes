import React, { useContext } from 'react';
import { QuizResultDataPartial } from '../../types';
import QuizContext from '../CioQuiz/context';

interface ResultCtaButtonProps {
  item: QuizResultDataPartial;
  className?: string;
  price?: number;
}

export default function ResultCtaButton(props: ResultCtaButtonProps) {
  const { item, className, price } = props;
  const { addToCart } = useContext(QuizContext);

  return (
    <button
      type='button'
      className={`cio-result-card-cta-button ${className || ''}`}
      onClick={(e) => {
        if (addToCart) {
          addToCart(e, item, price);
        }
      }}>
      Add to Cart
    </button>
  );
}
