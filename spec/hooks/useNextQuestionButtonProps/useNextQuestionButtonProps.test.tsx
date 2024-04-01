import { renderHook, act } from '@testing-library/react';
import useNextQuestionButtonProps from '../../../src/hooks/usePropsGetters/useNextQuestionButtonProps';
import { QuizAPIReducerState } from '../../../src/components/CioQuiz/quizApiReducer';
import { QuizLocalReducerState } from '../../../src/components/CioQuiz/quizLocalReducer';

describe('Testing Hook (client): useNextQuestionButtonProps', () => {
  it('returns button props with disabled class if no answer is provided', () => {
    const nextQuestionMock = jest.fn();
    const quizApiState = {
      quizCurrentQuestion: {
        next_question: { id: '2' },
        isCoverQuestion: false,
      },
    } as unknown as QuizAPIReducerState;

    const quizLocalState = {
      answerInputs: {},
      answers: {},
      prevAnswerInputs: {},
      isQuizCompleted: false,
    } as unknown as QuizLocalReducerState;

    const { result } = renderHook(() =>
      useNextQuestionButtonProps(nextQuestionMock, quizApiState, quizLocalState)
    );

    expect(result.current().className).toContain('disabled');
  });

  it('returns button props without disabled class if an answer is provided', () => {
    const nextQuestionMock = jest.fn();
    const quizApiState = {
      quizCurrentQuestion: {
        next_question: { id: '2' },
        isCoverQuestion: false,
      },
    } as unknown as QuizAPIReducerState;

    const quizLocalState = {
      answerInputs: {
        '2': { value: 'Some answer' },
      },
    } as unknown as QuizLocalReducerState;

    const { result } = renderHook(() =>
      useNextQuestionButtonProps(nextQuestionMock, quizApiState, quizLocalState)
    );

    expect(result.current().className).not.toContain('disabled');
  });

  it('calls nextQuestion function when button is clicked', () => {
    const nextQuestionMock = jest.fn();
    const mockEvent = { preventDefault: jest.fn() } as unknown as React.MouseEvent<HTMLElement>;
    const quizApiState = {
      quizCurrentQuestion: {
        next_question: { id: '2' },
        isCoverQuestion: false,
      },
    } as unknown as QuizAPIReducerState;

    const quizLocalState = {
      answerInputs: {
        '2': { value: 'Some answer' },
      },
    } as unknown as QuizLocalReducerState;

    const { result } = renderHook(() =>
      useNextQuestionButtonProps(nextQuestionMock, quizApiState, quizLocalState)
    );

    expect(typeof result.current().onClick).toBe('function');

    act(() => {
      result.current().onClick(mockEvent);
    });

    expect(nextQuestionMock).toHaveBeenCalled();
  });
});
