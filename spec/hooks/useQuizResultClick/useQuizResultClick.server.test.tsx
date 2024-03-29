import { mockConstructorIOClient } from '../../__tests__/utils';
import { renderHookServerSide } from '../../__tests__/utils.server';
import useQuizResultClick from '../../../src/hooks/useQuizEvents/useQuizResultClick';
import { QuizAPIReducerState } from '../../../src/components/CioQuiz/quizApiReducer';

describe('Testing Hook (server): useQuizResultClick', () => {
  it('initializes without throwing errors', () => {
    const quizApiStateMock = {
      quizResults: { results: [{ item_name: 'Test Item' }] },
    } as unknown as QuizAPIReducerState;
    const onQuizResultClickMock = jest.fn();

    const executeHook = () =>
      renderHookServerSide(
        () => useQuizResultClick(mockConstructorIOClient, quizApiStateMock, onQuizResultClickMock),
        { initialProps: {} }
      );

    expect(executeHook).not.toThrow();
  });
});
