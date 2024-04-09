import { renderHookServerSide } from '../../../__tests__/utils.server';
import useNextQuestionButtonProps from '../../../../src/hooks/usePropsGetters/useNextQuestionButtonProps';
import { QuizAPIReducerState } from '../../../../src/components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../../../src/components/CioQuiz/quizLocalReducer';

describe('Testing Hook (server): useNextQuestionButtonProps', () => {
  it('initializes without errors and returns a function that provides button props', () => {
    const nextQuestionMock = jest.fn();
    const quizApiStateMock = {
      quizCurrentQuestion: {
        next_question: { id: '2' },
        isCoverQuestion: false,
      },
    } as unknown as QuizAPIReducerState;

    const quizLocalStateMock = {
      answerInputs: {},
      answers: {},
      prevAnswerInputs: {},
      isQuizCompleted: false,
    } as unknown as QuizLocalReducerState;

    const { result } = renderHookServerSide(
      () => useNextQuestionButtonProps(nextQuestionMock, quizApiStateMock, quizLocalStateMock),
      {
        initialProps: {},
      }
    );

    expect(typeof result).toBe('function');

    const buttonProps = result();
    expect(buttonProps).toHaveProperty('className');
    expect(buttonProps).toHaveProperty('type');
    expect(buttonProps).toHaveProperty('onClick');
    expect(typeof buttonProps.onClick).toBe('function');
  });
});
