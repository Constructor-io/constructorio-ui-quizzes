import * as React from 'react';
import useCioClient from '../../hooks/useCioClient';
import OpenTextQuestion from '../OpenTextTypeQuestion';
import QuizContext from './context';
import CoverTypeQuestion from '../CoverTypeQuestion';
import SelectTypeQuestion from '../SelectTypeQuestion';
import reducer, { initialState } from './reducer';
import { QuestionTypes } from './actions';

export interface IQuizProps {
  quizName: string
}

export default function Quiz(props: IQuizProps) {
  const { quizName } = props;
  const cioClient = useCioClient({ apiKey: 'key_jaqzPcUDnK66puIO' }) as any;
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [questionRespone, setQuestionResponse] = React.useState<any>();
  const questionType = questionRespone?.next_question?.type;
  const isOpenQuestion = questionType === QuestionTypes.OpenText;
  const isCoverQuestion = questionType === QuestionTypes.Cover;
  const isSingleQuestion = questionType === QuestionTypes.SingleSelect;
  const isMultipleQuestion = questionType === QuestionTypes.MultipleSelect;
  const isSelectQuestion = isSingleQuestion || isMultipleQuestion;

  const contextValue = React.useMemo(
    () => ({
      dispatch,
      questionRespone,
      state
    }),
    [state, dispatch, questionRespone],
  );

  React.useEffect(() => {
    cioClient?.quizzes.getQuizNextQuestion(
      quizName,
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
