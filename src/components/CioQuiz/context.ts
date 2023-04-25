import React from 'react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { RequestStates } from '../../constants';
import { NextQuestionResponse, QuizResultsResponse } from '../../types';
import { ActionAnswerQuestion } from './actions';
import { QuizReducerState } from './reducer';

interface QuizContextValue {
  state: QuizReducerState;
  requestState: RequestStates;
  questionResponse: NextQuestionResponse;
  resultsResponse: QuizResultsResponse;
  isFirstQuestion: boolean;
  quizNextHandler: (action?: ActionAnswerQuestion) => void;
  quizBackHandler: () => void;
  dispatch: React.Dispatch<ActionAnswerQuestion>;
  cioClient: ConstructorIOClient;
}

export default React.createContext<Partial<QuizContextValue>>({});
