import React from 'react';
import { useForm } from 'react-hook-form';

import CheckMarkCircleSVG from './CheckMarkCircleSVG';
import AlertCircleSVG from './AlertCircleSVG';

interface EmailFieldProps {
  onSubmit: (email: string) => Promise<void>;
}

export default function EmailField({ onSubmit }: EmailFieldProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    setError,
  } = useForm<{ email: string }>();

  return (
    <div className='cio-share-results-feature-group'>
      <form
        onSubmit={handleSubmit(async ({ email }) => {
          try {
            await onSubmit(email);
          } catch (_e) {
            setError('email', {
              type: 'callback',
              message: 'Sorry, there was an error sending. Please try again.',
            });
          }
        })}>
        <div className='cio-share-results-description'>Share by email</div>
        <div className='cio-share-results-button-group'>
          <div className='cio-share-results-email-input-group'>
            <input
              className={`cio-share-results-email-input ${
                errors.email ? 'cio-share-results-email-input--error' : ''
              }`}
              {...register('email', {
                validate: (value) => {
                  if (value.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return true;
                  return 'Please enter a valid email address';
                },
              })}
            />
            {errors.email?.type === 'validate' && (
              <div className='cio-share-results-email-input-error-message'>
                {errors.email.message}
              </div>
            )}
          </div>
          <button className='cio-share-results-share-button' type='submit'>
            Send
          </button>
        </div>
      </form>
      {isSubmitSuccessful && (
        <div className='cio-share-results-notification'>
          <CheckMarkCircleSVG />
          <div>Email sent</div>
        </div>
      )}
      {errors.email?.type === 'callback' && (
        <div className='cio-share-results-notification'>
          <AlertCircleSVG />
          <div>{errors.email.message}</div>
        </div>
      )}
    </div>
  );
}
