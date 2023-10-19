import React from 'react';
import Modal from 'react-modal';

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
  const urlObj = new URL(basePath || window.location.href);
  const existingParams = urlObj.searchParams;
  existingParams.set(
    'items',
    quizState.results?.response?.results
      .filter((item) => item.data?.id)
      .map((item) => item.data!.id)
      .join(',') || ''
  );
  existingParams.set(
    'attributes',
    quizState.selectedOptionsWithAttributes?.map((option) => option).join(',') || ''
  );
  const value = urlObj.toString();

  return (
    <Modal
      isOpen={showShareModal}
      onRequestClose={onClose}
      ariaHideApp={false}
      style={{
        content: {
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          padding: '2rem',
          borderRadius: '8px',
          position: 'unset',
          maxWidth: '600px',
          width: '100%',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <div className='cio-quiz'>
        <div className='cio-share-results-content'>
          <div className='cio-share-results-header'>
            <div className='cio-share-results-title'>Share results</div>
            <button onClick={onClose} type='button' className='cio-modal-close-button'>
              <CloseSVG />
            </button>
          </div>
          <div>
            {onEmailResults
              ? 'Share or save your quiz results through email or using the link below.'
              : 'Share or save your quiz results with this link.'}
          </div>
          {onEmailResults && (
            <EmailField onSubmit={(email) => onEmailResults({ email, url: value })} />
          )}
          <LinkField url={value} />
        </div>
      </div>
    </Modal>
  );
}

type Props = {
  showShareModal: boolean;
  onClose: () => void;
  quizState: QuizReturnState['quiz'];
  basePath?: string;
  onEmailResults?: (data: { email: string; url: string }) => void;
};
