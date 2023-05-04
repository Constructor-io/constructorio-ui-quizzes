import React from 'react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { QuizEventsReturn, QuizReturnState } from '../../types';

export interface QuizContextValue {
  cioClient?: ConstructorIOClient;
  state?: QuizReturnState;
  getResetQuiz: QuizEventsReturn.GetResetQuiz;
  getNextQuestion?: QuizEventsReturn.GetNextQuestion;
  getPreviousQuestion?: QuizEventsReturn.GetPreviousQuestion;
  getAddToCart: QuizEventsReturn.GetAddToCart;
  getResultClick: QuizEventsReturn.GetResultClick;
  customClickItemCallback: boolean;
}

export default React.createContext<Partial<QuizContextValue>>({});
