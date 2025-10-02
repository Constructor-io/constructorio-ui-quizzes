import { renderHookServerSide } from '../../../__tests__/utils.server';
import useJumpToQuestionButtonProps from '../../../../src/hooks/usePropsGetters/useJumpToQuestionButtonProps';
import { QuizAPIReducerState } from '../../../../src/components/CioQuiz/quizApiReducer';

describe('Testing Hook (server): useJumpToQuestionButtonProps', () => {
  it('initializes without errors and returns a function that provides button props', () => {
    const jumpToQuestionMock = jest.fn();
    const quizApiStateMock = {
      quizCurrentQuestion: {
        next_question: { id: '2' },
        isCoverQuestion: false,
      },
    } as unknown as QuizAPIReducerState;

    const { result } = renderHookServerSide(
      () => useJumpToQuestionButtonProps(jumpToQuestionMock, quizApiStateMock),
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
