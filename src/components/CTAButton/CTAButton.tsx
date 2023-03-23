import React from 'react';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ctaText?: string;
}

function CTAButton(props: CTAButtonProps) {
  const { ctaText = 'Continue', disabled, className = 'cio-button-container', ...rest } = props;

  return (
    <div className={`${className}`}>
      <button
        type='button'
        className={`${disabled ? 'cio-question-cta-button disabled' : 'cio-question-cta-button'}`}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}>
        {ctaText || 'Continue'}
      </button>
    </div>
  );
}

export default CTAButton;
