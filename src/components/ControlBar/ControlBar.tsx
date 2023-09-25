import React, { useContext } from 'react';
import BackButton from '../BackButton/BackButton';
import CTAButton from '../CTAButton/CTAButton';
import SkipButton from '../SkipButton/SkipButton';
import QuizContext from '../CioQuiz/context';

interface ControlBarProps {
  ctaButtonText?: string;
  isSkippable: boolean;
}

function ControlBar(props: ControlBarProps) {
  const { ctaButtonText, isSkippable } = props;
  const { getNextQuestionButtonProps, getSkipQuestionButtonProps } = useContext(QuizContext);

  return (
    <div className='cio-question-buttons-container'>
      <BackButton />
      <div className='cio-question-buttons-group'>
        <SkipButton isSkippable={isSkippable} propsGetters={getSkipQuestionButtonProps} />
        <CTAButton ctaText={ctaButtonText} propsGetters={getNextQuestionButtonProps} />
      </div>
    </div>
  );
}

export default ControlBar;
