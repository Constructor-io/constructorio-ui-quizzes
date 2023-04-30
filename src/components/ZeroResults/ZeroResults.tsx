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
        Sorry, it seems like we couldn’t find results based on your answers.
      </h3>
      <p className='cio-zero-results-description'>
        This is embarrassing 😢. It might be that some of the questions are not properly set up from
        our end. Would you give us another try?
      </p>
      <CTAButton ctaText='Try Again' onClick={resetQuizClickHandler} />
    </div>
  );
}

export default ZeroResults;
