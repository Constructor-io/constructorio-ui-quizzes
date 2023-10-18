import QuizContext from '../../../../components/CioQuiz/context';
import { useMockContextValue } from '../../tests/mocks';

const React = require('react');
const ReactDOM = require('react-dom');

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000, {});
}

export default function QuizResultsDecorator(Story: any) {
  const contextValue = useMockContextValue();

  return (
    <div className='cio-quiz'>
      <QuizContext.Provider value={contextValue}>
        <div>
          <Story />
        </div>
      </QuizContext.Provider>
    </div>
  );
}
