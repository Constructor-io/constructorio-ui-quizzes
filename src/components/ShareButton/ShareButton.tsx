import React, { useContext } from 'react';
import ShareSVG from './ShareSVG';
import QuizContext from '../CioQuiz/context';

function ShareButton(props: Props) {
  const { shareText = 'Share Results', disabled, ...rest } = props;
  // TODO: Create props for share button as well
  const { getResetQuizButtonProps } = useContext(QuizContext);

  if (getResetQuizButtonProps) {
    return (
      // eslint-disable-next-line react/button-has-type
      <button {...rest} {...getResetQuizButtonProps('secondary')}>
        <ShareSVG />
        <span>{shareText}</span>
      </button>
    );
  }
  return null;
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shareText?: string;
}

export default ShareButton;
