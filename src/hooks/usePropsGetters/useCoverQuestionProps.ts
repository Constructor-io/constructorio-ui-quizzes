import { Nullable } from '@constructor-io/constructorio-client-javascript/lib/types';
import { useCallback, useEffect } from 'react';
import { GetCoverQuestionProps, Question, QuizEventsReturn } from '../../types';
import { QuestionTypes } from '../../components/CioQuiz/actions';

export default function useCoverQuestionProps(
  setQuizAnswers: QuizEventsReturn.QuizAnswerChanged,
  currentQuestionData?: Nullable<Question>
): GetCoverQuestionProps {
  useEffect(() => {
    if (currentQuestionData?.type === QuestionTypes.Cover) {
      setQuizAnswers('');
    }
  }, [setQuizAnswers, currentQuestionData]);

  const getCoverQuestionProps: GetCoverQuestionProps = useCallback(() => ({}), []);

  return getCoverQuestionProps;
}
