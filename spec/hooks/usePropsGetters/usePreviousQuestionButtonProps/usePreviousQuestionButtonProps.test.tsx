import { renderHook, act } from '@testing-library/react';

import { QuizAPIReducerState } from '../../../../src/components/CioQuiz/quizApiReducer';

import usePreviousQuestionButtonProps from '../../../../src/hooks/usePropsGetters/usePreviousQuestionButtonProps';

describe('Testing Hook (client): usePreviousQuestionButtonProps', () => {
  const mockEvent = { preventDefault: jest.fn() } as unknown as React.MouseEvent<HTMLElement>;

  it('returns button props correctly for non-first question', () => {
    const previousQuestionMock = jest.fn();
    const quizApiState = { quizCurrentQuestion: { isFirstQuestion: false } } as QuizAPIReducerState;

    const { result } = renderHook(() =>
      usePreviousQuestionButtonProps(quizApiState, previousQuestionMock)
    );

    const buttonProps = result.current();

    expect(buttonProps.className).not.toContain('disabled');
    expect(buttonProps.role).toBe('button');
    expect(buttonProps.title).toBe('Quiz Back Button');
    expect(buttonProps.type).toBe('button');

    act(() => {
      buttonProps.onClick(mockEvent);
    });

    expect(previousQuestionMock).toHaveBeenCalled();
  });

  it('disables button for the first question', () => {
    const quizApiState = { quizCurrentQuestion: { isFirstQuestion: true } } as QuizAPIReducerState;
    const previousQuestionMock = jest.fn();

    const { result } = renderHook(() =>
      usePreviousQuestionButtonProps(quizApiState, previousQuestionMock)
    );

    const buttonProps = result.current();

    expect(buttonProps.className).toContain('disabled');
  });
});
