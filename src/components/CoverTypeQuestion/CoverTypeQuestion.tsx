import React, { useContext } from 'react';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuizContext from '../CioQuiz/context';
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import { renderImages } from '../../utils';
import { QuestionTypes } from '../CioQuiz/actions';
import ControlBar from '../ControlBar/ControlBar';

export default function CoverTypeQuestion() {
  const { questionResponse, quizBackHandler, quizNextHandler, isFirstQuestion } =
    useContext(QuizContext);
  let question;

  if (questionResponse) {
    question = questionResponse.next_question;
  }

  const hasImage = question?.images?.primary_url;

  const onNextClick = () => {
    if (quizNextHandler) {
      quizNextHandler({
        type: QuestionTypes.Cover,
        payload: {
          isLastQuestion: questionResponse?.is_last_question,
        },
      });
    }
  };

  if (question) {
    return (
      <div className={`cio-cover-question-container${hasImage ? '--with-image' : ''}`}>
        <div className='cio-cover-question-text-container'>
          <div className='cio-cover-question-text'>
            <div>
              <QuestionTitle title={question?.title} />
              <QuestionDescription description={question.description} />
            </div>
            <ControlBar
              nextButtonHandler={onNextClick}
              backButtonHandler={quizBackHandler}
              showBackButton={!isFirstQuestion}
              ctaButtonText={question?.cta_text}
            />
          </div>
        </div>
        {hasImage ? (
          <div className='cio-cover-question-img'>{renderImages(question.images)}</div>
        ) : (
          ''
        )}
      </div>
    );
  }

  return null;
}
