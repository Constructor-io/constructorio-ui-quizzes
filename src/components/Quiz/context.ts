import React from 'react';
import { ActionAnswerQuestion } from './actions';
import { QuizReducerState } from './reducer';

interface QuizContextValue {
  questionRespone: any,
  state: QuizReducerState,
  dispatch: React.Dispatch<ActionAnswerQuestion>
}

export default React.createContext<Partial<QuizContextValue>>({});
