import * as React from 'react';
import CloseSVG from './CloseSVG';

export interface NotificationProps {
  icon: (props: any) => JSX.Element;
  message?: string;
  onCloseToaster: () => void;
}

export default function Toaster(props: NotificationProps) {
  const { icon: Icon, message, onCloseToaster } = props;

  return (
    <div className='cio-share-results-notification'>
      <Icon />
      <div>{message}</div>
      <CloseSVG className='cio-toaster-close-button' onClick={() => onCloseToaster()} />
    </div>
  );
}
