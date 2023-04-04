import React from 'react';
import RedoSVG from './RedoSVG';

interface RedoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  redoText?: string;
}

function RedoButton(props: RedoButtonProps) {
  const { redoText = 'Redo Quiz', disabled, ...rest } = props;

  return (
    <button
      type='button'
      className={`${disabled ? 'cio-question-redo-button disabled' : 'cio-question-redo-button'}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}>
      <RedoSVG />
      <span>{redoText}</span>
    </button>
  );
}

export default RedoButton;
