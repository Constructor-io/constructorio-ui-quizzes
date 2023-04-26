import React, { KeyboardEvent, useContext } from 'react';
import { BrowseResultData } from '../../types';
import ResultCtaButton from '../ResultCtaButton/ResultCtaButton';
import QuizContext from '../CioQuiz/context';

interface ResultCardProps {
  result: Partial<BrowseResultData>;
  addToCartCallback: (clickedResult: Partial<BrowseResultData>) => any;
  clickItemCallback?: (clickedResult: Partial<BrowseResultData>) => any;
  salePriceKey?: string;
  regularPriceKey?: string;
  resultPosition: number;
}

export default function ResultCard(props: ResultCardProps) {
  const {
    result,
    addToCartCallback,
    clickItemCallback: customClickItemCallback,
    salePriceKey,
    regularPriceKey,
    resultPosition,
  } = props;
  const { resultsResponse, cioClient } = useContext(QuizContext);
  const salePrice = salePriceKey && result?.data?.[salePriceKey];
  const regularPrice = regularPriceKey && result?.data?.[regularPriceKey];

  const clickItemCallback = () => {
    /* eslint-disable @typescript-eslint/naming-convention */
    if (resultsResponse && resultsResponse.request && resultsResponse.response) {
      const {
        quiz_id,
        quiz_session_id,
        quiz_version_id,
        result_id,
        request: { section, page, num_results_per_page },
        response: { total_num_results },
      } = resultsResponse;
      /* eslint-enable @typescript-eslint/naming-convention */

      cioClient?.tracker.trackQuizResultClick({
        quiz_id,
        quiz_version_id,
        quiz_session_id,
        item_id: result.data?.id,
        item_name: result?.value,
        section,
        result_count: total_num_results,
        result_page: page,
        result_id,
        result_position_on_page: resultPosition,
        num_results_per_page,
      });
    }

    if (customClickItemCallback && typeof customClickItemCallback === 'function') {
      customClickItemCallback(result);
    }
  };

  const clickHandler = () => {
    clickItemCallback();
  };

  const keyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event?.key === ' ' || event?.key === 'Enter') {
      clickItemCallback();
    }
  };

  const resultCardContent = () => (
    <>
      <div className='cio-result-card-image'>
        <img src={result.data?.image_url} alt='product' />
      </div>
      <div className='cio-result-card-text'>
        <p className='cio-result-card-title'>{result.value}</p>
        <div className='cio-result-card-prices'>
          {salePrice && <span className='cio-result-card-sale-price'>${salePrice}</span>}
          {regularPrice && (
            <span className={`cio-result-card-regular-price${salePrice ? '--strike-through' : ''}`}>
              ${regularPrice}
            </span>
          )}
        </div>
      </div>
      <ResultCtaButton
        item={result}
        callback={addToCartCallback}
        price={salePrice || regularPrice}
      />
    </>
  );

  const resultCardContentWithLink = () => (
    <a className='cio-result-card-anchor' href={result.data?.url}>
      {resultCardContent()}
    </a>
  );

  return (
    <div
      onClick={clickHandler}
      onKeyDown={keyDownHandler}
      className='cio-result-card'
      role='button'
      tabIndex={0}>
      {!customClickItemCallback ? resultCardContentWithLink() : resultCardContent()}
    </div>
  );
}
