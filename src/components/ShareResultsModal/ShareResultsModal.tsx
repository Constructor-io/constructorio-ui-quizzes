import React from 'react';

import CloseSVG from './CloseSVG';
import LinkField from './LinkField';
import EmailField from './EmailField';

import { QuizResultsEventsProps, QuizReturnState } from '../../types';
import useShareResultsLink from '../../hooks/useShareResultsLink';

interface ShareResultsModalProps {
  onClose: () => void;
  quizState: QuizReturnState['quiz'];
  onEmailResults?: QuizResultsEventsProps.OnEmailResults;
}

export default function ShareResultsModal({
  onClose,
  quizState,
  onEmailResults,
}: ShareResultsModalProps) {
  const url = useShareResultsLink(quizState);
  const results = quizState?.results;

  return (
    <div className='cio-share-results-modal' role='presentation' onClick={onClose}>
      <div className='cio-share-results-container'>
        <div
          className='cio-share-results-content'
          onClick={(e) => e.stopPropagation()}
          role='presentation'>
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
          {onEmailResults && (
            <EmailField onSubmit={(email) => onEmailResults({ email, url, results })} />
          )}
          <LinkField url={url} />
        </div>
      </div>
    </div>
  );
}
