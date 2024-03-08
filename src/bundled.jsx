/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ReactDOM from 'react-dom/client';
import CioQuizComponent from './components/CioQuiz';
import './styles.css';

const CioQuiz = ({ selector, includeCSS = true, ...rest }) => {
  if (document) {
    const stylesheet = document.getElementById('cio-quizzes-styles');
    const containerElement = document.querySelector(selector);

    if (!containerElement) {
      // eslint-disable-next-line no-console
      console.error(`CioQuiz: There were no elements found for the provided selector`);

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
        <CioQuizComponent {...rest} />
      </React.StrictMode>,
    );
  }
};

if (window) {
  window.CioQuiz = CioQuiz;
}

export default CioQuiz;
