import React, { useContext } from 'react';
import CTAButton from '../CTAButton/CTAButton';
import QuizContext from '../CioQuiz/context';
import LightbulbIconSVG from './LightbulbIconSVG';

function ZeroResults() {
  const { getResetQuizButtonProps } = useContext(QuizContext);

  return (
    <div className='cio-zero-results'>
      <div className='cio-zero-results-icon'>
        <LightbulbIconSVG />
      </div>
      <h3 className='cio-zero-results-title'>Let&apos;s try something else</h3>
      <p className='cio-zero-results-description'>
        We didn&apos;t find products matching all your preferences. Try adjusting a few answers to
        see more options.
      </p>
      <CTAButton ctaText='Retake Quiz' propsGetters={getResetQuizButtonProps} />
    </div>
  );
}

export default ZeroResults;
