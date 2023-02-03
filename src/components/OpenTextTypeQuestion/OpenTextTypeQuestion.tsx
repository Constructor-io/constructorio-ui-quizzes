import React, { useContext, useEffect, useState } from 'react';
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
  const { questionResponse, quizBackHandler, quizNextHandler, isFirstQuestion, state } =
    useContext(QuizContext);
  const [openTextInput, setOpenTextInput] = useState<string>(initialValue);

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
          input: openTextInput,
          isLastQuestion: questionResponse.is_last_question
        }
      });
    }
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (key === 'Enter') {
      onNextClick();
    }
  };

  useEffect(() => {
    if (questionResponse) {
      const openTextAnswer =
        state?.answerInputs?.[questionResponse?.next_question.id] || initialValue;
      setOpenTextInput(openTextAnswer);
    }
  }, [questionResponse, state, initialValue]);

  if (question) {
    return (
      <div className='cio-open-text-question-container'>
        <div className='cio-open-text-question-form'>
          <QuestionTitle title={question.title} />
          <QuestionDescription description={question.description} />
          <input
            className='cio-question-input-text'
            placeholder={question.input_placeholder}
            value={openTextInput}
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
          />
          <CTAButton disabled={!openTextInput} ctaText={question.cta_text} onClick={onNextClick} />
          {!isFirstQuestion && <CTAButton ctaText='Back' onClick={quizBackHandler} />}
        </div>
        {question.images ? renderImages(question.images, 'cio-open-text-question-image') : ''}
      </div>
    );
  }

  return null;
}

export default OpenTextQuestion;
