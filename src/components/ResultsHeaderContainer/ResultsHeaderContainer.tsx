import React from 'react';

import { QuizResultsConfig } from '../../types';
import RedoButton from '../RedoButton/RedoButton';

export interface IResultHeaderContainerProps {
  resultsConfig?: QuizResultsConfig | null;
  hasNoResults: boolean;
}

export default function ResultsHeaderContainer({
  hasNoResults,
  resultsConfig,
}: IResultHeaderContainerProps) {
  let resultsTitle: string;
  if (hasNoResults) {
    resultsTitle = '';
  } else if (resultsConfig === null) {
    resultsTitle = 'Here are your results';
  } else if (resultsConfig?.desktop.title?.is_active) {
    resultsTitle = resultsConfig.desktop.title.text ?? '';
  } else {
    resultsTitle = '';
  }

  let resultsDescription: string;
  if (hasNoResults) {
    resultsDescription = '';
  } else if (resultsConfig === null) {
    resultsDescription = '';
  } else if (resultsConfig?.desktop.description?.is_active) {
    resultsDescription = resultsConfig.desktop.description.text ?? '';
  } else {
    resultsDescription = '';
  }

  const hasContent = !!(resultsTitle || resultsDescription);

  return (
    <div className={`cio-results-header-container${hasContent ? '' : ' no-header'}`}>
      {hasContent && (
        <div className='cio-results-title-container'>
          <h1 className='cio-results-title'>{resultsTitle}</h1>
          <p className='cio-results-description'>{resultsDescription}</p>
        </div>
      )}
      <RedoButton />
    </div>
  );
}
