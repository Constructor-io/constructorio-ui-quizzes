import { renderHook, act } from '@testing-library/react';
import useJumpToQuestionButtonProps from '../../../../src/hooks/usePropsGetters/useJumpToQuestionButtonProps';
import { QuizAPIReducerState } from '../../../../src/components/CioQuiz/quizApiReducer';

describe('Testing Hook (client): useJumpToQuestionButtonProps', () => {
  const mockEvent = { preventDefault: jest.fn() } as unknown as React.MouseEvent<HTMLElement>;
  const jumpToQuestionMock = jest.fn();

  it('returns button props with disabled class if no answer is provided', () => {
    const quizApiState = {
      quizCurrentQuestion: {
        next_question: { id: '2' },
        isCoverQuestion: false,
      },
    } as unknown as QuizAPIReducerState;

    const { result } = renderHook(() =>
      useJumpToQuestionButtonProps(jumpToQuestionMock, quizApiState)
    );

    expect(result.current(2).className).toContain('disabled');
  });

  it('returns button props without disabled class if an answer is provided', () => {
    const quizApiState = {
      quizCurrentQuestion: {
        next_question: { id: '3' },
        isCoverQuestion: false,
      },
    } as unknown as QuizAPIReducerState;

    const { result } = renderHook(() =>
      useJumpToQuestionButtonProps(jumpToQuestionMock, quizApiState)
    );

    expect(result.current(1).className).not.toContain('disabled');
  });

  it('calls jumpToQuestion function when button is clicked', () => {
    const quizApiState = {
      quizCurrentQuestion: {
        next_question: { id: '3' },
        isCoverQuestion: false,
      },
    } as unknown as QuizAPIReducerState;

    const { result } = renderHook(() =>
      useJumpToQuestionButtonProps(jumpToQuestionMock, quizApiState)
    );

    expect(typeof result.current(1).onClick).toBe('function');

    act(() => {
      result.current(1).onClick(mockEvent);
    });

    expect(jumpToQuestionMock).toHaveBeenCalled();
  });
});
