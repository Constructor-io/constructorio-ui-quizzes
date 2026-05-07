import React, { useContext } from 'react';
import { Nullable } from '@constructor-io/constructorio-client-javascript/lib/types';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import QuizContext from '../CioQuiz/context';
import { Question, QuestionOption, Selected } from '../../types';
import { getDisplayedDescription, renderImages } from '../../utils';
import { QuestionTypes } from '../CioQuiz/actions';

export type { Selected };

function SelectTypeQuestion() {
  const { state, getSelectInputProps, selectQuestionSelectedOptions } = useContext(QuizContext);
  let question: Nullable<Question> | undefined;
  let hasImages = false;
  let instructions;

  if (state?.quiz.currentQuestion) {
    question = state.quiz.currentQuestion.next_question;
    hasImages = question?.options.some((option: QuestionOption) => option.images);
    instructions =
      (question?.type === QuestionTypes.MultipleSelect ||
        question.type === QuestionTypes.MultipleFilterValues) &&
      'Select one or more options';
  }

  const displayedDescription = getDisplayedDescription(
    question,
    selectQuestionSelectedOptions || {}
  );

  if (question) {
    return (
      <div
        className='cio-select-question-container'
        data-cnstrc-question-type={question.type}
        data-question-key={question.key}>
        <div className='cio-select-question-text'>
          <QuestionTitle title={question.title} />
          {displayedDescription ? <QuestionDescription description={displayedDescription} /> : ''}
        </div>
        {instructions && <div className='cio-select-question-instructions'>{instructions}</div>}
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
      </div>
    );
  }

  return null;
}

export default SelectTypeQuestion;
