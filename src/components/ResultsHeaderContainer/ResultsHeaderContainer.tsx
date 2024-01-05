import React from 'react';

import { QuizResultsConfig } from '../../types';

export interface IResultHeaderContainerProps {
  resultsConfig?: QuizResultsConfig | null;
}

export default function ResultsHeaderContainer({ resultsConfig }: IResultHeaderContainerProps) {
  let resultsTitle = '';
  let resultsDescription = '';
  if (resultsConfig === null) {
    resultsTitle = 'Here are your results';
  }
  if (resultsConfig?.desktop.title?.is_active) {
    resultsTitle = resultsConfig.desktop.title.text ?? '';
  }
  if (resultsConfig?.desktop.description?.is_active) {
    resultsDescription = resultsConfig.desktop.description.text ?? '';
  }

  const hasContent = !!(resultsTitle || resultsDescription);

  return hasContent ? (
    <div className='cio-results-title-container'>
      <h1 className='cio-results-title'>{resultsTitle}</h1>
      <p className='cio-results-description'>{resultsDescription}</p>
    </div>
  ) : null;
}
