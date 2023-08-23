import React from 'react';

export default function ProgressBar({ totalQuestions, currentQuestionId }: Props) {
  return (
    <div className='cio-question-progress-affixed-container'>
      <div className='cio-question-progress-progress-container'>
        <div
          className='cio-question-progress-progress-bar'
          style={{
            width: `${((currentQuestionId - 1) / totalQuestions) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

type Props = {
  totalQuestions: number;
  currentQuestionId: number;
};
