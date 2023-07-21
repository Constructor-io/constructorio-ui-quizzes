import React from 'react';
import CTAButton from '../CTAButton/CTAButton';

interface ZeroResultsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  resetQuizClickHandler?: () => {};
}

function ZeroResults(props: ZeroResultsProps) {
  const { resetQuizClickHandler } = props;

  return (
    <div className='cio-zero-results'>
      <h3 className='cio-zero-results-subtitle'>
        Sorry, we couldn’t find products that perfectly match your preferences.
      </h3>
      <CTAButton ctaText='Redo quiz' onClick={resetQuizClickHandler} />
    </div>
  );
}

export default ZeroResults;
