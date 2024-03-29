import { renderHookServerSide } from '../../__tests__/utils.server';
import useSkipQuestionButtonProps from '../../../src/hooks/usePropsGetters/useSkipQuestionButtonProps';
import { QuizAPIReducerState } from '../../../src/components/CioQuiz/quizApiReducer';

describe('Testing Hook (server): useSkipQuestionButtonProps', () => {
  it('initializes without throwing an error and returns initial props', () => {
    const skipQuestionMock = jest.fn();
    const quizApiState = {
      quizCurrentQuestion: {
        next_question: { id: '1', is_skippable: true },
        isCoverQuestion: false,
      },
    } as unknown as QuizAPIReducerState;

    expect(() => {
      const { result } = renderHookServerSide(
        () => useSkipQuestionButtonProps(skipQuestionMock, quizApiState),
        {
          initialProps: {},
        }
      );

      const buttonProps = result();
      expect(buttonProps).toHaveProperty('className');
      expect(buttonProps.className).not.toContain('hide');
      expect(buttonProps).toHaveProperty('type', 'button');
      expect(typeof buttonProps.onClick).toBe('function');
    }).not.toThrow();
  });
});
