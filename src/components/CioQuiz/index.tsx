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
    events: { quizNextHandler, quizBackHandler, onResetClick },
  } = useQuiz(props);

  const contextValue: QuizContextValue = {
    cioClient,
    quizLocalState,
    quizApiState,
    isFirstQuestion,
    quizNextHandler,
    quizBackHandler,
  };

  const { resultsPageOptions } = props;

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
          {quizApiState.quizResults && (
            <ResultContainer options={resultsPageOptions} resetQuizSessionId={onResetClick} />
          )}
          {quizApiState.quizCurrentQuestion && (
            <QuizQuestions questionResponse={quizApiState.quizCurrentQuestion} />
          )}
        </QuizContext.Provider>
      </div>
    );
  }
  return null;
}
