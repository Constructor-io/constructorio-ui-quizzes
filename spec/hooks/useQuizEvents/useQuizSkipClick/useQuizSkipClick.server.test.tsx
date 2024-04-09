import { renderHookServerSide } from '../../../__tests__/utils.server';
import useQuizSkipClick from '../../../../src/hooks/useQuizEvents/useQuizSkipClick';
import { QuizAPIReducerState } from '../../../../src/components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../../../src/components/CioQuiz/quizLocalReducer';

jest.mock('../../../src/services', () => ({
  trackQuizResultsLoaded: jest.fn(),
}));

describe('Testing Hook (server): useQuizSkipClick', () => {
  const dispatchLocalStateMock = jest.fn();
  const onQuizSkipQuestionMock = jest.fn();
  const quizApiStateMock = {
    quizCurrentQuestion: {
      id: '1',
      next_question: {
        id: '2',
        type: 'multipleChoice',
      },
    },
  } as unknown as QuizAPIReducerState;
  const quizLocalStateMock = {
    answerInputs: {
      '2': {
        value: null,
      },
    },
  } as unknown as QuizLocalReducerState;

  it('initializes without throwing errors', () => {
    const executeHook = () =>
      renderHookServerSide(
        () =>
          useQuizSkipClick(
            quizApiStateMock,
            quizLocalStateMock,
            dispatchLocalStateMock,
            onQuizSkipQuestionMock
          ),
        { initialProps: {} }
      );

    expect(executeHook).not.toThrow();
  });
});
