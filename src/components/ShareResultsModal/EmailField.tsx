import React, { useState } from 'react';

import CheckMarkCircleSVG from './CheckMarkCircleSVG';

export default function EmailField({ url }: Props) {
  const [isCopied, setIsCopied] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <div className='cio-share-results-feature-group'>
      <div className='cio-share-results-description'>Share by email</div>
      <div className='cio-share-results-button-group'>
        <input
          className='cio-share-results-email-input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className='cio-share-results-share-button'
          type='button'
          onClick={() => {
            navigator.clipboard.writeText(url);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 5_000);
          }}>
          Send
        </button>
      </div>
      {isCopied && (
        <div className='cio-share-results-copied-notification'>
          <CheckMarkCircleSVG />
          <div>Email sent</div>
        </div>
      )}
    </div>
  );
}

type Props = {
  url: string;
};
