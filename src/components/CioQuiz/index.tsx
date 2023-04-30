import React from 'react';
import QuizContext, { QuizContextValue } from './context';
import QuizQuestions from '../QuizQuestions';
import ResultContainer from '../ResultContainer/ResultContainer';
import { RequestStates } from '../../constants';
import Spinner from '../Spinner/Spinner';
import useQuiz, { IQuizProps } from '../../hooks/useQuiz';

export default function CioQuiz(props: IQuizProps) {
  const {
    cioClient,
    isFirstQuestion,
    quizApiState,
    quizLocalState,
    events: {
      quizNextHandler,
      quizBackHandler,
      resetQuizClickHandler,
      addToCartClickHandler,
      resultClickHandler,
    },
  } = useQuiz(props);

  const { resultsPageOptions } = props;

  const contextValue: QuizContextValue = {
    cioClient,
    quizLocalState,
    quizApiState,
    isFirstQuestion,
    quizNextHandler,
    quizBackHandler,
    addToCartClickHandler,
    resultClickHandler,
    resetQuizClickHandler,
    customClickItemCallback: !!resultsPageOptions?.onQuizResultClick,
  };

  if (quizApiState?.quizRequestState === RequestStates.Loading) {
    return (
      <div className='cio-quiz'>
        <Spinner />
      </div>
    );
  }

  if (quizApiState?.quizRequestState === RequestStates.Success) {
    return (
      <div className='cio-quiz'>
        <QuizContext.Provider value={contextValue}>
          {quizApiState.quizResults && <ResultContainer options={resultsPageOptions} />}
          {quizApiState.quizCurrentQuestion && <QuizQuestions />}
        </QuizContext.Provider>
      </div>
    );
  }
  return null;
}
