import QuizContext from '../../../../components/CioQuiz/context';
import ZeroResults from '../../../../components/ZeroResults/ZeroResults';
import { useMockContextValue } from '../../tests/mocks';
import StoryPreview from '../../utils/StoryPreview';

const React = require('react');
const ReactDOM = require('react-dom');

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000, {});
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

function ZeroResultsComponent() {
  return <ZeroResults />;
}

export function ZeroResultsDecorator(Story: any) {
  const contextValue = useMockContextValue();

  const stateWithZeroResults = {
    ...contextValue.state,
    quiz: {
      ...contextValue.state.quiz,
      results: {
        response: {
          results: [],
          facets: [],
          groups: [],
          sort_options: [],
          refined_content: [],
          total_num_results: 0,
          features: [],
          result_sources: {},
        },
        quiz_id: '',
        quiz_session_id: '',
        quiz_version_id: '',
        quiz_selected_options: [],
      },
    },
  };

  return (
    <div className='cio-quiz'>
      <QuizContext.Provider value={{ ...contextValue, state: stateWithZeroResults }}>
        <div>
          <StoryPreview Component={ZeroResultsComponent} />
        </div>
      </QuizContext.Provider>
    </div>
  );
}
