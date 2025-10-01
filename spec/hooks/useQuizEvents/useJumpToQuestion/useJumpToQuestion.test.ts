import { renderHook, act } from '@testing-library/react';

import useJumpToQuestion from '../../../../src/hooks/useQuizEvents/useJumpToQuestion';
import { QuizAPIReducerState } from '../../../../src/components/CioQuiz/quizApiReducer';
import { QuestionTypes, QuizAPIActionTypes } from '../../../../src/components/CioQuiz/actions';

describe('Testing Hook (client): useJumpToQuestion', () => {
  const dispatchLocalStateMock = jest.fn();
  const dispatchApiStateMock = jest.fn();

  it('calls dispatchLocalState and dispatchApiState correctly', () => {
    const quizApiStateMock = {
      quizCurrentQuestion: {
        id: '2',
        next_question: {
          id: '3',
          type: 'singleChoice',
        },
      },
    } as unknown as QuizAPIReducerState;

    const { result } = renderHook(() =>
      useJumpToQuestion({
        quizApiState: quizApiStateMock,
        dispatchLocalState: dispatchLocalStateMock,
        dispatchApiState: dispatchApiStateMock,
      })
    );

    act(() => {
      result.current(1);
    });

    expect(dispatchLocalStateMock).toHaveBeenCalledWith({
      type: QuestionTypes.JumpToQuestion,
      payload: { questionId: 1 },
    });

    expect(dispatchApiStateMock).toHaveBeenCalledWith({
      type: QuizAPIActionTypes.JUMP_TO_QUESTION,
      payload: { questionId: 1 },
    });
  });
});
