import * as React from 'react';
import useCioClient from '../../hooks/useCioClient';
import OpenTextQuestion from '../OpenTextTypeQuestion';
import QuizContext from './context';
import CoverTypeQuestion from '../CoverTypeQuestion';
import SelectTypeQuestion from '../SelectTypeQuestion';
import reducer from './reducer';
import { QuestionTypes } from './actions';

export interface IQuizProps {
}

export default function Quiz() {
  const cioClient = useCioClient({ apiKey: 'key_jaqzPcUDnK66puIO' }) as any;
  const [state, dispatch] = React.useReducer(reducer, { answers: [] });
  const [questionRespone, setQuestionResponse] = React.useState<any>();
  const quesitonType = questionRespone?.next_question?.type;
  const isOpenQuestion = quesitonType === QuestionTypes.OpenText;
  const isCoverQuestion = quesitonType === QuestionTypes.Cover;
  const isSingleQuestion = quesitonType === QuestionTypes.SingleSelect;
  const isMultipleQuestion = quesitonType === QuestionTypes.MultipleSelect;
  const isSelectQuestion = isSingleQuestion || isMultipleQuestion;

  const contextValue = React.useMemo(
    () => ({
      dispatch,
      questionRespone,
    }),
    [dispatch, questionRespone],
  );

  React.useEffect(() => {
    cioClient?.quizzes.getQuizNextQuestion(
      'coffee-quiz',
      { answers: state.answers },
    ).then((e:any) => setQuestionResponse(e));
  }, [cioClient, state]);

  return (
    <QuizContext.Provider value={contextValue}>
      {isOpenQuestion && <OpenTextQuestion />}
      {isCoverQuestion && <CoverTypeQuestion />}
      {isSelectQuestion && <SelectTypeQuestion />}
    </QuizContext.Provider>
  );
}
