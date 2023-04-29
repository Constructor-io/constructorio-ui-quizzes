import { useEffect } from 'react';
import { ResultsPageOptions } from '../components/Results/Results';

const useConsoleErrors = (quizId: string, resultsPageOptions: ResultsPageOptions) => {
  useEffect(() => {
    if (!quizId) {
      // eslint-disable-next-line no-console
      console.error('quizId is a required field of type string');
    }

    if (!resultsPageOptions || Object.keys(resultsPageOptions).length === 0) {
      // eslint-disable-next-line no-console
      console.error('resultsPageOptions is a required field of type object');
    }

    if (resultsPageOptions && !resultsPageOptions?.addToCartCallback) {
      // eslint-disable-next-line no-console
      console.error('resultsPageOptions.addToCartCallback is a required field of type function');
    }
  }, [quizId, resultsPageOptions, resultsPageOptions?.addToCartCallback]);
};

export default useConsoleErrors;
