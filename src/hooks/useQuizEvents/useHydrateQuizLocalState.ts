import { useCallback } from 'react';
import { ActionAnswerQuestion, QuestionTypes } from '../../components/CioQuiz/actions';
import { QuizEventsReturn } from '../../types';
import { getStateFromSessionStorage } from '../../utils';

const useHydrateQuizLocalState = (
  quizId: string,
  quizSessionStorageStateKey: string,
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>
): QuizEventsReturn.NextQuestion => {
  const sessionStorageQuizState = getStateFromSessionStorage(quizSessionStorageStateKey);
  const hydrateQuizLocalStateHandler = useCallback(() => {
    const quizData = sessionStorageQuizState?.[quizId];
    if (quizData) {
      dispatchLocalState({
        type: QuestionTypes.Hydrate,
        payload: quizData,
      });
    }
  }, [dispatchLocalState, quizId, sessionStorageQuizState]);

  return hydrateQuizLocalStateHandler;
};

export default useHydrateQuizLocalState;
