import React, { useContext, useState } from 'react';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import CTAButton from '../CTAButton/CTAButton';
import { renderImages } from '../../utils';
import QuizContext from '../CioQuiz/context';
import { QuestionTypes } from '../CioQuiz/actions';
import './openTextTypeQuestion.css';

interface OpenTextQuestionProps {
  initialValue?: string;
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
}

function OpenTextQuestion(props: OpenTextQuestionProps) {
  const { initialValue = '', onChangeHandler: userDefinedHandler = null } = props;
  const [openTextInput, setOpenTextInput] = useState(initialValue);
  const { questionResponse, state, onBackClick, quizNextHandler } = useContext(QuizContext);

  let question;

  if (questionResponse) {
    question = questionResponse.next_question;
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpenTextInput(e.target.value);
    if (userDefinedHandler) {
      userDefinedHandler(e);
    }
  };

  const onNextClick = () => {
    if (quizNextHandler && openTextInput && questionResponse) {
      quizNextHandler({
        type: QuestionTypes.OpenText,
        payload: {
          questionId: questionResponse.next_question.id,
          input: openTextInput
        }
      });
    }
  };

  const onKeyDownHandler = (e: any) => {
    const { keyCode } = e?.nativeEvent || {};

    if (keyCode === 13) {
      onNextClick();
    }
  };

  if (question) {
    return (
      <div className='cio-open-text-question-container'>
        <div className='cio-open-text-question-form'>
          <QuestionTitle title={question.title} />
          <QuestionDescription description={question.description} />
          <input
            className='cio-question-input-text'
            placeholder={question.input_placeholder}
            defaultValue={initialValue}
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
          />
          <CTAButton disabled={!openTextInput} ctaText={question.cta_text} onClick={onNextClick} />
          {state?.answers && state?.answers?.length > 0 && (
            <CTAButton ctaText='Back' onClick={onBackClick} />
          )}
        </div>
        {question.images ? renderImages(question.images, 'cio-open-text-question-image') : ''}
      </div>
    );
  }

  return null;
}

export default OpenTextQuestion;
