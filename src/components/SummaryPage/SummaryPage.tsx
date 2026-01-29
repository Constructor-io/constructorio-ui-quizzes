import React, { useContext, useEffect } from 'react';
import QuizContext from '../CioQuiz/context';
import BackButton from '../BackButton/BackButton';
import { AnswerInput } from '../../types';
import { getStateFromSessionStorage } from '../../utils';
import { QuestionTypes } from '../CioQuiz/actions';

export interface ISummaryPageProps {
  quizId: string;
  onResultsClick: () => void;
  resultsButtonText?: string;
}

export default function SummaryPage(props: ISummaryPageProps) {
  const { quizId, onResultsClick, resultsButtonText = 'Results' } = props;

  const { getJumpToQuestionButtonProps, state } = useContext(QuizContext);

  const sessionStateStorage = state
    ? getStateFromSessionStorage(state.quizSessionStorageState.key)?.[quizId]
    : null;

  const getAnswerInputDisplayedValue = (answerInput: AnswerInput): string => {
    const { type, value } = answerInput;

    if (Array.isArray(value)) {
      return value.map((q) => q.value).join(', ');
    }

    if (!value) {
      return '';
    }

    if (type === QuestionTypes.OpenText) {
      return value;
    }

    if (type === QuestionTypes.Cover) {
      return '';
    }

    return value;
  };

  useEffect(() => {
    // If, for some reason, there is a key, but no session storage -
    // we navigate user to the results page
    if (state?.quizSessionStorageState.key && !sessionStateStorage) {
      onResultsClick();
    }
  }, [onResultsClick, sessionStateStorage, state?.quizSessionStorageState.key]);

  // TODO: Skip to results?
  if (!sessionStateStorage || !getJumpToQuestionButtonProps) {
    return null;
  }

  return (
    <div className='cio-select-question-container'>
      <div className='cio-summary-page' aria-label='Summary page'>
        <ul className='cio-summary-page-answered-list'>
          {Object.keys(sessionStateStorage.answerInputs).map((questionId) => {
            const answerInput = sessionStateStorage.answerInputs[questionId];
            const { questionTitle, value: answerValue } = answerInput;

            if (!answerValue) {
              return null;
            }

            return (
              <button
                key={questionId}
                className='cio-summary-page-answer-option'
                onClick={getJumpToQuestionButtonProps(Number(questionId)).onClick}
                type='button'>
                <span>{questionTitle}</span>
                <span>{getAnswerInputDisplayedValue(answerInput)}</span>
              </button>
            );
          })}
        </ul>
        <div className='cio-question-buttons-container'>
          <BackButton />
          <div className='cio-question-buttons-group'>
            <button className='cio-question-cta-button' type='button' onClick={onResultsClick}>
              {resultsButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
