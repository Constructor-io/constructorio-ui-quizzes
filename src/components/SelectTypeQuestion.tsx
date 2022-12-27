import { useState } from 'react';
import CTAButton from './CTAButton';
import QuestionTitle from './QuestionTitle';
import QuestionDescription from './QuestionDescription';
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

  const renderImages = (option: QuestionOption) => {
    if (option.images) {
      const {
        primary_url: primaryUrl,
        primary_alt: primaryAlt,
        secondary_url: secondaryUrl,
        secondary_alt: secondaryAlt,
      } = option.images;

      type ImageFocusEvent =
        React.MouseEvent<HTMLImageElement> | React.FocusEvent<HTMLImageElement>;

      if (primaryUrl) {
        const replaceImage = (e: ImageFocusEvent) => {
          if (secondaryUrl) {
            e.currentTarget.src = secondaryUrl;
            e.currentTarget.alt = secondaryAlt || '';
          }
        };
        const restoreImage = (e: ImageFocusEvent) => {
          e.currentTarget.src = primaryUrl;
          e.currentTarget.alt = primaryAlt || '';
        };

        return (
          <img
            src={primaryUrl}
            alt={secondaryAlt}
            onMouseOver={replaceImage}
            onMouseOut={restoreImage}
            onFocus={replaceImage}
            onBlur={restoreImage}
          />
        );
      }
    }
    return '';
  };

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
            { renderImages(option) }
            <p className="question-option-value">{ option?.value }</p>
          </div>
        ))}
      </div>
      <CTAButton ctaText={question?.cta_text || undefined} />
    </div>
  );
}

export default SelectTypeQuestion;
