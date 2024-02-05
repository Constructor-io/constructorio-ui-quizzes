import React from 'react';
import { MATCHED_OPTIONS_PLACEHOLDER } from '../../constants';
import { formatMatchedOptions } from '../../utils';
import { QuizResultsConfig } from '../../types';

interface QuizResultsSummaryProps {
  summary: QuizResultsConfig['desktop']['response_summary'];
  matchedOptions?: string[];
}

export default function QuizResultsSummary({
  summary,
  matchedOptions = [],
}: QuizResultsSummaryProps) {
  const {
    text = '',
    is_active: isActive,
    items_separator: itemsSeparator,
    last_separator: lastSeparator,
  } = summary ?? {};
  const isActiveSummary = !!isActive && !!matchedOptions.length && !!text?.length;
  const [summaryFirstPart, summaryLastPart] = text?.split(MATCHED_OPTIONS_PLACEHOLDER) || [];
  const matchedOptionsTemplate = formatMatchedOptions(
    matchedOptions,
    itemsSeparator,
    lastSeparator
  );

  if (!isActiveSummary) return null;

  return (
    <p className='cio-results-explanation'>
      {!!summaryFirstPart?.length && summaryFirstPart}
      {!!matchedOptionsTemplate.length && <span>{matchedOptionsTemplate}</span>}
      {!!summaryLastPart?.length && summaryLastPart}
    </p>
  );

  return null;
}
