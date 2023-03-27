import React from 'react';
import { BrowseResultData } from '../../types';

interface ResultCtaButtonProps {
  item: Partial<BrowseResultData>;
  className?: string;
  callback?: (item: Partial<BrowseResultData>) => any;
}

export default function ResultCtaButton(props: ResultCtaButtonProps) {
  const { item, callback, className } = props;

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (callback && typeof callback === 'function') {
      callback(item);
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
