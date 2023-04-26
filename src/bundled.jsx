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
      try {
        const stylesheet = document.getElementById('cio-quizzes-styles');

        if (stylesheet) {
          stylesheet.remove();
        }
      } catch (e) {
        // Stop error from breaking
      }
    }
    const containerElement = document.querySelector(selector);

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
