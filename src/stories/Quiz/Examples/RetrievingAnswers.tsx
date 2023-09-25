/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import QuizContext from '../../../components/CioQuiz/context';
import useQuiz from '../../../hooks/useQuiz';

import { ResultContainer } from '../../../index';
import QuizQuestions from '../../../components/QuizQuestions';
import ControlBar from '../../../components/ControlBar/ControlBar';

import { apiKey, quizId } from '../../../constants';
import { IQuizProps, ResultsPageOptions } from '../../../types';
import '../../../styles.css';

export default function RetrievingAnswersStory() {
  const resultsPageOptions: ResultsPageOptions = {
    onAddToCartClick: () => {},
  };

  const quizProps: IQuizProps = {
    apiKey,
    quizId,
    resultsPageOptions,
  };

  const quizHook = useQuiz(quizProps);
  const { state } = quizHook;
  const openTextQuestionAnswers = Object.entries(state.answers.inputs).filter(
    (entry) => entry[1].type === 'open'
  );

  const currentQuestionData = state.quiz.currentQuestion?.next_question;

  useEffect(() => {
    quizHook.events.hydrateQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='cio-quiz'>
      <QuizContext.Provider value={quizHook}>
        {/* Example of Rendering Open Text Answers */}
        <div>
          <div className='cio-results-container' style={{ border: '2px solid red' }}>
            {state.answers.inputs[1] && (
              <>
                <h1 className='cio-results-title'>Retrieved Open Text Answers</h1>
                {openTextQuestionAnswers.map(
                  (entry) =>
                    entry[1].type === 'open' &&
                    !!entry[1].value && (
                      <div>
                        Question {entry[0]} - {entry[1].value}
                      </div>
                    )
                )}
              </>
            )}
          </div>

          {/* The Quiz */}
          {!state.quiz.results ? (
            <>
              <QuizQuestions />
              <ControlBar ctaButtonText={currentQuestionData?.cta_text || undefined} />
            </>
          ) : (
            <ResultContainer options={resultsPageOptions} />
          )}
        </div>
      </QuizContext.Provider>
    </div>
  );
}

const description =
  'User input is stored as part of the state. You are able to access this state via the `useCioQuiz` hook.';
const showcasedCode = `
const resultsPageOptions: ResultsPageOptions = {
  onAddToCartClick: () => {},
};

const quizProps: IQuizProps = {
  apiKey,
  quizId,
  resultsPageOptions,
};

const quizHook = useCioQuiz(quizProps);
const { state } = quizHook;
const openTextQuestionAnswers = Object.entries(state.answers.inputs).filter(
  // entry: { type: <open|cover|single|multiple>, value: string|null|number|number[] }
  (entry) => entry[1].type === 'open' 
);
`;
const code = `
import { useCioQuiz, ResultContainer, QuizQuestions, ControlBar, QuizContext } from '@constructor-io/constructorio-ui-quizzes'
import type { ResultsPageOptions, IQuizProps } from '@constructor-io/constructorio-ui-quizzes'

function Quiz() {
  const resultsPageOptions: ResultsPageOptions = {
    onAddToCartClick: () => {},
  };

  const quizProps: IQuizProps = {
    apiKey,
    quizId,
    resultsPageOptions,
  };

  const quizHook = useCioQuiz(quizProps);
  const { state } = quizHook;
  const openTextQuestionAnswers = Object.entries(state.answers.inputs).filter(
    (entry) => entry[1].type === 'open'
  );

  const currentQuestionData = state.quiz.currentQuestion?.next_question;

  useEffect(() => {
    quizHook.events.hydrateQuiz();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='cio-quiz'>
      <QuizContext.Provider value={quizHook}>
        {/* Example of Rendering Open Text Answers */}
        <div>
          <div className='cio-results-container' style={{ border: '2px solid red' }}>
            {state.answers.inputs[1] && (
              <>
                <h1 className='cio-results-title'>Retrieved Open Text Answers</h1>
                {openTextQuestionAnswers.map(
                  (entry) =>
                    entry[1].type === 'open' &&
                    !!entry[1].value && (
                      <div>
                        Question {entry[0]} - {entry[1].value}
                      </div>
                    )
                )}
              </>
            )}
          </div>

          {/* The Quiz */}
          {!state.quiz.results ? (
            <>
              <QuizQuestions />
              <ControlBar ctaButtonText={currentQuestionData?.cta_text || undefined} />
            </>
          ) : (
            <ResultContainer options={resultsPageOptions} />
          )}
        </div>
      </QuizContext.Provider>
    </div>
  );
}
`;

RetrievingAnswersStory.parameters = {
  docs: {
    source: {
      code,
      language: 'jsx',
      format: true,
      type: 'code',
    },
    description: {
      story: `
${description}

\`\`\`jsx
${showcasedCode}
\`\`\`
      `,
    },
  },
};
