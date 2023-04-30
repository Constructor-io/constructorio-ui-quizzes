import React from 'react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { ActionAnswerQuestion } from './actions';
import { QuizLocalReducerState } from './quizLocalReducer';
import { QuizAPIReducerState } from './quizApiReducer';

export interface QuizContextValue {
  cioClient?: ConstructorIOClient;
  quizLocalState?: QuizLocalReducerState;
  quizApiState?: QuizAPIReducerState;
  isFirstQuestion?: boolean;
  quizNextHandler?: (action?: ActionAnswerQuestion) => void;
  quizBackHandler?: () => void;
}

export default React.createContext<Partial<QuizContextValue>>({});
