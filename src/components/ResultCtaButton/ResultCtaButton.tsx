import React from 'react';
import { BrowseResultData } from '../../types';

interface ResultCtaButtonProps {
  items: Array<Partial<BrowseResultData>>;
  className?: string;
  callback?: (items: Array<Partial<BrowseResultData>>) => any;
}

export default function ResultCtaButton(props: ResultCtaButtonProps) {
  const { items, callback, className } = props;

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (callback && typeof callback === 'function') {
      callback(items);
    }
  };

  return (
    <button
      type='button'
      className={`cio-result-card-cta-button ${className}`}
      onClick={clickHandler}>
      Add to Cart
    </button>
  );
}
