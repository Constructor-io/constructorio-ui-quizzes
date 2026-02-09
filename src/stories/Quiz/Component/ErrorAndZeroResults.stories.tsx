import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ErrorIconSVG from '../../../components/CioQuiz/ErrorIconSVG';
import StoryPreview from '../utils/StoryPreview';

const meta: Meta = {
  title: 'Quiz/CioQuiz/ErrorState',
};

export default meta;

function ErrorStateComponent() {
  return (
    <div className='cio-quiz-error'>
      <div className='cio-error-message'>
        <div className='cio-error-icon'>
          <ErrorIconSVG />
        </div>
        <h3 className='cio-error-title'>Something went wrong</h3>
        <p className='cio-error-description'>
          Something unexpected happened. Please retake the quiz to continue.
        </p>
        <button type='button' className='cio-question-cta-button'>
          Retake Quiz
        </button>
      </div>
    </div>
  );
}

function ErrorStateDecorator() {
  return (
    <div className='cio-quiz'>
      <StoryPreview Component={ErrorStateComponent} />
    </div>
  );
}

export const ErrorState: StoryObj = {
  render: () => <ErrorStateComponent />,
  decorators: [() => ErrorStateDecorator()],
};
