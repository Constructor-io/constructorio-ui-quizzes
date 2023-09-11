import { useEffect } from 'react';
import { IQuizProps } from '../types';

const useConsoleErrors = (quizOptions: IQuizProps) => {
  const { quizId, resultsPageOptions, callbacks } = quizOptions;
  useEffect(() => {
    if (!quizId) {
      // eslint-disable-next-line no-console
      console.error('quizId is a required field of type string');
    }

    if (!callbacks?.onAddToCartClick) {
      // eslint-disable-next-line no-console
      console.error('callbacks?.onAddToCartClick is a required field of type function');
    }
  }, [quizId, resultsPageOptions, callbacks?.onAddToCartClick]);
};

export default useConsoleErrors;
