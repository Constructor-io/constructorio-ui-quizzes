interface CTAButtonProps {
  ctaText?: string;
}

function CTAButton(props: CTAButtonProps) {
  const { ctaText } = props;
  return (
    <button
      type="button"
      className="cio-question-cta-button"
    >
      { ctaText }
    </button>
  );
}

CTAButton.defaultProps = {
  ctaText: 'Continue',
};

export default CTAButton;
