import React, { useEffect, useState } from 'react';
import QuizContext, { QuizContextValue } from './context';
import QuizQuestions from '../QuizQuestions';
import ResultContainer from '../ResultContainer/ResultContainer';
import { RequestStates } from '../../constants';
import Spinner from '../Spinner/Spinner';
import useQuiz from '../../hooks/useQuiz';
import SessionPromptModal from '../SessionPromptModal/SessionPromptModal';
import { IQuizProps } from '../../types';
import { convertPrimaryColorsToString } from '../../utils';

export default function CioQuiz(props: IQuizProps) {
  const {
    cioClient,
    state,
    events: { hydrateQuiz, hasSessionStorageState, resetSessionStorageState },
    getAddToCartButtonProps,
    getAddToFavoritesButtonProps,
    getCoverQuestionProps,
    getHydrateQuizButtonProps,
    getNextQuestionButtonProps,
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
  const { resultsPageOptions, sessionStateOptions } = props;

  useEffect(() => {
    // Respect showSessionModal if defined, else default to true.
    if (sessionStateOptions?.showSessionModal !== undefined) {
      setShowSessionPrompt(sessionStateOptions?.showSessionModal && hasSessionStorageState());
    } else {
      setShowSessionPrompt(hasSessionStorageState());
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
    getOpenTextInputProps,
    getPreviousQuestionButtonProps,
    getQuizImageProps,
    getQuizResultButtonProps,
    getQuizResultLinkProps,
    getResetQuizButtonProps,
    getSelectInputProps,
    customClickItemCallback: !!resultsPageOptions?.onQuizResultClick,
    customAddToFavoritesCallback: !!resultsPageOptions?.onAddToFavoritesClick,
    primaryColorStyles,
  };

  if (state.quiz.requestState === RequestStates.Loading) {
    return (
      <div className='cio-quiz'>
        <Spinner />
      </div>
    );
  }

  if (state.quiz.requestState === RequestStates.Success) {
    return (
      <div className='cio-quiz'>
        <style>.cio-quiz {convertPrimaryColorsToString(primaryColorStyles)}</style>
        <SessionPromptModal
          resetStoredState={resetSessionStorageState}
          continueSession={hydrateQuiz}
          showSessionPrompt={showSessionPrompt}
          setShowSessionPrompt={setShowSessionPrompt}
        />
        <QuizContext.Provider value={contextValue}>
          {state.quiz.results && <ResultContainer options={resultsPageOptions} />}
          {state.quiz.currentQuestion && <QuizQuestions />}
        </QuizContext.Provider>
      </div>
    );
  }
  return null;
}
