import React from 'react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { QuizResultData } from '@constructor-io/constructorio-client-javascript/lib/types';
import { QuizLocalReducerState } from './quizLocalReducer';
import { QuizAPIReducerState } from './quizApiReducer';

export interface QuizContextValue {
  cioClient?: ConstructorIOClient;
  quizLocalState?: QuizLocalReducerState;
  quizApiState?: QuizAPIReducerState;
  isFirstQuestion?: boolean;
  quizNextHandler?: (payload?: any) => void;
  quizBackHandler?: () => void;
  addToCartClickHandler: (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    result: QuizResultData,
    price: any
  ) => void;
  resultClickHandler: (result: QuizResultData, position: number) => void;
  resetQuizClickHandler: () => void;
  customClickItemCallback: boolean;
}

export default React.createContext<Partial<QuizContextValue>>({});
