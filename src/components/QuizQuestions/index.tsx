import React, { useContext } from 'react';
import OpenTextQuestion from '../OpenTextTypeQuestion/OpenTextTypeQuestion';
import CoverTypeQuestion from '../CoverTypeQuestion/CoverTypeQuestion';
import SelectTypeQuestion from '../SelectTypeQuestion/SelectTypeQuestion';
import { getQuestionTypes } from '../../utils';
import QuizContext from '../CioQuiz/context';

export default function QuizQuestions() {
  const { state } = useContext(QuizContext);
  const nextQuestion = state?.quiz.currentQuestion?.next_question;
  const questionTypes = getQuestionTypes(nextQuestion?.type);

  return (
    <>
      {questionTypes.isOpenQuestion && <OpenTextQuestion key={nextQuestion?.id} />}
      {questionTypes.isCoverQuestion && <CoverTypeQuestion key={nextQuestion?.id} />}
      {questionTypes.isSelectQuestion && <SelectTypeQuestion key={nextQuestion?.id} />}
    </>
  );
}
