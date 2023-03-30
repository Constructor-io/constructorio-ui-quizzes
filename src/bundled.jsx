import React from 'react';
import ReactDOM from 'react-dom/client';
import CioQuiz from './components/CioQuiz';
import './new-styles.css';

export default ({ containerElement, apiKey, quizId }) => {
  ReactDOM.createRoot(containerElement).render(
    <React.StrictMode>
      <CioQuiz quizId={quizId} apiKey={apiKey} />;
    </React.StrictMode>
  );
};
