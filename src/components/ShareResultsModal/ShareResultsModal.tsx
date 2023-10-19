import React from 'react';

import CloseSVG from './CloseSVG';
import LinkField from './LinkField';
import EmailField from './EmailField';

import { QuizResultsResponse } from '../../types';

export default function ShareResultsModal({
  showShareModal,
  setShowShareModal,
  results,
  basePath,
  onEmailResults,
}: Props) {
  if (!showShareModal) return null;

  const value = `${basePath}/?items=${encodeURIComponent(
    results.response?.results
      .filter((item) => item.data?.id)
      .map((item) => item.data!.id)
      .join(',') || ''
  )}&options=${encodeURIComponent(
    results.quiz_selected_options.map((option) => option.value).join(',')
  )}`;

  const handleClose = () => {
    setShowShareModal(false);
  };

  return (
    <div className='cio-share-results-modal' role='presentation'>
      <div className='cio-share-results-container'>
        <div className='cio-share-results-content' role='presentation'>
          <div className='cio-share-results-header'>
            <div className='cio-share-results-title'>Share results</div>
            <button onClick={handleClose} type='button' className='cio-modal-close-button'>
              <CloseSVG />
            </button>
          </div>
          <div>Share or save your quiz results with this link.</div>
          {onEmailResults && (
            <EmailField onSubmit={(email) => onEmailResults({ email, url: value })} />
          )}
          <LinkField url={value} />
        </div>
      </div>
    </div>
  );
}

type Props = {
  showShareModal: boolean;
  setShowShareModal: (show: boolean) => void;
  results: QuizResultsResponse;
  basePath?: string;
  onEmailResults?: (data: { email: string; url: string }) => void;
};
