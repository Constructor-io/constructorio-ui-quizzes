import React, { useContext } from 'react';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import { renderImages } from '../../utils';
import QuizContext from '../CioQuiz/context';

function OpenTextQuestion() {
  const { state, getOpenTextInputProps } = useContext(QuizContext);

  let question;

  if (state?.quiz.currentQuestion) {
    question = state?.quiz.currentQuestion.next_question;
  }

  if (question) {
    const hasImage = question?.images?.primary_url;

    return (
      <div
        className={`
          cio-container${hasImage ? '--with-image' : ''}
          cio-open-text-question-container${hasImage ? '--with-image' : ''}
        `}
        data-cnstrc-question-type={question.type}
        data-question-key={question.key}>
        {hasImage ? renderImages(question.images, 'cio-question-image-container') : ''}

        <div className='cio-question-content'>
          <QuestionTitle title={question.title} />
          <QuestionDescription description={question.description} />
          {getOpenTextInputProps && <input {...getOpenTextInputProps()} />}
        </div>
      </div>
    );
  }

  return null;
}

export default OpenTextQuestion;
