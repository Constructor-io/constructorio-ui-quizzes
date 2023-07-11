import React, { useContext } from 'react';
import BackButton from '../BackButton/BackButton';
import CTAButton from '../CTAButton/CTAButton';
import QuizContext from '../CioQuiz/context';

interface ControlBarProps {
  ctaButtonText?: string;
  instructions?: string;
}

function ControlBar(props: ControlBarProps) {
  const { ctaButtonText, instructions } = props;
  const { getNextQuestionButtonProps } = useContext(QuizContext);

  return (
    <div className='cio-question-buttons-container'>
      <BackButton />
      {instructions && <div className='cio-question-buttons-container-text'>{instructions}</div>}
      <CTAButton ctaText={ctaButtonText} propsGetters={getNextQuestionButtonProps} />
    </div>
  );
}

export default ControlBar;
