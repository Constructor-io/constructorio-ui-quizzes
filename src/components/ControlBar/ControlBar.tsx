import React, { useContext } from 'react';
import BackButton from '../BackButton/BackButton';
import CTAButton from '../CTAButton/CTAButton';
import QuizContext from '../CioQuiz/context';

interface ControlBarProps {
  ctaButtonText?: string;
}

function ControlBar(props: ControlBarProps) {
  const { ctaButtonText } = props;
  const { getNextQuestionButtonProps } = useContext(QuizContext);

  return (
    <div className='cio-question-buttons-container'>
      <BackButton />
      <CTAButton ctaText={ctaButtonText} propsGetters={getNextQuestionButtonProps} />
    </div>
  );
}

export default ControlBar;
