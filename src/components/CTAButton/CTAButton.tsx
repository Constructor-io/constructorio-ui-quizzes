import React, { useContext } from 'react';
import QuizContext from '../CioQuiz/context';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ctaText?: string;
}

function CTAButton(props: CTAButtonProps) {
  const { ctaText = 'Continue', disabled, className = 'cio-button-container', ...rest } = props;
  const { getNextQuestionButtonProps } = useContext(QuizContext);

  return (
    <div className={`${className || ''}`}>
      {getNextQuestionButtonProps && (
        // eslint-disable-next-line react/button-has-type
        <button {...rest} {...getNextQuestionButtonProps()}>
          {ctaText || 'Continue'}
        </button>
      )}
    </div>
  );
}

export default CTAButton;
