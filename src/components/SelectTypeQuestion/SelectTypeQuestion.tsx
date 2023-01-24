import { useEffect, useState, useContext, KeyboardEvent } from 'react';
import CTAButton from '../CTAButton/CTAButton';
import QuestionTitle from '../QuestionTitle/QuestionTitle';
import QuestionDescription from '../QuestionDescription/QuestionDescription';
import QuizContext from '../Quiz/context';
import { QuestionOption } from '../../types';
import { renderImages } from '../../utils';
import { QuestionTypes } from '../Quiz/actions';
import './selectTypeQuestion.css';

interface Selected {
  [key: number]: boolean;
}

function SelectTypeQuestion() {
  const { dispatch, questionResponse, state, setShowResults } = useContext(QuizContext);
  let question;
  let type: `${QuestionTypes}`;

  if (questionResponse) {
    question = questionResponse.next_question;
    type = question.type;
  }

  const [selected, setSelected] = useState<Selected>({});
  const isDisabled = Object.keys(selected).length === 0;

  useEffect(() => {
    if (questionResponse && questionResponse.type) {
      let answers;

      if (
        questionResponse.type === QuestionTypes.SingleSelect &&
        state?.singleSelectInputs?.[questionResponse?.next_question.id]
      ) {
        answers = state?.singleSelectInputs?.[questionResponse?.next_question.id];
      } else if (
        questionResponse.type === QuestionTypes.MultipleSelect &&
        state?.multipleSelectInputs?.[questionResponse?.next_question.id]
      ) {
        answers = state?.multipleSelectInputs?.[questionResponse?.next_question.id];
      }
      const prevSelected: Selected = {};

      answers?.forEach((answer) => {
        prevSelected[Number(answer)] = true;
      });

      setSelected(prevSelected);
    }
  }, [questionResponse, state?.multipleSelectInputs, state?.singleSelectInputs]);

  const toggleIdSelected = (id: number) => {
    if (type === QuestionTypes.SingleSelect) {
      setSelected({ [id]: true });
    } else if (type === QuestionTypes.MultipleSelect) {
      setSelected({ ...selected, [id]: !selected[id] });
    }
  };
  const onOptionKeyDown = (event: KeyboardEvent<HTMLDivElement>, id: number) => {
    if (event?.key === ' ' || event?.key === 'Enter') {
      toggleIdSelected(id);
    }
  };

  const onNextClick = () => {
    if (dispatch && !isDisabled && questionResponse) {
      if (type === QuestionTypes.SingleSelect) {
        dispatch(
          {
            type: QuestionTypes.SingleSelect,
            payload: {
              questionId: questionResponse?.next_question.id,
              input: Object.keys(selected).filter((key) => selected[Number(key)])
            }
          }!
        );
      } else {
        dispatch(
          {
            type: QuestionTypes.MultipleSelect,
            payload: {
              questionId: questionResponse?.next_question.id,
              input: Object.keys(selected).filter((key) => selected[Number(key)])
            }
          }!
        );
      }

      if (questionResponse.is_last_question) {
        setShowResults!(true);
      }
    }
  };

  if (question) {
    return (
      <div className='cio-select-question-container'>
        <QuestionTitle title={question.title} />
        {question?.description ? <QuestionDescription description={question.description} /> : ''}
        <div className='cio-question-options-container'>
          {question?.options?.map((option: QuestionOption, index: number) => (
            <div
              className={`cio-question-option-container ${selected[option.id] ? 'selected' : ''}`}
              onClick={() => {
                toggleIdSelected(option.id);
              }}
              onKeyDown={(event) => {
                onOptionKeyDown(event, option.id);
              }}
              role='button'
              tabIndex={index + 1}
              key={option.id}>
              {option.images ? renderImages(option.images, 'cio-question-option-image') : ''}
              <p className='cio-question-option-value'>{option?.value}</p>
            </div>
          ))}
        </div>
        <CTAButton disabled={isDisabled} ctaText={question?.cta_text} onClick={onNextClick} />
      </div>
    );
  }

  return null;
}

export default SelectTypeQuestion;