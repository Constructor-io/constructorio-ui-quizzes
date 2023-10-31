import React, { useState } from 'react';

import CheckMarkCircleSVG from './CheckMarkCircleSVG';
import AlertCircleSVG from './AlertCircleSVG';

interface LinkFieldProps {
  url: string;
}

export default function LinkField({ url }: LinkFieldProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [isError, setIsError] = useState(false);

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
      {isCopied && (
        <div className='cio-share-results-notification'>
          <CheckMarkCircleSVG />
          <div>Link copied to clipboard</div>
        </div>
      )}
      {isError && (
        <div className='cio-share-results-notification'>
          <AlertCircleSVG />
          <div>Sorry, there was an error copying. Please try again.</div>
        </div>
      )}
    </div>
  );
}
