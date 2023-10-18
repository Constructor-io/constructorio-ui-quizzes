import React, { useEffect, useState } from 'react';
import QuizContext, { QuizContextValue } from './context';
import QuizQuestions from '../QuizQuestions';
import ResultContainer from '../ResultContainer/ResultContainer';
import ControlBar from '../ControlBar/ControlBar';
import { RequestStates } from '../../constants';
import Spinner from '../Spinner/Spinner';
import useQuiz from '../../hooks/useQuiz';
import SessionPromptModal from '../SessionPromptModal/SessionPromptModal';
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
  } = useQuiz(props);

  const [showSessionPrompt, setShowSessionPrompt] = useState(false);
  const { callbacks, sessionStateOptions, questionsPageOptions, resultCardOptions } = props;
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

  if (state.quiz.requestState === RequestStates.Success) {
    return (
      <div className='cio-quiz'>
        {displayBackgroundImage && renderImages(questionImages, 'cio-question-background-image')}
        <style>.cio-quiz {convertPrimaryColorsToString(primaryColorStyles)}</style>
        <SessionPromptModal
          resetStoredState={resetSessionStorageState}
          continueSession={hydrateQuiz}
          showSessionPrompt={showSessionPrompt}
          setShowSessionPrompt={setShowSessionPrompt}
        />
        <QuizContext.Provider value={contextValue}>
          {state.quiz.results || skipToResults ? (
            <ResultContainer resultCardOptions={resultCardOptions} />
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
