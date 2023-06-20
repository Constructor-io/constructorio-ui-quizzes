import React from 'react';
import BackButton from '../BackButton/BackButton';
import CTAButton from '../CTAButton/CTAButton';

interface ControlBarProps {
  ctaButtonText?: string;
}

function ControlBar(props: ControlBarProps) {
  const { ctaButtonText } = props;

  return (
    <div className='cio-question-buttons-container'>
      <BackButton />
      <CTAButton ctaText={ctaButtonText} />
    </div>
  );
}

export default ControlBar;
