import { renderHookServerSide } from '../../__tests__/utils.server';
import useQuizBackClick from '../../../src/hooks/useQuizEvents/useQuizBackClick';
import { QuizAPIReducerState } from '../../../src/components/CioQuiz/quizApiReducer';

describe('Testing Hook (server): useQuizBackClick', () => {
  it('initializes without throwing an error', () => {
    const dispatchLocalStateMock = jest.fn();
    const quizApiState = {
      quizCurrentQuestion: { id: '1', type: 'someQuestionType' },
    } as unknown as QuizAPIReducerState;

    expect(() => {
      const { result } = renderHookServerSide(
        () => useQuizBackClick(quizApiState, dispatchLocalStateMock),
        {
          initialProps: {},
        }
      );

      result();
    }).not.toThrow();
  });
});
