import React from 'react';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ctaText?: string;
  propsGetters?: () => React.ButtonHTMLAttributes<HTMLButtonElement>;
}

function CTAButton(props: CTAButtonProps) {
  const {
    propsGetters,
    ctaText = 'Continue',
    disabled,
    className = 'cio-button-container',
    ...rest
  } = props;

  return (
    <div className={`${className || ''}`}>
      {propsGetters && (
        // eslint-disable-next-line react/button-has-type
        <button {...rest} {...propsGetters()}>
          {ctaText || 'Continue'}
        </button>
      )}
      <span id='next-button-help' style={{ display: 'none' }}>
        Fill required fields to enable button.
      </span>
    </div>
  );
}

export default CTAButton;
