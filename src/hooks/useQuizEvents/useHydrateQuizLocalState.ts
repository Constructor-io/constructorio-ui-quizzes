import { useCallback, useEffect } from 'react';
import { ActionAnswerQuestion, QuestionTypes } from '../../components/CioQuiz/actions';
import { QuizEventsReturn, QuizSessionStorageState } from '../../types';
import { getStateFromSessionStorage } from '../../utils';

const useHydrateQuizLocalState = (
  quizId: string,
  quizSessionStorageState: QuizSessionStorageState,
  dispatchLocalState: React.Dispatch<ActionAnswerQuestion>
): QuizEventsReturn.NextQuestion => {
  const { key: quizSessionStorageStateKey, skipToResults } = quizSessionStorageState;
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

  useEffect(() => {
    if (skipToResults) hydrateQuizLocalStateHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizId]);

  return hydrateQuizLocalStateHandler;
};

export default useHydrateQuizLocalState;
