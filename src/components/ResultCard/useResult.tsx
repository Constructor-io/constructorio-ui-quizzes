import { useState } from 'react';
import { QuizResultDataPartial } from '../../types';

const useResult = (result?: QuizResultDataPartial) => {
  const [faceOutResult, setFaceOutResult] = useState<QuizResultDataPartial>({
    ...result,
    ...result?.variations?.find(
      (variation) => variation.data.variation_id === result?.data?.variation_id
    ),
  });

  const onVariationClick = (variation: QuizResultDataPartial) => {
    setFaceOutResult((prev) => ({
      ...prev,
      ...variation,
      ...variation?.variations?.find(
        (item) => item.data.variation_id === variation?.data?.variation_id
      ),
    }));
  };
  return {
    faceOutResult,
    onVariationClick,
  };
};
export default useResult;
