import React, { useEffect, useState } from 'react';
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
import { QuestionTypes } from './actions';

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

  const onModalClose = () => {
    setShowShareModal(false);
    if (callbacks?.onShareResultsModalClose) {
      callbacks?.onShareResultsModalClose();
    }
  };

  const onModalOpen = () => {
    setShowShareModal(true);
    if (callbacks?.onShareResultsModalOpen) {
      callbacks?.onShareResultsModalOpen();
    }
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
    (questionType === QuestionTypes.SingleSelect ||
      questionType === QuestionTypes.MultipleSelect) &&
    questionImages;

  if (state.quiz.requestState === RequestStates.Success) {
    return (
      <div
        className='cio-quiz'
        style={{ overflow: showShareModal || showSessionPrompt ? 'hidden' : undefined }}>
        {displayBackgroundImage && renderImages(questionImages, 'cio-question-background-image')}
        <style>.cio-quiz {convertPrimaryColorsToString(primaryColorStyles)}</style>
        <SessionPromptModal
          resetStoredState={resetSessionStorageState}
          continueSession={hydrateQuiz}
          showSessionPrompt={showSessionPrompt}
          setShowSessionPrompt={setShowSessionPrompt}
        />

        {state.quiz && showShareModal && (
          <ShareResultsModal
            onClose={onModalClose}
            quizState={state.quiz}
            onEmailResults={callbacks?.onEmailResults}
            answers={state.answers.payload}
          />
        )}

        <QuizContext.Provider value={contextValue}>
          {state.quiz.results || skipToResults ? (
            <ResultContainer
              resultCardOptions={resultCardOptions}
              onShare={onModalOpen}
              resultsPageOptions={resultsPageOptions}
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
