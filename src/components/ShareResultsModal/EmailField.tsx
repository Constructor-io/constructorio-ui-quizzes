import React, { useEffect, useState } from 'react';

import CheckMarkCircleSVG from './CheckMarkCircleSVG';
import AlertCircleSVG from './AlertCircleSVG';
import Toaster from './Toaster';

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
  const [isInProgress, setIsInProgress] = useState(false);
  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = React.useState(false);

  const validate = () => {
    if (email.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError(null);
      return true;
    }
    setFormError({ type: 'validate', message: 'Please enter a valid email address' });
    return false;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInProgress) {
      return;
    }

    setShowNotification(false);
    const isValid = validate();
    if (!isValid) return;

    try {
      setIsInProgress(true);
      await onSubmit(email);
      setIsSubmitted(true);
    } catch (_e) {
      setFormError({
        type: 'callback',
        message: 'Sorry, there was an error sending. Please try again.',
      });
    }

    setIsInProgress(false);
  };

  const onCloseToaster = () => {
    setShowNotification(false);
    setIsSubmitted(false);
    setFormError(null);
  };

  useEffect(() => {
    if (isSubmitted || formError?.type === 'callback') {
      setShowNotification(true);
    }
  }, [isSubmitted, formError?.type]);

  return (
    <div className='cio-share-results-feature-group'>
      <form onSubmit={handleSubmit}>
        <div className='cio-share-results-description'>Share by email</div>
        <div className='cio-share-results-button-group'>
          <div className='cio-share-results-email-input-group'>
            <input
              className={`cio-share-results-email-input ${
                formError ? 'cio-share-results-email-input--error' : ''
              }`}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter an email address to receive and share the results'
            />
            {formError?.type === 'validate' && (
              <div className='cio-share-results-email-input-error-message'>{formError.message}</div>
            )}
          </div>
          <button
            className={`cio-share-results-share-button ${isInProgress ? 'disabled' : ''}`}
            type='submit'>
            Send
          </button>
        </div>
      </form>
      {showNotification && (
        <Toaster
          icon={isSubmitted ? CheckMarkCircleSVG : AlertCircleSVG}
          message={isSubmitted ? 'Email sent' : formError?.message}
          onCloseToaster={onCloseToaster}
        />
      )}
    </div>
  );
}
