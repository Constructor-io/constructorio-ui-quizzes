import React from 'react';

export default function ShareResultsModal({ url, showShareModal, setShowShareModal }: Props) {
  if (!showShareModal) return null;

  return (
    <div
      className='cio-share-results-modal'
      role='presentation'
      onClick={() => setShowShareModal(false)}>
      <div className='cio-share-results-container'>test</div>
    </div>
  );
}

type Props = {
  url: string;
  showShareModal: boolean;
  setShowShareModal: (show: boolean) => void;
};
