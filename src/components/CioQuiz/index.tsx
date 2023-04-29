import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import React from 'react';
import QuizContext from './context';
import QuizQuestions from '../QuizQuestions';
import ResultContainer from '../ResultContainer/ResultContainer';
import { RequestStates } from '../../constants';
import Spinner from '../Spinner/Spinner';
import useQuiz, { IQuizProps } from '../../hooks/useQuiz';

export default function CioQuiz(props: IQuizProps) {
  const {
    cioClient,
    dispatch,
    quizState,
    questionResponse,
    resultsResponse,
    isFirstQuestion,
    quizNextHandler,
    quizBackHandler,
    requestState,
    resetQuizSessionId,
  } = useQuiz(props);

  const contextValue = {
    cioClient,
    dispatch,
    quizState,
    questionResponse,
    resultsResponse,
    isFirstQuestion,
    quizNextHandler,
    quizBackHandler,
  };

  const { resultsPageOptions } = props;

  if (requestState === RequestStates.Loading) {
    return (
      <div className='cio-quiz'>
        <Spinner />
      </div>
    );
  }

  if (requestState === RequestStates.Success) {
    return (
      <div className='cio-quiz'>
        <QuizContext.Provider value={contextValue}>
          {resultsResponse && (
            <ResultContainer options={resultsPageOptions} resetQuizSessionId={resetQuizSessionId} />
          )}
          {questionResponse && <QuizQuestions questionResponse={questionResponse} />}
        </QuizContext.Provider>
      </div>
    );
  }
  return null;
}
