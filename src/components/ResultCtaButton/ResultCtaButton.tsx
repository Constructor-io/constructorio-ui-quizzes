import React, { useContext } from 'react';
import { BrowseResultData } from '../../types';
import QuizContext from '../CioQuiz/context';

interface ResultCtaButtonProps {
  item: Partial<BrowseResultData>;
  className?: string;
  callback?: (item: Partial<BrowseResultData>) => any;
  price?: number;
}

export default function ResultCtaButton(props: ResultCtaButtonProps) {
  const { item, callback, className, price } = props;
  const { resultsResponse } = useContext(QuizContext);
  const { cioClient } = useContext(QuizContext);

  const clickHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (resultsResponse && resultsResponse.request && resultsResponse.response) {
      /* eslint-disable @typescript-eslint/naming-convention */
      const {
        quiz_id,
        quiz_session_id,
        quiz_version_id,
        request: { section },
      } = resultsResponse;
      /* eslint-enable @typescript-eslint/naming-convention */

      cioClient?.tracker.trackQuizConversion({
        quiz_id,
        quiz_version_id,
        quiz_session_id,
        item_id: item.data?.id,
        item_name: item.value,
        section,
        variation_id: item.data?.variation_id,
        revenue: (price && String(price)) || undefined,
      });
    }

    if (callback && typeof callback === 'function') {
      e.stopPropagation();
      callback(item);
    }
  };

  return (
    <button
      type='button'
      className={`cio-result-card-cta-button ${className || ''}`}
      onClick={clickHandler}>
      Add to Cart
    </button>
  );
}
