import { useCallback, useState } from 'react';
import { QuizResultDataPartial } from '../types';

const useResult = (result: QuizResultDataPartial) => {
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

  return {
    faceOutResult,
    onVariationClick,
  };
};
export default useResult;
