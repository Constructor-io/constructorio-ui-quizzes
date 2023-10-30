import React from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import CheckMarkCircleSVG from './CheckMarkCircleSVG';

const emailSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
});

interface EmailFieldProps {
  onSubmit: (email: string) => Promise<void>;
}

export default function EmailField({ onSubmit }: EmailFieldProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<{ email: string }>({
    resolver: zodResolver(emailSchema),
  });

  return (
    <div className='cio-share-results-feature-group'>
      <form onSubmit={handleSubmit(({ email }) => onSubmit(email))}>
        <div className='cio-share-results-description'>Share by email</div>
        <div className='cio-share-results-button-group'>
          <div className='cio-share-results-email-input-group'>
            <input
              className={`cio-share-results-email-input ${
                errors.email ? 'cio-share-results-email-input--error' : ''
              }`}
              {...register('email')}
            />
            {errors.email && (
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
        <div className='cio-share-results-copied-notification'>
          <CheckMarkCircleSVG />
          <div>Email sent</div>
        </div>
      )}
    </div>
  );
}
