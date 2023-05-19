import React, { useEffect, useState } from 'react';
import QuizContext, { QuizContextValue } from './context';
import QuizQuestions from '../QuizQuestions';
import ResultContainer from '../ResultContainer/ResultContainer';
import { RequestStates } from '../../constants';
import Spinner from '../Spinner/Spinner';
import useQuiz from '../../hooks/useQuiz';
import SessionPromptModal from '../SessionPromptModal/SessionPromptModal';
import { IQuizProps } from '../../types';

export default function CioQuiz(props: IQuizProps) {
  const {
    cioClient,
    state,
    events: {
      nextQuestion,
      previousQuestion,
      resetQuiz,
      addToCart,
      resultClick,
      hydrateQuiz,
      hasStoredState,
      resetStoredState,
    },
  } = useQuiz(props);
  const [showSessionPrompt, setShowSessionPrompt] = useState(false);
  const { resultsPageOptions, sessionStateOptions } = props;

  useEffect(() => {
    if (sessionStateOptions?.showSessionModal !== undefined) {
      setShowSessionPrompt(sessionStateOptions?.showSessionModal && hasStoredState());
    } else {
      setShowSessionPrompt(hasStoredState());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const contextValue: QuizContextValue = {
    cioClient,
    state,
    nextQuestion,
    previousQuestion,
    resetQuiz,
    addToCart,
    resultClick,
    customClickItemCallback: !!resultsPageOptions?.onQuizResultClick,
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
        <SessionPromptModal
          resetStoredState={resetStoredState}
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
