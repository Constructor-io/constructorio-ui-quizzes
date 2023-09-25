import React from 'react';

interface SkipButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  propsGetters?: () => React.ButtonHTMLAttributes<HTMLButtonElement>;
  isSkippable: boolean;
}

function SkipButton(props: SkipButtonProps) {
  const {
    propsGetters,
    isSkippable = false,
    disabled,
    className = 'cio-button-container',
    ...rest
  } = props;

  if (!isSkippable) {
    return null;
  }

  return (
    <div className={`${className || ''}`}>
      {propsGetters && (
        // eslint-disable-next-line react/button-has-type
        <button {...rest} {...propsGetters()}>
          Skip
        </button>
      )}
    </div>
  );
}

export default SkipButton;
