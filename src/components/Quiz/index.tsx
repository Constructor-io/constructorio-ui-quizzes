import { useReducer, useState, useMemo, useEffect } from 'react';
import useCioClient from '../../hooks/useCioClient';
import OpenTextQuestion from '../OpenTextTypeQuestion/OpenTextTypeQuestion';
import QuizContext from './context';
import CoverTypeQuestion from '../CoverTypeQuestion/CoverTypeQuestion';
import SelectTypeQuestion from '../SelectTypeQuestion/SelectTypeQuestion';
import reducer, { initialState } from './reducer';
import { NextQuestionResponse } from '../../types';
import ResultContainer from '../ResultContainer/ResultContainer';
import './quiz.css';
import { getNextQuestion, getQuestionTypes, getQuizResults } from '../../utils';

export interface IQuizProps {
  quizId: string;
  apiKey: string;
}

export default function Quiz(props: IQuizProps) {
  const { quizId, apiKey } = props;
  const cioClient = useCioClient({ apiKey }) as any;
  const [state, dispatch] = useReducer(reducer, initialState);
  const [questionResponse, setQuestionResponse] = useState<NextQuestionResponse>();
  const [resultsResponse, setResultsResponse] = useState<any>();
  const [showResults, setShowResults] = useState<boolean>(false);
  const questionTypes = getQuestionTypes(questionResponse?.next_question?.type);

  const contextValue = useMemo(
    () => ({
      dispatch,
      questionResponse,
      state,
      resultsResponse,
      setShowResults
    }),
    [state, dispatch, questionResponse, resultsResponse, setShowResults]
  );

  /* const quizBackHandler = (popAnswers: boolean) => {
    // back handler for a back button. Passing true will pop the latest answers. Should be true unless on result page.
    dispatch({ type: QuestionTypes.Back, payload: popAnswers });
    setShowResults(false);
  }; */

  console.log('i render');
  useEffect(() => {
    (async () => {
      if (showResults) {
        setResultsResponse(undefined); // set undefined in cases where user redoes quiz, gets no results.
        try {
          const quizResults = await getQuizResults(cioClient, quizId, state.answers);
          setResultsResponse(quizResults);
        } catch (error) {
          setResultsResponse(undefined);
        }
      } else if (!questionResponse?.is_last_question) {
        const questionResult = await getNextQuestion(cioClient, quizId, state.answers);
        setQuestionResponse(questionResult);
      }
    })();
  }, [cioClient, state, showResults, quizId, questionResponse?.is_last_question]);

  if (showResults) {
    return (
      <QuizContext.Provider value={contextValue}>
        <ResultContainer />
      </QuizContext.Provider>
    );
  }

  return (
    <QuizContext.Provider value={contextValue}>
      {questionTypes.isOpenQuestion && (
        <OpenTextQuestion key={questionResponse?.next_question.id} />
      )}
      {questionTypes.isCoverQuestion && (
        <CoverTypeQuestion key={questionResponse?.next_question.id} />
      )}
      {questionTypes.isSelectQuestion && (
        <SelectTypeQuestion key={questionResponse?.next_question.id} />
      )}
    </QuizContext.Provider>
  );
}
