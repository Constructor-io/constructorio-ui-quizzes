import React, { useContext } from 'react';
import ShareSVG from './ShareSVG';
import QuizContext from '../CioQuiz/context';

function ShareButton(props: Props) {
  const { shareText = 'Share Results', disabled, onClick, ...rest } = props;
  const { getShareResultsButtonProps } = useContext(QuizContext);

  if (getShareResultsButtonProps) {
    return (
      <button {...rest} {...getShareResultsButtonProps()} type='button' onClick={onClick}>
        <ShareSVG />
        <span>{shareText}</span>
      </button>
    );
  }
  return null;
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shareText?: string;
  onClick: () => void;
}

export default ShareButton;
