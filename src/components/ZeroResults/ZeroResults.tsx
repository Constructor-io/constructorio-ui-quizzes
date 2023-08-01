import React, { useContext } from 'react';
import CTAButton from '../CTAButton/CTAButton';
import QuizContext from '../CioQuiz/context';

function ZeroResults() {
  const { getResetQuizButtonProps } = useContext(QuizContext);

  return (
    <div className='cio-zero-results'>
      <h3 className='cio-zero-results-subtitle'>
        Sorry, we couldn’t find products that perfectly match your preferences.
      </h3>
      <CTAButton ctaText='Retake Quiz' propsGetters={getResetQuizButtonProps} />
    </div>
  );
}

export default ZeroResults;
