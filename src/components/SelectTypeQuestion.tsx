import { useState } from 'react';

interface Selected {
  [key: string]: boolean;
}
function SelectTypeQuestion(props: any) {
  const { question } = props;
  const { type } = question;
  const [selected, setSelected] = useState<Selected>({});

  const renderImages = (option: any) => {
    if (option?.images) {
      const {
        primary_url: primaryUrl,
        primary_alt: primaryAlt,
        secondary_url: secondaryUrl,
        secondary_alt: secondaryAlt,
      } = option.images;

      const replaceImage = (e: any) => {
        if (secondaryUrl) {
          e.currentTarget.src = secondaryUrl;
          e.currentTarget.alt = secondaryAlt;
        }
      };
      const restoreImage = (e: any) => {
        e.currentTarget.src = primaryUrl;
        e.currentTarget.alt = primaryAlt;
      };
      if (primaryUrl) {
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

  const toggleIdSelected = (id: string) => {
    if (type === 'single') {
      setSelected({ [id]: true });
    } else if (type === 'multiple') {
      setSelected({ ...selected, [id]: !selected[id] });
    }
  };
  const onOptionKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, id: string) => {
    if (event?.key === ' ' || event?.key === 'Enter') {
      toggleIdSelected(id);
    }
  };

  return (
    <div className="select-question-container">
      <h1 className="question-title">{ question?.title }</h1>
      <p className="question-description">{ question?.description }</p>
      <div className="question-options-container">
        { question?.options?.map((option: any, index: number) => (
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
      <button type="button" className="question-cta-button">{ question?.cta_text || 'Continue' }</button>
    </div>
  );
}

export default SelectTypeQuestion;
