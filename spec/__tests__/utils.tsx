import React from 'react';
import ConstructorIO from '@constructor-io/constructorio-client-javascript';

import QuizContext, { QuizContextValue } from '../../src/components/CioQuiz/context';
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
  typeof window !== 'undefined'
    ? new MockConstructorIO({ apiKey: DEMO_API_KEY })
    : (undefined as unknown as ConstructorIO);

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

export function withContext<Props extends {}>(
  Component: React.ComponentType<Props>,
  {
    contextMocks = {},
  }: {
    contextMocks?: Partial<QuizContextValue>;
  } = {}
): React.ComponentType<Props> {
  const value = { cioClient: mockConstructorIOClient, ...defaultContextMocks, ...contextMocks };
  function Provider(props: Props) {
    return (
      <QuizContext.Provider value={value}>
        <Component {...props} />
      </QuizContext.Provider>
    );
  }

  return Provider;
}
