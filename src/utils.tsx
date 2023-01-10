import { QuestionImages } from './types';

// eslint-disable-next-line import/prefer-default-export
export const renderImages = (
  images: Partial<QuestionImages>,
  cssClasses?: string,
) => {
  const {
    primary_url: primaryUrl,
    primary_alt: primaryAlt,
    secondary_url: secondaryUrl,
    secondary_alt: secondaryAlt,
  } = images;

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
        className={`question-image ${cssClasses || ''}`.trim()}
        src={primaryUrl}
        alt={secondaryAlt}
        onMouseOver={replaceImage}
        onMouseOut={restoreImage}
        onFocus={replaceImage}
        onBlur={restoreImage}
      />
    );
  }
  return '';
};
