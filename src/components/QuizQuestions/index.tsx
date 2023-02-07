import OpenTextQuestion from '../OpenTextTypeQuestion/OpenTextTypeQuestion';
import CoverTypeQuestion from '../CoverTypeQuestion/CoverTypeQuestion';
import SelectTypeQuestion from '../SelectTypeQuestion/SelectTypeQuestion';
import { getQuestionTypes } from '../../utils';
import { NextQuestionResponse } from '../../types';

export default function QuizQuestions(props: { questionResponse: NextQuestionResponse }) {
  const {
    questionResponse: { next_question: nextQuestion },
  } = props;
  const questionTypes = getQuestionTypes(nextQuestion?.type);

  return (
    <>
      {questionTypes.isOpenQuestion && <OpenTextQuestion key={nextQuestion?.id} />}
      {questionTypes.isCoverQuestion && <CoverTypeQuestion key={nextQuestion?.id} />}
      {questionTypes.isSelectQuestion && <SelectTypeQuestion key={nextQuestion?.id} />}
    </>
  );
}
