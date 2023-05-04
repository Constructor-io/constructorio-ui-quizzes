import React, { useContext, useEffect, useState } from 'react';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import { renderImages } from '../../utils';
import QuizContext from '../CioQuiz/context';
import ControlBar from '../ControlBar/ControlBar';

interface OpenTextQuestionProps {
  initialValue?: string;
  onChangeHandler?: React.ChangeEventHandler<HTMLInputElement>;
}

function OpenTextQuestion(props: OpenTextQuestionProps) {
  const { initialValue = '', onChangeHandler: userDefinedHandler = null } = props;
  const { state, getPreviousQuestion, getNextQuestion } = useContext(QuizContext);
  const [openTextInput, setOpenTextInput] = useState<string>(initialValue);

  let question;

  if (state?.quiz.currentQuestion) {
    question = state?.quiz.currentQuestion.next_question;
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpenTextInput(e.target.value);
    if (userDefinedHandler) {
      userDefinedHandler(e);
    }
  };

  const onNextClick = () => {
    if (getNextQuestion && openTextInput) {
      getNextQuestion(openTextInput);
    }
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (key === 'Enter') {
      onNextClick();
    }
  };

  useEffect(() => {
    if (state?.quiz.currentQuestion) {
      const openTextAnswer =
        state.answers.inputs?.[state?.quiz.currentQuestion?.next_question.id] || initialValue;
      setOpenTextInput(openTextAnswer as string);
    }
  }, [state, initialValue]);

  if (question) {
    const hasImage = question?.images?.primary_url;

    return (
      <div
        className={`
          cio-container${hasImage ? '--with-image' : ''}
          cio-open-text-question-container${hasImage ? '--with-image' : ''}
        `}>
        {hasImage ? renderImages(question.images, 'cio-question-image-container') : ''}

        <div className='cio-question-content'>
          <QuestionTitle title={question.title} />
          <QuestionDescription description={question.description} />
          <input
            className='cio-question-input-text'
            placeholder={question.input_placeholder || 'Answer here...'}
            value={openTextInput}
            onChange={onChangeHandler}
            onKeyDown={onKeyDownHandler}
          />
          <ControlBar
            nextButtonHandler={onNextClick}
            isNextButtonDisabled={!openTextInput}
            backButtonHandler={getPreviousQuestion}
            showBackButton={!state?.quiz.isFirstQuestion}
            ctaButtonText={question?.cta_text}
          />
        </div>
      </div>
    );
  }

  return null;
}

export default OpenTextQuestion;
