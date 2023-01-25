import React from 'react';
import { RequestStates } from '../../constants';
import { NextQuestionResponse } from '../../types';
import { ActionAnswerQuestion } from './actions';
import { QuizReducerState } from './reducer';

interface QuizContextValue {
  questionResponse: NextQuestionResponse;
  state: QuizReducerState;
  dispatch: React.Dispatch<ActionAnswerQuestion>;
  resultsResponse: any;
  setShowResults: (showResults: boolean) => void;
  onBackClick: () => void;
  requestState: RequestStates;
}

export default React.createContext<Partial<QuizContextValue>>({});
