import React, { useEffect, useMemo, useState } from 'react';
import QuizContext, { QuizContextValue } from './context';

import useQuiz from '../../hooks/useQuiz';
import SessionPromptModal from '../SessionPromptModal/SessionPromptModal';

import { IQuizProps } from '../../types';
import { convertPrimaryColorsToString, renderImages } from '../../utils';

import CioQuizContent from './QuizContent';
import { RequestStates } from '../../constants';
import ShareResultsModal from '../ShareResultsModal/ShareResultsModal';

export default function CioQuiz(props: IQuizProps) {
  const useQuizReturnValue = useQuiz(props);

  const {
    state,
    events: { hydrateQuiz, resetSessionStorageState },
    primaryColorStyles,
  } = useQuizReturnValue;
  const [showSessionPrompt, setShowSessionPrompt] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const {
    callbacks,
    sessionStateOptions,
    questionsPageOptions,
    resultCardOptions,
    resultsPageOptions,
  } = props;
  const {
    quizSessionStorageState: { hasSessionStorageState, skipToResults },
  } = state;

  useEffect(() => {
    // Respect showSessionModal if defined, else default to true.
    if (sessionStateOptions?.showSessionModal !== undefined) {
      setShowSessionPrompt(
        sessionStateOptions?.showSessionModal && hasSessionStorageState() && !skipToResults
      );
    } else {
      setShowSessionPrompt(hasSessionStorageState() && !skipToResults);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue: QuizContextValue = useMemo(
    () => ({
      ...useQuizReturnValue,
      customClickItemCallback: !!callbacks?.onQuizResultClick,
      customAddToFavoritesCallback: !!callbacks?.onAddToFavoritesClick,
    }),
    [useQuizReturnValue, callbacks?.onQuizResultClick, callbacks?.onAddToFavoritesClick]
  );

  const questionData = state.quiz.currentQuestion?.next_question;
  const questionType = questionData?.type;
  const questionImages = questionData?.images;
  const displayBackgroundImage =
    (questionType === 'single' || questionType === 'multiple') && questionImages;

  return (
    <div
      className={`cio-quiz ${
        state.quiz.requestState === RequestStates.Loading ? 'cio-quiz-loading' : ''
      }`}
      style={{ overflow: showShareModal || showSessionPrompt ? 'hidden' : undefined }}>
      {displayBackgroundImage && renderImages(questionImages, 'cio-question-background-image')}
      <style>.cio-quiz {convertPrimaryColorsToString(primaryColorStyles)}</style>
      <SessionPromptModal
        resetStoredState={resetSessionStorageState}
        continueSession={hydrateQuiz}
        showSessionPrompt={showSessionPrompt}
        setShowSessionPrompt={setShowSessionPrompt}
      />
      <QuizContext.Provider value={contextValue}>
        {state.quiz && showShareModal && (
          <ShareResultsModal
            onClose={() => setShowShareModal(false)}
            quizState={state.quiz}
            onEmailResults={callbacks?.onEmailResults}
          />
        )}
        <CioQuizContent
          setShowShareModal={setShowShareModal}
          questionsPageOptions={questionsPageOptions}
          resultCardOptions={resultCardOptions}
          resultsPageOptions={resultsPageOptions}
        />
      </QuizContext.Provider>
    </div>
  );
}
