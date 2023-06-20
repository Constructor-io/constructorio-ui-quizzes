import React, { useContext } from 'react';
import RedoSVG from './RedoSVG';
import QuizContext from '../CioQuiz/context';

interface RedoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  redoText?: string;
}

function RedoButton(props: RedoButtonProps) {
  const { redoText = 'Redo Quiz', disabled, ...rest } = props;
  const { getResetQuizButtonProps } = useContext(QuizContext);

  if (getResetQuizButtonProps) {
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        {...getResetQuizButtonProps()}>
        <RedoSVG />
        <span>{redoText}</span>
      </button>
    );
  }
  return null;
}

export default RedoButton;
