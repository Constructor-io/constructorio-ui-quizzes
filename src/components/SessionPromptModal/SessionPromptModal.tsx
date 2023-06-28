import React from 'react';
import CTAButton from '../CTAButton/CTAButton';

interface SessionPromptModalProps {
  continueSession: () => void;
  resetStoredState: () => void;
  setShowSessionPrompt: (showSessionPrompt: boolean) => void;
  showSessionPrompt: boolean;
}

export default function SessionPromptModal({
  continueSession,
  resetStoredState,
  setShowSessionPrompt,
  showSessionPrompt,
}: SessionPromptModalProps) {
  const onNoClickHandler = () => {
    resetStoredState();
    setShowSessionPrompt(false);
  };
  if (showSessionPrompt)
    return (
      <div className='cio-session-prompt-modal' role='presentation' onClick={onNoClickHandler}>
        <div className='cio-session-prompt-container'>
          <div
            className='cio-session-prompt-content'
            role='presentation'
            onClick={(e) => e.stopPropagation()}>
            <div>Do you want to continue where you left off?</div>
            <div className='cio-session-prompt-controls-container'>
              <CTAButton ctaText='No' type='button' onClick={onNoClickHandler} />
              <CTAButton
                type='button'
                ctaText='Yes'
                onClick={() => {
                  continueSession();
                  setShowSessionPrompt(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  return null;
}
