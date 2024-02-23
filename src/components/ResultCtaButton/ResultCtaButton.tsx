import React, { useContext } from 'react';
import { QuizResultDataPartial } from '../../types';
import QuizContext from '../CioQuiz/context';

interface ResultCtaButtonProps {
  item: QuizResultDataPartial;
  price?: number | string;
}

export default function ResultCtaButton(props: ResultCtaButtonProps) {
  const { item, price } = props;
  const { getAddToCartButtonProps } = useContext(QuizContext);

  if (getAddToCartButtonProps) {
    return (
      // eslint-disable-next-line react/button-has-type
      <button {...getAddToCartButtonProps(item, price)}>Add to Cart</button>
    );
  }

  return null;
}
