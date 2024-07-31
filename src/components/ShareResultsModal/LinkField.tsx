import React, { useEffect, useState } from 'react';

import CheckMarkCircleSVG from './CheckMarkCircleSVG';
import AlertCircleSVG from './AlertCircleSVG';
import Toaster from './Toaster';

interface LinkFieldProps {
  url: string;
}

export default function LinkField({ url }: LinkFieldProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showNotification, setShowNotification] = React.useState(false);

  const onCloseToaster = () => {
    setShowNotification(false);
    setIsCopied(false);
    setIsError(false);
  };

  useEffect(() => {
    if (isCopied || isError) {
      setShowNotification(true);
    }
  }, [isCopied, isError]);

  return (
    <div className='cio-share-results-feature-group'>
      <div className='cio-share-results-description'>Share by link</div>
      <div className='cio-share-results-button-group'>
        <input className='cio-share-results-link-input' value={url} disabled />
        <button
          className='cio-share-results-share-button'
          type='button'
          onClick={() => {
            try {
              navigator.clipboard.writeText(url);
              setIsCopied(true);
            } catch (_e) {
              setIsError(true);
            }
          }}>
          Copy link
        </button>
      </div>
      {showNotification && (
        <Toaster
          icon={isCopied ? CheckMarkCircleSVG : AlertCircleSVG}
          message={
            isCopied
              ? 'Link copied to clipboard'
              : 'Sorry, there was an error copying. Please try again.'
          }
          onCloseToaster={onCloseToaster}
        />
      )}
    </div>
  );
}
