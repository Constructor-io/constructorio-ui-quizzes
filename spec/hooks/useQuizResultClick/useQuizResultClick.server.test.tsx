import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { renderHookServerSide } from '../../__tests__/utils.server';
import useQuizResultClick from '../../../src/hooks/useQuizEvents/useQuizResultClick';
import { QuizAPIReducerState } from '../../../src/components/CioQuiz/quizApiReducer';

describe('Testing Hook (server): useQuizResultClick', () => {
  it('initializes without throwing errors', () => {
    const cioClientMock = new ConstructorIOClient({
      apiKey: 'apiKey',
      sessionId: 123,
      clientId: '123',
    });
    const quizApiStateMock = {
      quizResults: { results: [{ item_name: 'Test Item' }] },
    } as unknown as QuizAPIReducerState;
    const onQuizResultClickMock = jest.fn();

    const executeHook = () =>
      renderHookServerSide(
        () => useQuizResultClick(cioClientMock, quizApiStateMock, onQuizResultClickMock),
        { initialProps: {} }
      );

    expect(executeHook).not.toThrow();
  });
});
