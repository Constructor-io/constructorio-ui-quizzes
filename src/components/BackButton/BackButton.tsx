import React from 'react';

function BackButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  // eslint-disable-next-line
  const { disabled } = props;

  return (
    <button
      type='button'
      className={`cio-question-back-button ${disabled ? 'disabled' : ''}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}>
      <svg width='8' height='12' viewBox='0 0 8 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M6.06313 1.06268L0.964522 5.43176C0.882383 5.50218 0.816449 5.58954 0.771245 5.68785C0.726041 5.78615 0.702637 5.89306 0.702637 6.00126C0.702637 6.10946 0.726041 6.21637 0.771245 6.31467C0.816449 6.41297 0.882383 6.50033 0.964522 6.57076L6.06313 10.9398C6.5498 11.3568 7.30153 11.0111 7.30153 10.3703V1.63093C7.30153 0.990168 6.5498 0.644468 6.06313 1.06268Z'
          fill='currentColor'
        />
      </svg>
    </button>
  );
}

export default BackButton;
