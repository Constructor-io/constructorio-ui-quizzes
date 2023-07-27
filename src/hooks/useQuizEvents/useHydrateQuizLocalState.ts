import { useCallback } from 'react';
import { ActionAnswerQuestion, QuestionTypes } from '../../components/CioQuiz/actions';
import { QuizEventsReturn } from '../../types';
import { getStateFromSessionStorage } from '../../utils';

const useHydrateQuizLocalState = (
  quizStateKey: string,
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>
): QuizEventsReturn.NextQuestion => {
  const quizState = getStateFromSessionStorage(quizStateKey);
  const hydrateQuizLocalStateHandler = useCallback(() => {
    if (quizState) {
      dispatchLocalState({
        type: QuestionTypes.Hydrate,
        payload: quizState,
      });
    }
  }, [dispatchLocalState, quizState]);

  return hydrateQuizLocalStateHandler;
};

export default useHydrateQuizLocalState;
