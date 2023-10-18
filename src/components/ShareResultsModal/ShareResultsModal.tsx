import React from 'react';

import { QuizResultsResponse } from '../../types';

export default function ShareResultsModal({ showShareModal, setShowShareModal, results }: Props) {
  console.log('🚀 ~ file: ShareResultsModal.tsx:7 ~ ShareResultsModal ~ state:', results);

  if (!showShareModal) return null;

  return (
    <div className='cio-share-results-modal' role='presentation'>
      <div className='cio-share-results-container'>
        <div className='cio-share-results-content' role='presentation'>
          <button onClick={() => setShowShareModal(false)} type='button'>
            close
          </button>
        </div>
      </div>
    </div>
  );
}

type Props = {
  showShareModal: boolean;
  setShowShareModal: (show: boolean) => void;
  results: QuizResultsResponse;
};
