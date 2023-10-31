import React, { useState } from 'react';

import CheckMarkCircleSVG from './CheckMarkCircleSVG';
import AlertCircleSVG from './AlertCircleSVG';

interface EmailFieldProps {
  onSubmit: (email: string) => Promise<void>;
}

interface FormError {
  type: 'callback' | 'validate';
  message: string;
}

export default function EmailField({ onSubmit }: EmailFieldProps) {
  const [formError, setFormError] = useState<FormError | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const validate = () => {
    if (email.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError(null);
      return true;
    }
    setFormError({ type: 'validate', message: 'Please enter a valid email address' });
    return false;
  };

  return (
    <div className='cio-share-results-feature-group'>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const isValid = validate();
          if (!isValid) return;

          try {
            await onSubmit(email);
            setIsSubmitted(true);
          } catch (_e) {
            setFormError({
              type: 'callback',
              message: 'Sorry, there was an error sending. Please try again.',
            });
          }
        }}>
        <div className='cio-share-results-description'>Share by email</div>
        <div className='cio-share-results-button-group'>
          <div className='cio-share-results-email-input-group'>
            <input
              className={`cio-share-results-email-input ${
                formError ? 'cio-share-results-email-input--error' : ''
              }`}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formError?.type === 'validate' && (
              <div className='cio-share-results-email-input-error-message'>{formError.message}</div>
            )}
          </div>
          <button className='cio-share-results-share-button' type='submit'>
            Send
          </button>
        </div>
      </form>
      {isSubmitted && (
        <div className='cio-share-results-notification'>
          <CheckMarkCircleSVG />
          <div>Email sent</div>
        </div>
      )}
      {formError?.type === 'callback' && (
        <div className='cio-share-results-notification'>
          <AlertCircleSVG />
          <div>{formError.message}</div>
        </div>
      )}
    </div>
  );
}
