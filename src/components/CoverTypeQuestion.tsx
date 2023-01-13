import * as React from 'react';
import QuestionTitle from './QuestionTitle';
import QuizContext from './Quiz/context';
import QuestionDescription from './QuestionDescription';
import CTAButton from './CTAButton';
import { renderImages } from '../utils';
import { QuestionTypes } from './Quiz/actions';

export default function CoverTypeQuestion() {
  const { dispatch, questionResponse } = React.useContext(QuizContext);
  let question;
  if(questionResponse) {
    question = questionResponse.next_question;
  }

  const onNextClick = () => {
    if (dispatch) {
      dispatch({ type: QuestionTypes.Cover });
    }
  };

  if(question) {
    return (
      <div className="cio-cover-question-container">
        <div className="cio-cover-question-text">
          <QuestionTitle title={question?.title} />
          <QuestionDescription description={question.description} />
          <CTAButton
            ctaText={question?.cta_text}
            onClick={onNextClick}
          />
        </div>
        <div className="cio-cover-question-img">
          {question?.images ? renderImages(question.images) : ''}
        </div>
      </div>
    );
  }

  return null
}
