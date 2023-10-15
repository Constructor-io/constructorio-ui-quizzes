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

  return (
    <div className={`${className || ''}`}>
      {propsGetters && (
        // eslint-disable-next-line react/button-has-type
        <button {...rest} {...propsGetters()}>
          {skipQuestionButtonText || 'Skip'}
        </button>
      )}
    </div>
  );
}

export default SkipButton;
