import * as React from 'react';
import useCioClient from '../../hooks/useCioClient';
import OpenTextQuestion from '../OpenTextTypeQuestion';
import QuizContext from './context';
import CoverTypeQuestion from '../CoverTypeQuestion';
import SelectTypeQuestion from '../SelectTypeQuestion';
import reducer, { initialState } from './reducer';
import { QuestionTypes } from './actions';
import { NextQuestionResponse } from '../../types';

export interface IQuizProps {
  quizId: string;
}

export default function Quiz(props: IQuizProps) {
  const { quizId } = props;
  const cioClient = useCioClient({ apiKey: 'key_jaqzPcUDnK66puIO' }) as any;
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [questionResponse, setQuestionResponse] = React.useState<NextQuestionResponse>();
  const questionType = questionResponse?.next_question?.type;
  const isOpenQuestion = questionType === QuestionTypes.OpenText;
  const isCoverQuestion = questionType === QuestionTypes.Cover;
  const isSingleQuestion = questionType === QuestionTypes.SingleSelect;
  const isMultipleQuestion = questionType === QuestionTypes.MultipleSelect;
  const isSelectQuestion = isSingleQuestion || isMultipleQuestion;

  const contextValue = React.useMemo(
    () => ({
      dispatch,
      questionResponse,
      state
    }),
    [state, dispatch, questionResponse]
  );

  React.useEffect(() => {
    cioClient?.quizzes
      .getQuizNextQuestion(quizId, { answers: state.answers })
      .then((e: any) => setQuestionResponse(e));
  }, [cioClient, state, quizId]);

  return (
    <QuizContext.Provider value={contextValue}>
      {isOpenQuestion && <OpenTextQuestion key={questionResponse?.next_question.id} />}
      {isCoverQuestion && <CoverTypeQuestion key={questionResponse?.next_question.id} />}
      {isSelectQuestion && <SelectTypeQuestion key={questionResponse?.next_question.id} />}
    </QuizContext.Provider>
  );
}
