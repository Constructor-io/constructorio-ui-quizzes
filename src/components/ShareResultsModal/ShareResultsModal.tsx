import React from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

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
  containerRef,
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
      open={showShareModal}
      onClose={onClose}
      container={containerRef}
      center
      showCloseIcon={false}
      classNames={{
        modal: 'cio-share-results-container',
        modalContainer: 'cio-share-results-modal-container',
      }}>
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
    </Modal>
  );
}

type Props = {
  showShareModal: boolean;
  onClose: () => void;
  quizState: QuizReturnState['quiz'];
  basePath?: string;
  onEmailResults?: (data: { email: string; url: string }) => void;
  containerRef: Element;
};
