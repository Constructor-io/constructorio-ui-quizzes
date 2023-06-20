import React, { useContext } from 'react';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import QuizContext from '../CioQuiz/context';
import { QuestionOption } from '../../types';
import { renderImages } from '../../utils';
import ControlBar from '../ControlBar/ControlBar';

export interface Selected {
  [key: number]: boolean;
}

function SelectTypeQuestion() {
  const { state, getSelectInputProps } = useContext(QuizContext);
  let question;
  let hasImages = false;

  if (state?.quiz.currentQuestion) {
    question = state.quiz.currentQuestion.next_question;
    hasImages = question.options.some((option: QuestionOption) => option.images);
  }

  if (question) {
    return (
      <div className='cio-select-question-container' data-question-key={question.key}>
        <div className='cio-select-question-text'>
          <QuestionTitle title={question.title} />
          {question?.description ? <QuestionDescription description={question.description} /> : ''}
        </div>
        <div
          className={`${
            !hasImages
              ? 'cio-question-options-container-text-only'
              : 'cio-question-options-container'
          }`}>
          {question?.options?.map(
            (option: QuestionOption) =>
              getSelectInputProps && (
                <div {...getSelectInputProps(option)}>
                  {option.images ? renderImages(option.images, 'cio-question-option-image') : ''}
                  <div className='cio-question-option-value'>{option?.value}</div>
                </div>
              )
          )}
        </div>
        <ControlBar ctaButtonText={question?.cta_text} />
      </div>
    );
  }

  return null;
}

export default SelectTypeQuestion;
