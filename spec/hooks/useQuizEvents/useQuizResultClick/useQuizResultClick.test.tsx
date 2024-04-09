import { renderHook, act } from '@testing-library/react';
import { mockConstructorIOClient } from '../../../__tests__/utils';
import { trackQuizResultClick } from '../../../../src/services';
import useQuizResultClick from '../../../../src/hooks/useQuizEvents/useQuizResultClick';
import { QuizAPIReducerState } from '../../../../src/components/CioQuiz/quizApiReducer';

jest.mock('../../../src/services', () => ({
  trackQuizResultClick: jest.fn(),
}));

describe('Testing Hook (client): useQuizResultClick', () => {
  it('calls trackQuizResultClick and onQuizResultClick correctly', () => {
    const quizApiStateMock = {
      quizResults: { results: [{ item_name: 'Test Item' }] },
    } as unknown as QuizAPIReducerState;
    const onQuizResultClickMock = jest.fn();
    const resultMock = { item_id: '123', item_name: 'Test Item' };
    const positionMock = 1;

    const { result } = renderHook(() =>
      useQuizResultClick(mockConstructorIOClient, quizApiStateMock, onQuizResultClickMock)
    );

    act(() => {
      result.current(resultMock, positionMock);
    });

    expect(trackQuizResultClick).toHaveBeenCalledWith(
      mockConstructorIOClient,
      quizApiStateMock.quizResults,
      resultMock,
      positionMock
    );

    expect(onQuizResultClickMock).toHaveBeenCalledWith(resultMock, positionMock);
  });
});
