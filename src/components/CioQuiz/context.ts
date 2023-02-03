import React from 'react';
import { RequestStates } from '../../constants';
import { NextQuestionResponse, ResultsResponse } from '../../types';
import { ActionAnswerQuestion } from './actions';
import { QuizReducerState } from './reducer';

interface QuizContextValue {
  state: QuizReducerState;
  requestState: RequestStates;
  questionResponse: NextQuestionResponse;
  resultsResponse: ResultsResponse;
  quizNextHandler: (action?: ActionAnswerQuestion) => void;
  onBackClick: () => void;
  setShowResults: (showResults: boolean) => void;
  dispatch: React.Dispatch<ActionAnswerQuestion>;
}

export default React.createContext<Partial<QuizContextValue>>({});
