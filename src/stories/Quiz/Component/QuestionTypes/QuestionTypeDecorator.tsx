import { Question } from '@constructor-io/constructorio-client-javascript/lib/types';
import QuizContext from '../../../../components/CioQuiz/context';
import { useMockContextValue } from '../../tests/mocks';
import StoryPreview from '../../utils/StoryPreview';

const React = require('react');
const ReactDOM = require('react-dom');

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000, {});
}

export default function QuestionTypeVariationsDecorator(Story: any, questions: Question[]) {
  const [question] = questions;
  const contextValue = useMockContextValue(question);

  return (
    <div className='cio-quiz'>
      <QuizContext.Provider value={contextValue}>
        <StoryPreview Component={Story} />
      </QuizContext.Provider>
    </div>
  );
}

export function QuestionTypePrimaryDecorator(Story: any, questions: Question[]) {
  const [question] = questions;
  const contextValue = useMockContextValue(question);

  return (
    <div className='cio-quiz'>
      <QuizContext.Provider value={contextValue}>
        <Story />
      </QuizContext.Provider>
    </div>
  );
}
