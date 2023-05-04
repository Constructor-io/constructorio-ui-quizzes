import React, { useEffect, useState, useContext, KeyboardEvent } from 'react';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import QuizContext from '../CioQuiz/context';
import { QuestionOption } from '../../types';
import { renderImages } from '../../utils';
import { QuestionTypes } from '../CioQuiz/actions';
import ControlBar from '../ControlBar/ControlBar';

interface Selected {
  [key: number]: boolean;
}

function SelectTypeQuestion() {
  const { state, getNextQuestion, getPreviousQuestion } = useContext(QuizContext);
  let question;
  let type: `${QuestionTypes}`;
  let hasImages = false;

  if (state?.quiz.currentQuestion) {
    question = state.quiz.currentQuestion.next_question;
    type = question.type;
    hasImages = question.options.some((option: QuestionOption) => option.images);
  }

  const [selected, setSelected] = useState<Selected>({});
  const isDisabled = Object.keys(selected).length === 0;

  useEffect(() => {
    if (state?.quiz.currentQuestion?.next_question?.type) {
      const nextQuestionId = state.quiz.currentQuestion.next_question.id;
      const answers = state.answers?.inputs?.[nextQuestionId] || [];
      const prevSelected: Selected = {};

      (answers as string[])?.forEach((answer) => {
        prevSelected[Number(answer)] = true;
      });

      setSelected(prevSelected);
    }
  }, [state]);

  const toggleIdSelected = (id: number) => {
    if (type === QuestionTypes.SingleSelect) {
      setSelected({ [id]: true });
    } else if (type === QuestionTypes.MultipleSelect) {
      if (selected[id]) {
        const newState = { ...selected };
        delete newState[id];
        setSelected(newState);
      } else {
        setSelected({ ...selected, [id]: true });
      }
    }
  };

  const onOptionKeyDown = (event: KeyboardEvent<HTMLDivElement>, id: number) => {
    if (event?.key === ' ' || event?.key === 'Enter') {
      toggleIdSelected(id);
    }
  };

  const onNextClick = () => {
    if (getNextQuestion && !isDisabled && state?.quiz.currentQuestion) {
      const selectedAnswers = Object.keys(selected).filter((key) => selected[Number(key)]);
      getNextQuestion(selectedAnswers);
    }
  };

  if (question) {
    return (
      <div className='cio-select-question-container'>
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
          {question?.options?.map((option: QuestionOption) => (
            <div
              className={`${
                !hasImages
                  ? 'cio-question-option-container-text-only'
                  : 'cio-question-option-container'
              } ${selected[option.id] ? 'selected' : ''}`}
              onClick={() => {
                toggleIdSelected(option.id);
              }}
              onKeyDown={(event) => {
                onOptionKeyDown(event, option.id);
              }}
              role='button'
              tabIndex={0}
              key={option.id}>
              {option.images ? renderImages(option.images, 'cio-question-option-image') : ''}
              <div className='cio-question-option-value'>{option?.value}</div>
            </div>
          ))}
        </div>
        <ControlBar
          nextButtonHandler={onNextClick}
          isNextButtonDisabled={isDisabled}
          backButtonHandler={getPreviousQuestion}
          showBackButton={!state?.quiz.isFirstQuestion}
          ctaButtonText={question?.cta_text}
        />
      </div>
    );
  }

  return null;
}

export default SelectTypeQuestion;
