import React, { useContext } from 'react';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuizContext from '../CioQuiz/context';
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import { renderImages } from '../../utils';
import ControlBar from '../ControlBar/ControlBar';

export default function CoverTypeQuestion() {
  const { state } = useContext(QuizContext);
  let question;

  if (state?.quiz.currentQuestion) {
    question = state?.quiz.currentQuestion.next_question;
  }

  const hasImage = question?.images?.primary_url;

  if (question) {
    return (
      <div
        className={`
        cio-container${hasImage ? '--with-image' : ''}
        cio-cover-question-container${hasImage ? '--with-image' : ''}
      `}>
        <div className='cio-question-content'>
          <QuestionTitle title={question?.title} />
          <QuestionDescription description={question.description} />
          <ControlBar ctaButtonText={question?.cta_text} />
        </div>
        {hasImage ? renderImages(question.images, 'cio-question-image-container') : ''}
      </div>
    );
  }

  return null;
}
