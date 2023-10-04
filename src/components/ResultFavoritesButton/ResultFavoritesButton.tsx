import React, { useContext } from 'react';
import { QuizResultDataPartial } from '../../types';
import QuizContext from '../CioQuiz/context';

interface ResultFavoritesButtonProps {
  item: QuizResultDataPartial;
  price?: number;
}

export interface Favorited {
  [key: string]: boolean;
}

export default function ResultFavoritesButton(props: ResultFavoritesButtonProps) {
  const { item, price } = props;
  const { getAddToFavoritesButtonProps } = useContext(QuizContext);

  if (getAddToFavoritesButtonProps) {
    return (
      // eslint-disable-next-line react/button-has-type
      <button {...getAddToFavoritesButtonProps(item, price)}>
        <svg
          width='21'
          height='21'
          viewBox='0 0 24 24'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'>
          <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' />
        </svg>
      </button>
    );
  }

  return null;
}
