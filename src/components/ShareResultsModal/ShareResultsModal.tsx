import React from 'react';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

import CloseSVG from './CloseSVG';
import LinkField from './LinkField';
import EmailField from './EmailField';

import { QuizResultsEventsProps, QuizReturnState } from '../../types';
import useShareResultsLink from '../../hooks/useShareResultsLink';

interface ShareResultsModalProps {
  showShareModal: boolean;
  onClose: () => void;
  quizState: QuizReturnState['quiz'];
  onEmailResults?: QuizResultsEventsProps.OnEmailResults;
  containerRef: Element;
}

export default function ShareResultsModal({
  showShareModal,
  onClose,
  quizState,
  onEmailResults,
  containerRef,
}: ShareResultsModalProps) {
  const url = useShareResultsLink(quizState);

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
          <button
            onClick={onClose}
            type='button'
            className='cio-modal-close-button'
            aria-label='Close button'>
            <CloseSVG />
          </button>
        </div>
        <div>
          {onEmailResults
            ? 'Share or save your quiz results through email or using the link below.'
            : 'Share or save your quiz results with this link.'}
        </div>
        {onEmailResults && <EmailField onSubmit={(email) => onEmailResults({ email, url })} />}
        <LinkField url={url} />
      </div>
    </Modal>
  );
}
