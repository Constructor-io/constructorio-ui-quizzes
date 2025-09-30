import { useCallback, useState } from 'react';
import { GetQuizResultSwatchProps, QuizResultDataPartial } from '../types';

const useResultCard = (result: QuizResultDataPartial, swatchImageKey?: string) => {
  if (!result) {
    throw new Error('The "result" parameter is required and cannot be undefined.');
  }
  const [faceOutResult, setFaceOutResult] = useState<QuizResultDataPartial>(result);

  const onVariationClick = useCallback((variation: QuizResultDataPartial) => {
    setFaceOutResult({
      ...result,
      ...variation,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // The only prop getter that is not returned from useProgGetters
  // It's state and needs to be local to the component
  const getQuizResultSwatchProps: GetQuizResultSwatchProps = useCallback(
    (variation) => {
      const isSelected = variation?.data?.variation_id === faceOutResult?.data?.variation_id;
      const style = {
        background: `url(${
          validateNumberOrString(getNestedValueUsingDotNotation(variation, swatchImageKey)) || variation?.data?.image_url
        })`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };

      const onClick = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        onVariationClick(variation);
      };
      return {
        key: variation?.data?.variation_id,
        className: `cio-result-card-swatch ${isSelected ? 'selected' : ''}`,
        type: 'button',
        onClick,
        style,
      };
    },
    [faceOutResult?.data?.variation_id, onVariationClick, swatchImageKey]
  );

  return {
    faceOutResult,
    onVariationClick,
    getQuizResultSwatchProps,
  };
};
export default useResultCard;
