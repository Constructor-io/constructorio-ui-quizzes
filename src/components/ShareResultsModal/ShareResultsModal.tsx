import React from 'react';

export default function ShareResultsModal({ url }: Props) {
  return (
    <div className='cio-share-results-modal' role='presentation' onClick={() => null}>
      <div className='cio-share-results-container'>test</div>
    </div>
  );
}

type Props = {
  url: string;
};
