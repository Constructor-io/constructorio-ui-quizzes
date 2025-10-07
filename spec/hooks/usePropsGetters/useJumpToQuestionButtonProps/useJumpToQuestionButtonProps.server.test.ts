import { renderHookServerSide } from '../../../__tests__/utils.server';
import useJumpToQuestionButtonProps from '../../../../src/hooks/usePropsGetters/useJumpToQuestionButtonProps';
import { QuizAPIReducerState } from '../../../../src/components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../../../src/components/CioQuiz/quizLocalReducer';

describe('Testing Hook (server): useJumpToQuestionButtonProps', () => {
  it('initializes without errors and returns a function that provides button props', () => {
    const jumpToQuestionMock = jest.fn();
    const quizApiStateMock = {
      quizCurrentQuestion: {
        next_question: { id: '2' },
        isCoverQuestion: false,
      },
    } as unknown as QuizAPIReducerState;

    const quizLocalStateMock = {
      prevAnswerInputs: {
        1: { type: 'open', value: '' },
      },
    } as unknown as QuizLocalReducerState;

    const { result } = renderHookServerSide(
      () => useJumpToQuestionButtonProps(jumpToQuestionMock, quizApiStateMock, quizLocalStateMock),
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
