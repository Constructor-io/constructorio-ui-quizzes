import QuizContext from '../../../../components/CioQuiz/context';
import { ResultsPageOptions } from '../../../../types';
import { useMockContextValue } from '../../tests/mocks';

const React = require('react');
const ReactDOM = require('react-dom');

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line import/no-extraneous-dependencies
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000, {});
}

export default function QuizResultsDecorator(
  Story: any,
  options: ResultsPageOptions = {
    onAddToCartClick: () => {},
  }
) {
  const contextValue = useMockContextValue();

  return (
    <div className='cio-quiz'>
      <QuizContext.Provider value={contextValue}>
        <div>
          <Story options={options} />
        </div>
      </QuizContext.Provider>
    </div>
  );
}
