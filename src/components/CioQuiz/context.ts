import React from 'react';
import { NextQuestionResponse } from '../../types';
import { ActionAnswerQuestion } from './actions';
import { QuizReducerState } from './reducer';

interface QuizContextValue {
  questionResponse: NextQuestionResponse;
  state: QuizReducerState;
  dispatch: React.Dispatch<ActionAnswerQuestion>;
  resultsResponse: any;
  setShowResults: (showResults: boolean) => void;
  quizNextHandler: (action?: ActionAnswerQuestion) => void;
}

export default React.createContext<Partial<QuizContextValue>>({});
