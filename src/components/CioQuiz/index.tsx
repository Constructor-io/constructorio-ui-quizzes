import React, { useEffect, useRef, useState } from 'react';
import QuizContext, { QuizContextValue } from './context';
import QuizQuestions from '../QuizQuestions';
import ResultContainer from '../ResultContainer/ResultContainer';
import ControlBar from '../ControlBar/ControlBar';
import { RequestStates } from '../../constants';
import Spinner from '../Spinner/Spinner';
import useQuiz from '../../hooks/useQuiz';
import SessionPromptModal from '../SessionPromptModal/SessionPromptModal';
import ShareResultsModal from '../ShareResultsModal/ShareResultsModal';
import { IQuizProps } from '../../types';
import { convertPrimaryColorsToString, renderImages } from '../../utils';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function CioQuiz(props: IQuizProps) {
  const {
    cioClient,
    state,
    events: { hydrateQuiz, resetSessionStorageState },
    getAddToCartButtonProps,
    getAddToFavoritesButtonProps,
    getCoverQuestionProps,
    getHydrateQuizButtonProps,
    getNextQuestionButtonProps,
    getSkipQuestionButtonProps,
    getOpenTextInputProps,
    getPreviousQuestionButtonProps,
    getQuizImageProps,
    getQuizResultButtonProps,
    getQuizResultLinkProps,
    getResetQuizButtonProps,
    getSelectInputProps,
    primaryColorStyles,
    getShareResultsButtonProps,
  } = useQuiz(props);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const [showSessionPrompt, setShowSessionPrompt] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const { callbacks, sessionStateOptions, questionsPageOptions, resultCardOptions, quizBasePath } =
    props;
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

  const contextValue: QuizContextValue = {
    cioClient,
    state,
    getAddToCartButtonProps,
    getAddToFavoritesButtonProps,
    getCoverQuestionProps,
    getHydrateQuizButtonProps,
    getNextQuestionButtonProps,
    getSkipQuestionButtonProps,
    getOpenTextInputProps,
    getPreviousQuestionButtonProps,
    getQuizImageProps,
    getQuizResultButtonProps,
    getQuizResultLinkProps,
    getResetQuizButtonProps,
    getShareResultsButtonProps,
    getSelectInputProps,
    customClickItemCallback: !!callbacks?.onQuizResultClick,
    customAddToFavoritesCallback: !!callbacks?.onAddToFavoritesClick,
    primaryColorStyles,
  };

  if (state.quiz.requestState === RequestStates.Loading) {
    return (
      <div className='cio-quiz cio-quiz-loading'>
        <Spinner />
      </div>
    );
  }

  const questionData = state.quiz.currentQuestion?.next_question;
  const questionType = questionData?.type;
  const questionImages = questionData?.images;
  const displayBackgroundImage =
    (questionType === 'single' || questionType === 'multiple') && questionImages;

  console.log('🚀 ~ file: index.tsx:117 ~ CioQuiz ~ callbacks:', callbacks);
  if (state.quiz.requestState === RequestStates.Success) {
    return (
      <div
        className='cio-quiz'
        ref={containerRef}
        style={{ overflow: showShareModal || showSessionPrompt ? 'hidden' : undefined }}>
        {displayBackgroundImage && renderImages(questionImages, 'cio-question-background-image')}
        <style>.cio-quiz {convertPrimaryColorsToString(primaryColorStyles)}</style>
        <SessionPromptModal
          resetStoredState={resetSessionStorageState}
          continueSession={hydrateQuiz}
          showSessionPrompt={showSessionPrompt}
          setShowSessionPrompt={setShowSessionPrompt}
        />

        {state.quiz && containerRef.current && (
          <ShareResultsModal
            showShareModal={showShareModal}
            onClose={() => setShowShareModal(false)}
            quizState={state.quiz}
            basePath={quizBasePath}
            onEmailResults={callbacks?.onEmailResults}
            containerRef={containerRef.current}
          />
        )}

        <QuizContext.Provider value={contextValue}>
          {state.quiz.results || skipToResults ? (
            <ResultContainer
              resultCardOptions={resultCardOptions}
              onShare={() => setShowShareModal(true)}
            />
          ) : (
            state.quiz.currentQuestion && (
              <>
                <ProgressBar />
                <QuizQuestions />
                <ControlBar
                  skipQuestionButtonText={questionsPageOptions?.skipQuestionButtonText}
                  ctaButtonText={questionData?.cta_text || undefined}
                />
              </>
            )
          )}
        </QuizContext.Provider>
      </div>
    );
  }
  return null;
}
