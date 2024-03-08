import React, { useMemo } from 'react';
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
  typeof window !== 'undefined' ? new MockConstructorIO({ apiKey: DEMO_API_KEY }) : null;

export function WithContextWrapper({
  contextMocks = {},
  children,
}: {
  contextMocks: Partial<QuizContextValue> | undefined;
  children: React.ReactNode;
}) {
  const value = useMemo(() => ({ ...defaultContextMocks, ...contextMocks }), [contextMocks]);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}
