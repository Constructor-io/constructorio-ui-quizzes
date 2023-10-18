import React from 'react';

import CloseSVG from './CloseSVG';

import { QuizResultsResponse } from '../../types';

export default function ShareResultsModal({ showShareModal, setShowShareModal, results }: Props) {
  if (!showShareModal) return null;

  return (
    <div
      className='cio-share-results-modal'
      role='presentation'
      onClick={() => setShowShareModal(false)}>
      <div className='cio-share-results-container'>
        <div className='cio-share-results-content' role='presentation'>
          <div className='cio-share-results-heading'>
            <div className='cio-share-results-title'>Share results</div>
            <button
              onClick={() => setShowShareModal(false)}
              type='button'
              className='cio-modal-close-button'>
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
              onClick={() => console.log(results)}>
              Copy link
            </button>
          </div>
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
