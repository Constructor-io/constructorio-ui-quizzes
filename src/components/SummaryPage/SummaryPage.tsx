import React, { useContext, useEffect } from 'react';
import QuizContext from '../CioQuiz/context';
import BackButton from '../BackButton/BackButton';
import { AnswerInput, RenderSummaryPage } from '../../types';
import { getStateFromSessionStorage } from '../../utils';
import { QuestionTypes } from '../CioQuiz/actions';

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

  const getAnswerInputDisplayedValue = (answerInput: AnswerInput): string => {
    const { value } = answerInput;

    if (Array.isArray(value)) {
      return value.map((q) => q.value).join(', ');
    }

    return value || '';
  };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!sessionStateStorage || !getJumpToQuestionButtonProps) {
    return null;
  }

  const onJumpToQuestion = (questionId: number) => {
    getJumpToQuestionButtonProps(questionId).onClick({} as React.MouseEvent<HTMLElement>);
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
