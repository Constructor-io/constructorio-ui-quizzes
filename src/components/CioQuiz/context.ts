import React from 'react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { QuizEventsReturn, QuizReturnState } from '../../types';

export interface QuizContextValue {
  cioClient?: ConstructorIOClient;
  state?: QuizReturnState;
  resetQuiz: QuizEventsReturn.ResetQuiz;
  nextQuestion?: QuizEventsReturn.NextQuestion;
  previousQuestion?: QuizEventsReturn.PreviousQuestion;
  addToCart: QuizEventsReturn.AddToCart;
  resultClick: QuizEventsReturn.ResultClick;
  customClickItemCallback: boolean;
}

export default React.createContext<Partial<QuizContextValue>>({});
