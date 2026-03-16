import React, { useContext, useEffect } from 'react';
import QuizContext from '../CioQuiz/context';
import BackButton from '../BackButton/BackButton';
import { AnswerInput, RenderSummaryPage } from '../../types';
import { getStateFromSessionStorage } from '../../utils';
import { QuestionTypes } from '../CioQuiz/actions';

const getAnswerInputDisplayedValue = (answerInput: AnswerInput): string => {
  const { value } = answerInput;

  if (Array.isArray(value)) {
    return value.map((q) => q.value).join(', ');
  }

  return value || '';
};

export interface ISummaryPageProps {
  quizId: string;
  onResultsClick: () => void;
  resultsButtonText?: string;
  title?: string;
  renderSummaryPage?: RenderSummaryPage;
  onSummaryPageLoaded?: () => void;
}

export default function SummaryPage(props: ISummaryPageProps) {
  const {
    quizId,
    onResultsClick,
    resultsButtonText = 'Results',
    title,
    renderSummaryPage,
    onSummaryPageLoaded,
  } = props;

  const { getJumpToQuestionButtonProps, state } = useContext(QuizContext);

  const sessionStateStorage = state
    ? getStateFromSessionStorage(state.quizSessionStorageState.key)?.[quizId]
    : null;

  useEffect(() => {
    // If, for some reason, there is a key, but no session storage -
    // we navigate user to the results page
    if (state?.quizSessionStorageState.key && !sessionStateStorage) {
      onResultsClick();
    }
  }, [onResultsClick, sessionStateStorage, state?.quizSessionStorageState.key]);

  useEffect(() => {
    if (sessionStateStorage && onSummaryPageLoaded) {
      onSummaryPageLoaded();
    }
  }, [sessionStateStorage, onSummaryPageLoaded]);

  // Render nothing while the useEffect above handles navigation to results
  if (!sessionStateStorage || !getJumpToQuestionButtonProps) {
    return null;
  }

  const onJumpToQuestion = (questionId: number) => {
    const { onClick } = getJumpToQuestionButtonProps(questionId);
    onClick(new MouseEvent('click') as unknown as React.MouseEvent<HTMLElement>);
  };

  if (renderSummaryPage) {
    return renderSummaryPage({
      answerInputs: sessionStateStorage.answerInputs,
      onResultsClick,
      onJumpToQuestion,
    });
  }

  return (
    <div className='cio-select-question-container'>
      <div className='cio-summary-page' aria-label='Summary page'>
        {title && <h2 className='cio-summary-page-title'>{title}</h2>}
        <ul className='cio-summary-page-answered-list'>
          {Object.keys(sessionStateStorage.answerInputs).map((questionId) => {
            const answerInput = sessionStateStorage.answerInputs[questionId];
            const { questionTitle, value: answerValue } = answerInput;

            if (!answerValue || answerInput.type === QuestionTypes.Cover) {
              return null;
            }

            return (
              <li key={questionId} className='cio-summary-page-answer-item'>
                <button
                  className='cio-summary-page-answer-option'
                  onClick={getJumpToQuestionButtonProps(Number(questionId)).onClick}
                  type='button'>
                  <span>{questionTitle}</span>
                  <span>{getAnswerInputDisplayedValue(answerInput)}</span>
                </button>
              </li>
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
