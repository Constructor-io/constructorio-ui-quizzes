import React, { useContext } from 'react';
import QuizContext from './context';
import QuizQuestions from '../QuizQuestions';
import ResultContainer from '../ResultContainer/ResultContainer';
import ControlBar from '../ControlBar/ControlBar';
import { RequestStates } from '../../constants';
import Spinner from '../Spinner/Spinner';

import { QuestionsPageOptions, ResultCardOptions, ResultsPageOptions } from '../../types';

import ProgressBar from '../ProgressBar/ProgressBar';

interface ICioQuizContent {
  setShowShareModal: React.Dispatch<React.SetStateAction<boolean>>;
  questionsPageOptions?: QuestionsPageOptions;
  resultsPageOptions?: ResultsPageOptions;
  resultCardOptions?: ResultCardOptions;
}

export default function CioQuizContent(props: ICioQuizContent) {
  const { setShowShareModal, questionsPageOptions, resultsPageOptions, resultCardOptions } = props;

  const { state } = useContext(QuizContext);

  if (!state) {
    return null;
  }

  if (state.quiz.requestState === RequestStates.Error) {
    return <div>error</div>; // TODO: CSL-3224
  }

  if (state.quiz.requestState === RequestStates.Loading) {
    return <Spinner />;
  }

  if (state.quiz.results || state.quizSessionStorageState.skipToResults) {
    return (
      <ResultContainer
        resultCardOptions={resultCardOptions}
        onShare={() => setShowShareModal(true)}
        resultsPageOptions={resultsPageOptions}
      />
    );
  }

  if (state.quiz.currentQuestion) {
    return (
      <>
        <ProgressBar />
        <QuizQuestions />
        <ControlBar
          skipQuestionButtonText={questionsPageOptions?.skipQuestionButtonText}
          ctaButtonText={state.quiz.currentQuestion?.next_question?.cta_text || undefined}
        />
      </>
    );
  }

  return null;
}
