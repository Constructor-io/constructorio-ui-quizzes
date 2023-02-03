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
  isFirstQuestion: boolean;
  quizNextHandler: (action?: ActionAnswerQuestion) => void;
  quizBackHandler: () => void;
  dispatch: React.Dispatch<ActionAnswerQuestion>;
}

export default React.createContext<Partial<QuizContextValue>>({});
