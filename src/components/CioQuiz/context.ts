import React from 'react';
import { RequestStates } from '../../constants';
import { NextQuestionResponse } from '../../types';
import { ActionAnswerQuestion } from './actions';
import { QuizReducerState } from './reducer';

interface QuizContextValue {
  state: QuizReducerState;
  requestState: RequestStates;
  questionResponse: NextQuestionResponse;
  resultsResponse: any;
  isFirstQuestion: boolean;
  quizNextHandler: (action?: ActionAnswerQuestion) => void;
  quizBackHandler: () => void;
  dispatch: React.Dispatch<ActionAnswerQuestion>;
}

export default React.createContext<Partial<QuizContextValue>>({});
