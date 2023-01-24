import './ctaButton.css';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ctaText?: string;
}

function CTAButton(props: CTAButtonProps) {
  const { ctaText = 'Continue', disabled, ...rest } = props;

  return (
    <button
      type='button'
      className={`${disabled ? 'cio-question-cta-button disabled' : 'cio-question-cta-button'}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}>
      {ctaText || 'Continue'}
    </button>
  );
}

export default CTAButton;