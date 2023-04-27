import React from 'react';
import ReactDOM from 'react-dom/client';
import CioQuiz from './components/CioQuiz';
import './styles.css';

const ConstructorioQuizzes = ({
  selector,
  apiKey,
  quizId,
  cioJsClient,
  resultsPageOptions,
  quizVersionId,
  includeCSS = true,
}) => {
  if (document) {
    if (!includeCSS) {
      const stylesheet = document.getElementById('cio-quizzes-styles');

      if (stylesheet) {
        stylesheet.disabled = true;
      }
    }
    const containerElement = document.querySelector(selector);

    if (!containerElement) {
      console.error(`The selector provided to CioQuizzes doesn't exist`);

      return;
    }

    ReactDOM.createRoot(containerElement).render(
      <React.StrictMode>
        <CioQuiz
          quizId={quizId}
          apiKey={apiKey}
          cioJsClient={cioJsClient}
          resultsPageOptions={resultsPageOptions}
          quizVersionId={quizVersionId}
        />
      </React.StrictMode>
    );
  }
};

if (window) {
  window.ConstructorioQuizzes = ConstructorioQuizzes;
}

export default ConstructorioQuizzes;
