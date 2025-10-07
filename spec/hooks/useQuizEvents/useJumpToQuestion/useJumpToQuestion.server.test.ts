import { renderHookServerSide } from '../../../__tests__/utils.server';
import useJumpToQuestion from '../../../../src/hooks/useQuizEvents/useJumpToQuestion';
import { QuizAPIReducerState } from '../../../../src/components/CioQuiz/quizApiReducer';

describe('Testing Hook (server): useJumpToQuestion', () => {
  it('initializes without throwing errors', async () => {
    const dispatchLocalStateMock = jest.fn();
    const dispatchApiStateMock = jest.fn();
    const quizApiStateMock: QuizAPIReducerState = {
      quizCurrentQuestion: {
        id: '1',
        next_question: {
          id: '2',
          type: 'singleChoice',
        },
      },
    } as unknown as QuizAPIReducerState;

    const executeHook = () =>
      renderHookServerSide(
        () =>
          useJumpToQuestion({
            quizApiState: quizApiStateMock,
            dispatchLocalState: dispatchLocalStateMock,
            dispatchApiState: dispatchApiStateMock,
          }),
        {
          initialProps: {},
        }
      );

    expect(executeHook).not.toThrow();
  });
});
