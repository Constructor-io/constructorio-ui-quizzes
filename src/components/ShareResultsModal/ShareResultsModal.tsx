import React, { useState } from 'react';

import CloseSVG from './CloseSVG';
import CheckMarkCircleSVG from './CheckMarkCircleSVG';

import { QuizResultsResponse } from '../../types';

export default function ShareResultsModal({ showShareModal, setShowShareModal, results }: Props) {
  const [isCopied, setIsCopied] = useState(false);
  if (!showShareModal) return null;

  const handleClose = () => {
    setIsCopied(false);
    setShowShareModal(false);
  };

  return (
    <div className='cio-share-results-modal' role='presentation'>
      <div className='cio-share-results-container'>
        <div className='cio-share-results-content' role='presentation'>
          <div className='cio-share-results-heading'>
            <div className='cio-share-results-title'>Share results</div>
            <button onClick={handleClose} type='button' className='cio-modal-close-button'>
              <CloseSVG />
            </button>
          </div>
          <div>Share or save your quiz results with this link.</div>
          <div className='cio-share-results-button-group'>
            <input
              className='cio-share-results-input'
              value='http://www.website.com/quiz/results/121323442'
              disabled
            />
            <button
              className='cio-share-results-share-button'
              type='button'
              onClick={() => {
                console.log(results);
                navigator.clipboard.writeText('test');
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
      </div>
    </div>
  );
}

type Props = {
  showShareModal: boolean;
  setShowShareModal: (show: boolean) => void;
  results: QuizResultsResponse;
};
