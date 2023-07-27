import { useCallback, useEffect } from 'react';
import { GetCoverQuestionProps, Question, QuizEventsReturn } from '../../types';

export default function useCoverQuestionProps(
  setQuizAnswers: QuizEventsReturn.QuizAnswerChanged,
  currentQuestionData?: Question
): GetCoverQuestionProps {
  useEffect(() => {
    if (currentQuestionData?.type === 'cover') {
      setQuizAnswers('');
    }
  }, [setQuizAnswers, currentQuestionData]);

  const getCoverQuestionProps: GetCoverQuestionProps = useCallback(() => ({}), []);

  return getCoverQuestionProps;
}
