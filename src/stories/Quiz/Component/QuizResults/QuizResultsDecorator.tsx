import React from 'react';
import ReactDOM from 'react-dom';
import QuizContext from '../../../../components/CioQuiz/context';
import { useMockContextValue } from '../../tests/mocks';
import StoryPreview from '../../utils/StoryPreview';

if (process.env.NODE_ENV !== 'production') {
  import('@axe-core/react').then((axe) => axe.default(React, ReactDOM, 1000, {})).catch(() => {});
}

export default function QuizResultsVariationsDecorator(Story: any) {
  const contextValue = useMockContextValue();

  return (
    <div className='cio-quiz'>
      <QuizContext.Provider value={contextValue}>
        <div>
          <StoryPreview Component={Story} />
        </div>
      </QuizContext.Provider>
    </div>
  );
}

export function QuizResultsPrimaryDecorator(Story: any) {
  const contextValue = useMockContextValue();

  return (
    <div className='cio-quiz'>
      <QuizContext.Provider value={contextValue}>
        <div>
          <Story Component={Story} />
        </div>
      </QuizContext.Provider>
    </div>
  );
}

export function QuizResultsWithSummaryDecorator(Story: any) {
  const contextValue = useMockContextValue(undefined, { withSummary: true });

  return (
    <div className='cio-quiz'>
      <QuizContext.Provider value={contextValue}>
        <div>
          <StoryPreview Component={Story} />
        </div>
      </QuizContext.Provider>
    </div>
  );
}
