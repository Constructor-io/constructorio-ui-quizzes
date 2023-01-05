import { useState } from 'react';
import CTAButton from './CTAButton';
import QuestionTitle from './QuestionTitle';
import QuestionDescription from './QuestionDescription';
import { renderImages } from '../utils';
import { Question, QuestionOption } from '../types';

interface Selected {
  [key: number]: boolean;
}
interface SelectTypeQuestionProps {
  question: Question
}

function SelectTypeQuestion(props: SelectTypeQuestionProps) {
  const { question } = props;
  const { type } = question;
  const [selected, setSelected] = useState<Selected>({});

  const toggleIdSelected = (id: number) => {
    if (type === 'single') {
      setSelected({ [id]: true });
    } else if (type === 'multiple') {
      setSelected({ ...selected, [id]: !selected[id] });
    }
  };
  const onOptionKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, id: number) => {
    if (event?.key === ' ' || event?.key === 'Enter') {
      toggleIdSelected(id);
    }
  };

  return (
    <div className="select-question-container">
      <QuestionTitle title={question.title} />
      { question?.description ? <QuestionDescription description={question.description} /> : ''}
      <div className="question-options-container">
        { question?.options?.map((option: QuestionOption, index: number) => (
          <div
            className={`question-option-container ${selected[option.id] ? 'selected' : ''}`}
            onClick={() => { toggleIdSelected(option.id); }}
            onKeyDown={(event) => { onOptionKeyDown(event, option.id); }}
            role="button"
            tabIndex={index + 1}
            key={option.id}
          >
            { option.images ? renderImages(option.images) : ''}
            <p className="question-option-value">{ option?.value }</p>
          </div>
        ))}
      </div>
      <CTAButton ctaText={question?.cta_text || undefined} />
    </div>
  );
}

export default SelectTypeQuestion;
