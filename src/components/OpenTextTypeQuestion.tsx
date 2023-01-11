import React, { useState } from 'react';
import QuestionTitle from './QuestionTitle';
import QuestionDescription from './QuestionDescription';
import CTAButton from './CTAButton';
import { Question } from '../types';
import { renderImages } from '../utils';

interface OpenTextQuestionProps {
  question: Question,
  initialValue?: string,
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>
}

function OpenTextQuestion(props: OpenTextQuestionProps) {
  const { question, initialValue, onChangeHandler: userDefinedHandler } = props;
  const [, setOpenTextInput] = useState(initialValue);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpenTextInput(e.target.value)
    if (userDefinedHandler) {
      userDefinedHandler(e)
    }
  }
  return (
    <div className="cio-open-text-question-container">
      <div className="cio-open-text-question-form">
        <QuestionTitle title={question.title} />
        <QuestionDescription description={question.description} />
        <input
          className="cio-question-input-text"
          placeholder={question.input_placeholder}
          defaultValue={initialValue}
          onChange={onChangeHandler}
        />
        <CTAButton ctaText={question.cta_text} />
      </div>
      {question.images ? renderImages(question.images, 'cio-open-text-question-image') : ''}
    </div>
  );
}

OpenTextQuestion.defaultProps = {
  initialValue: '',
  onChangeHandler: null,
};

export default OpenTextQuestion;
