import React from 'react';
import ConstructorIO from '@constructor-io/constructorio-client-javascript';

import QuizContext, { QuizContextValue } from '../components/CioQuiz/context';
import { defaultContextMocks, DEMO_API_KEY } from './constants';

class MockConstructorIO extends ConstructorIO {
  quizzes: ConstructorIO.Quizzes = {
    getQuizNextQuestion: jest.fn(),
    getQuizResults: jest.fn(),
    getQuizResultsConfig: jest.fn(),
    options: {
      apiKey: DEMO_API_KEY,
    },
  };
}

export const mockConstructorIOClient =
  typeof window !== 'undefined' ? new MockConstructorIO({ apiKey: DEMO_API_KEY }) : undefined;

export function withContextWrapper({
  contextMocks = {},
}: {
  contextMocks?: Partial<QuizContextValue>;
}) {
  const value = { cioClient: mockConstructorIOClient, ...defaultContextMocks, ...contextMocks };
  function ContextWrapper({ children }: { children: React.ReactNode }) {
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
  }
  return ContextWrapper;
}
