import { renderHookServerSide } from '../../__tests__/utils.server';
import useSessionStorageState from '../../../src/hooks/useQuizState/useSessionStorageState';
import { QuizLocalReducerState } from '../../../src/components/CioQuiz/quizLocalReducer';
import { QuestionTypes } from '../../../src/components/CioQuiz/actions';
import { QUIZ_SESSION_ID, QUIZ_VERSION_ID, QUIZ_SESSION_KEY } from '../../__tests__/constants';

describe('Testing Hook (server): useSessionStorageState', () => {
  const mockState: QuizLocalReducerState = {
    answers: [['answer1'], ['answer2']],
    answerInputs: {
      q1: {
        type: QuestionTypes.OpenText,
        value: 'value',
      },
    },
    prevAnswerInputs: {
      q1: {
        type: QuestionTypes.OpenText,
        value: 'prev',
      },
    },
    isQuizCompleted: false,
    quizVersionId: QUIZ_VERSION_ID,
    quizSessionId: QUIZ_SESSION_ID,
  };

  it('does not throw when rendered server-side', () => {
    expect(() => {
      renderHookServerSide(
        () => useSessionStorageState(mockState, { sessionStateKey: QUIZ_SESSION_KEY }, false),
        {
          initialProps: {},
        }
      );
    }).not.toThrow();
  });

  it('return correct data on server-side when enableHydration equals false', () => {
    const { result } = renderHookServerSide(
      () => useSessionStorageState(mockState, { sessionStateKey: QUIZ_SESSION_KEY }, false),
      {
        initialProps: {},
      }
    );

    expect(result).toMatchObject({
      skipToResults: false,
      quizSessionStorageStateKey: QUIZ_SESSION_KEY,
    });

    expect(typeof result.hasSessionStorageState).toBe('function');
  });
});
