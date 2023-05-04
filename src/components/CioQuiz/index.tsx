import React from 'react';
import QuizContext, { QuizContextValue } from './context';
import QuizQuestions from '../QuizQuestions';
import ResultContainer from '../ResultContainer/ResultContainer';
import { RequestStates } from '../../constants';
import Spinner from '../Spinner/Spinner';
import useQuiz from '../../hooks/useQuiz';
import { IQuizProps } from '../../types';

export default function CioQuiz(props: IQuizProps) {
  const {
    cioClient,
    state,
    events: { getNextQuestion, getPreviousQuestion, getResetQuiz, getAddToCart, getResultClick },
  } = useQuiz(props);

  const { resultsPageOptions } = props;

  const contextValue: QuizContextValue = {
    cioClient,
    state,
    getNextQuestion,
    getPreviousQuestion,
    getResetQuiz,
    getAddToCart,
    getResultClick,
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
        <QuizContext.Provider value={contextValue}>
          {state.quiz.results && <ResultContainer options={resultsPageOptions} />}
          {state.quiz.currentQuestion && <QuizQuestions />}
        </QuizContext.Provider>
      </div>
    );
  }
  return null;
}
