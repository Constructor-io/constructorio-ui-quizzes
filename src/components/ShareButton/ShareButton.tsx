import React, { useContext } from 'react';
import ShareSVG from './ShareSVG';
import QuizContext from '../CioQuiz/context';

function ShareButton(props: Props) {
  const { shareText = 'Share Results', disabled, ...rest } = props;
  const { getShareResultsButtonProps, state } = useContext(QuizContext);
  // TODO: Get state here and create a URL out of it

  if (getShareResultsButtonProps) {
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        {...rest}
        {...getShareResultsButtonProps('secondary')}
        onClick={() => console.log('test')}>
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
