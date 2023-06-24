import { Question } from '@constructor-io/constructorio-client-javascript/lib/types';
import QuizContext from '../../../../components/CioQuiz/context';
import { getMockContextValue } from '../../tests/mocks';

const React = require('react');
const ReactDOM = require('react-dom');

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line import/no-extraneous-dependencies
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000, {});
}

export default function QuestionTypeDecorator(Story: any, question: Question) {
  return (
    <div className='cio-quiz'>
      <QuizContext.Provider value={getMockContextValue(question)}>
        <Story />
      </QuizContext.Provider>
    </div>
  );
}
