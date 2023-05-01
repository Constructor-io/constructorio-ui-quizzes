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
    const stylesheet = document.getElementById('cio-quizzes-styles');
    const containerElement = document.querySelector(selector);

    if (!containerElement) {
      console.error(`ConstructorioQuizzes: There were no elements found for the provided selector`);

      return;
    }

    if (stylesheet) {
      if (!includeCSS) {
        stylesheet.disabled = true;
      } else {
        stylesheet.disabled = false;
      }
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
