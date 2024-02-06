import React from 'react';
import { MATCHED_OPTIONS_PLACEHOLDER } from '../../constants';
import { formatMatchedOptions } from '../../utils';
import { QuizResultsConfig } from '../../types';

interface QuizResultsSummaryProps {
  summary: QuizResultsConfig['desktop']['response_summary'];
  matchedOptions?: string[];
}

const getSummaryVariables = ({ summary, matchedOptions = [] }: QuizResultsSummaryProps) => {
  if (summary === null) {
    return {
      summaryFirstPart: 'Based on your answers ',
      summaryLastPart: ' we recommend these matches.',
      itemsSeparator: ', ',
      lastSeparator: 'and ',
      isActiveSummary: true,
    };
  }

  const {
    text = '',
    is_active: isActive,
    items_separator: itemsSeparator,
    last_separator: lastSeparator,
  } = summary;
  const isActiveSummary = !!isActive && !!matchedOptions.length && !!text?.length;
  const [summaryFirstPart, summaryLastPart] = text?.split(MATCHED_OPTIONS_PLACEHOLDER) || [];

  return {
    summaryFirstPart,
    summaryLastPart,
    itemsSeparator,
    lastSeparator,
    isActiveSummary,
  };
};

export default function QuizResultsSummary({
  summary,
  matchedOptions = [],
}: QuizResultsSummaryProps) {
  const { summaryFirstPart, summaryLastPart, itemsSeparator, lastSeparator, isActiveSummary } =
    getSummaryVariables({ summary, matchedOptions });

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
}
