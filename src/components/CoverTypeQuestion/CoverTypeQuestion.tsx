import React, { useContext } from 'react';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuizContext from '../CioQuiz/context';
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import { renderImages } from '../../utils';
import ControlBar from '../ControlBar/ControlBar';

export default function CoverTypeQuestion() {
  const { state, previousQuestion, nextQuestion } = useContext(QuizContext);
  let question;

  if (state?.quiz.currentQuestion) {
    question = state?.quiz.currentQuestion.next_question;
  }

  const hasImage = question?.images?.primary_url;

  const onNextClick = () => {
    if (nextQuestion) {
      nextQuestion();
    }
  };

  if (question) {
    return (
      <div
        className={`
        cio-container${hasImage ? '--with-image' : ''}
        cio-cover-question-container${hasImage ? '--with-image' : ''}
      `}
        data-question-key={question.key}>
        {hasImage ? renderImages(question.images, 'cio-question-image-container') : ''}
        <div className='cio-question-content'>
          <QuestionTitle title={question?.title} />
          <QuestionDescription description={question.description} />
          <ControlBar
            nextButtonHandler={onNextClick}
            backButtonHandler={previousQuestion}
            showBackButton={!state?.quiz.isFirstQuestion}
            ctaButtonText={question?.cta_text}
          />
        </div>
      </div>
    );
  }

  return null;
}
