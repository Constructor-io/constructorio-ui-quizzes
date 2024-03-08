import { useCallback } from 'react';
import { ActionAnswerQuestion, QuestionTypes } from '../../components/CioQuiz/actions';
import { QuizEventsReturn } from '../../types';
import { getStateFromSessionStorage } from '../../utils';

const useHydrateQuizLocalState = (
  quizSessionStorageStateKey: string,
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>
): QuizEventsReturn.NextQuestion => {
  const sessionStorageQuizState = getStateFromSessionStorage(quizSessionStorageStateKey);
  const hydrateQuizLocalStateHandler = useCallback(() => {
    if (sessionStorageQuizState) {
      dispatchLocalState({
        type: QuestionTypes.Hydrate,
        payload: sessionStorageQuizState
      });
    }
  }, [dispatchLocalState, sessionStorageQuizState]);

  return hydrateQuizLocalStateHandler;
};

export default useHydrateQuizLocalState;
