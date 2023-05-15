import React from 'react';
import CTAButton from '../CTAButton/CTAButton';

interface SessionPromptModalProps {
  continueSession: () => void;
  setShowSessionPrompt: (showSessionPrompt: boolean) => void;
  showSessionPrompt: boolean;
}

export default function SessionPromptModal({
  continueSession,
  setShowSessionPrompt,
  showSessionPrompt,
}: SessionPromptModalProps) {
  if (showSessionPrompt)
    return (
      <div className='cio-session-prompt-modal'>
        <div className='cio-session-prompt-container'>
          <div className='cio-session-prompt-content'>
            <div>Do you want to continue where you left off?</div>
            <div className='cio-session-prompt-controls-container'>
              <CTAButton ctaText='No' type='button' onClick={() => setShowSessionPrompt(false)} />
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
