import React from 'react';

interface SkipButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  propsGetters?: () => React.ButtonHTMLAttributes<HTMLButtonElement>;
  skipQuestionButtonText?: string;
}

function SkipButton(props: SkipButtonProps) {
  const {
    propsGetters,
    skipQuestionButtonText,
    className = 'cio-button-container',
    ...rest
  } = props;

  const buttonText = skipQuestionButtonText || 'Skip';

  return (
    <div className={`${className || ''}`}>
      {propsGetters && (
        // eslint-disable-next-line react/button-has-type
        <button {...rest} {...propsGetters()} title={buttonText}>
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default SkipButton;
