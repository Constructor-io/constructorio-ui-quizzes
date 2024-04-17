import { renderHookServerSide } from '../../../__tests__/utils.server';
import usePreviousQuestionButtonProps from '../../../../src/hooks/usePropsGetters/usePreviousQuestionButtonProps';
import { QuizAPIReducerState } from '../../../../src/components/CioQuiz/quizApiReducer';

describe('Testing Hook (server): usePreviousQuestionButtonProps', () => {
  it('initializes without errors and returns initial button props', () => {
    const previousQuestionMock = jest.fn();
    const quizApiState = { quizCurrentQuestion: { isFirstQuestion: true } } as QuizAPIReducerState;

    const { result } = renderHookServerSide(
      () => usePreviousQuestionButtonProps(quizApiState, previousQuestionMock),
      {
        initialProps: {},
      }
    );

    const buttonProps = result();

    expect(buttonProps).toHaveProperty('title', 'Quiz Back Button');
    expect(buttonProps).toHaveProperty('role', 'button');
    expect(buttonProps).toHaveProperty('className', expect.stringContaining('disabled'));
    expect(buttonProps).toHaveProperty('type', 'button');
    expect(typeof buttonProps.onClick).toBe('function');
  });
});
