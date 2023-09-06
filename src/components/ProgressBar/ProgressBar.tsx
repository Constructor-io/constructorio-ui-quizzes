import React, { useContext } from 'react';

import QuizContext from '../CioQuiz/context';

export default function ProgressBar() {
  const { state } = useContext(QuizContext);
  const currentQuestion = state?.quiz.currentQuestion;
  if (!currentQuestion?.next_question) return null;

  return (
    <div className='cio-question-progress-affixed-container'>
      <div className='cio-question-progress-progress-container'>
        <div
          className='cio-question-progress-progress-bar'
          style={{
            width: `${
              ((currentQuestion.next_question.id - 1) / currentQuestion.total_questions) * 100
            }%`,
          }}
        />
      </div>
    </div>
  );
}
