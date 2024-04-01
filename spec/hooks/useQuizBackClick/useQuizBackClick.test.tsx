import { renderHook, act } from '@testing-library/react';
import useQuizBackClick from '../../../src/hooks/useQuizEvents/useQuizBackClick';
import { QuizAPIReducerState } from '../../../src/components/CioQuiz/quizApiReducer';
import { QuestionTypes } from '../../../src/components/CioQuiz/actions';

describe('Testing Hook (client): useQuizBackClick', () => {
  it('calls dispatchLocalState with correct action', () => {
    const dispatchLocalStateMock = jest.fn();
    const quizApiState = {
      quizCurrentQuestion: { id: '1', type: 'someQuestionType' },
    } as unknown as QuizAPIReducerState;

    const { result } = renderHook(() => useQuizBackClick(quizApiState, dispatchLocalStateMock));

    act(() => {
      result.current();
    });

    expect(dispatchLocalStateMock).toHaveBeenCalledWith({
      type: QuestionTypes.Back,
      payload: quizApiState.quizCurrentQuestion,
    });
  });
});
