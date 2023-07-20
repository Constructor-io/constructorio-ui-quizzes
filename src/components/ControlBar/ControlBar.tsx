import React from 'react';
import BackButton from '../BackButton/BackButton';
import CTAButton from '../CTAButton/CTAButton';

interface ControlBarProps {
  showBackButton?: boolean;
  isNextButtonDisabled?: boolean;
  backButtonHandler?: () => void;
  nextButtonHandler: () => void;
  ctaButtonText?: string;
}

function ControlBar(props: ControlBarProps) {
  const {
    showBackButton,
    backButtonHandler,
    ctaButtonText,
    nextButtonHandler,
    isNextButtonDisabled,
  } = props;

  return (
    <div className='cio-question-buttons-container'>
      {showBackButton && <BackButton onClick={backButtonHandler} />}
      <CTAButton
        disabled={isNextButtonDisabled}
        ctaText={ctaButtonText}
        onClick={nextButtonHandler}
      />
    </div>
  );
}

export default ControlBar;
