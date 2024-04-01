import { renderHook, act } from '@testing-library/react';

import useSkipQuestionButtonProps from '../../../src/hooks/usePropsGetters/useSkipQuestionButtonProps';
import { QuizAPIReducerState } from '../../../src/components/CioQuiz/quizApiReducer';

describe('Testing Hook (client): useSkipQuestionButtonProps', () => {
  const skipQuestionMock = jest.fn();
  const mockEvent = { preventDefault: jest.fn() } as unknown as React.MouseEvent<HTMLElement>;

  it('hides the skip button for cover questions or not skippable questions', () => {
    const quizApiState = {
      quizCurrentQuestion: {
        next_question: { id: '2', is_skippable: false },
        isCoverQuestion: true,
      },
    } as unknown as QuizAPIReducerState;

    const { result } = renderHook(() => useSkipQuestionButtonProps(skipQuestionMock, quizApiState));

    expect(result.current().className).toContain('hide');
  });

  it('shows the skip button for skippable questions', () => {
    const quizApiState = {
      quizCurrentQuestion: {
        next_question: { id: '3', is_skippable: true },
        isCoverQuestion: false,
      },
    } as unknown as QuizAPIReducerState;

    const { result } = renderHook(() => useSkipQuestionButtonProps(skipQuestionMock, quizApiState));

    expect(result.current().className).not.toContain('hide');
  });

  it('calls skipQuestion when the skip button is clicked', () => {
    const quizApiState = {
      quizCurrentQuestion: {
        next_question: { id: '4', is_skippable: true },
      },
    } as unknown as QuizAPIReducerState;

    const { result } = renderHook(() => useSkipQuestionButtonProps(skipQuestionMock, quizApiState));

    act(() => {
      result.current().onClick(mockEvent);
    });

    expect(skipQuestionMock).toHaveBeenCalled();
  });
});
