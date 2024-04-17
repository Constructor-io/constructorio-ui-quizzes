import { renderHookServerSide } from '../../../__tests__/utils.server';
import useQuizNextClick from '../../../../src/hooks/useQuizEvents/useQuizNextClick';
import { QuizAPIReducerState } from '../../../../src/components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../../../src/components/CioQuiz/quizLocalReducer';

describe('Testing Hook (server): useQuizNextClick', () => {
  it('initializes without throwing errors', async () => {
    const dispatchLocalStateMock = jest.fn();
    const quizApiStateMock: QuizAPIReducerState = {
      quizCurrentQuestion: {
        id: '1',
        next_question: {
          id: '2',
          type: 'singleChoice',
        },
      },
    } as unknown as QuizAPIReducerState;

    const quizLocalStateMock: QuizLocalReducerState = {
      answerInputs: {
        '2': {
          value: ['Answer 1'],
        },
      },
    } as unknown as QuizLocalReducerState;

    const onQuizNextQuestionMock = jest.fn();

    const executeHook = () =>
      renderHookServerSide(
        () =>
          useQuizNextClick(
            quizApiStateMock,
            quizLocalStateMock,
            dispatchLocalStateMock,
            onQuizNextQuestionMock
          ),
        {
          initialProps: {},
        }
      );

    expect(executeHook).not.toThrow();
  });
});
