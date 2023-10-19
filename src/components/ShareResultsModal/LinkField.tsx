import React, { useState } from 'react';

import CheckMarkCircleSVG from './CheckMarkCircleSVG';

export default function LinkField({ url }: Props) {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div className='cio-share-results-feature-group'>
      <div className='cio-share-results-description'>Share by link</div>
      <div className='cio-share-results-button-group'>
        <input className='cio-share-results-link-input' value={url} disabled />
        <button
          className='cio-share-results-share-button'
          type='button'
          onClick={() => {
            navigator.clipboard.writeText(url);
            setIsCopied(true);
          }}>
          Copy link
        </button>
      </div>
      {isCopied && (
        <div className='cio-share-results-copied-notification'>
          <CheckMarkCircleSVG />
          <div>Link copied to clipboard</div>
        </div>
      )}
    </div>
  );
}

type Props = {
  url: string;
};
