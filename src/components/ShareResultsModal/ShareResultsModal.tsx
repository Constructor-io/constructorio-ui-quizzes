import React from 'react';

import CloseSVG from './CloseSVG';
import LinkField from './LinkField';
import EmailField from './EmailField';

import { QuizReturnState } from '../../types';

export default function ShareResultsModal({
  showShareModal,
  onClose,
  quizState,
  basePath,
  onEmailResults,
}: Props) {
  if (!showShareModal) return null;

  const urlObj = new URL(basePath || window.location.href);
  const existingParams = urlObj.searchParams;
  existingParams.set(
    'items',
    encodeURIComponent(
      quizState.results?.response?.results
        .filter((item) => item.data?.id)
        .map((item) => item.data!.id)
        .join(',') || ''
    )
  );
  existingParams.set(
    'attributes',
    encodeURIComponent(
      quizState.selectedOptionsWithAttributes?.map((option) => option).join(',') || ''
    )
  );
  const value = urlObj.toString();

  const handleClose = () => {
    onClose();
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
  onClose: () => void;
  quizState: QuizReturnState['quiz'];
  basePath?: string;
  onEmailResults?: (data: { email: string; url: string }) => void;
};
