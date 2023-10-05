import React from 'react';

interface SkipButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  propsGetters?: () => React.ButtonHTMLAttributes<HTMLButtonElement>;
}

function SkipButton(props: SkipButtonProps) {
  const { propsGetters, className = 'cio-button-container', ...rest } = props;

  return (
    <div className={`${className || ''}`}>
      {propsGetters && (
        // eslint-disable-next-line react/button-has-type
        <button {...rest} {...propsGetters()}>
          Skip question
        </button>
      )}
    </div>
  );
}

export default SkipButton;
