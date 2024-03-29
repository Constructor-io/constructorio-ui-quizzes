import { renderHook, waitFor } from '@testing-library/react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import { trackQuizResultsLoaded } from '../../../src/services';
import useQuizResultsLoaded from '../../../src/hooks/useQuizEvents/useQuizResultsLoaded';
import { QuizAPIReducerState } from '../../../src/components/CioQuiz/quizApiReducer';

jest.mock('../../../src/services', () => ({
  trackQuizResultsLoaded: jest.fn(),
}));

describe('Testing Hook (client): useQuizResultsLoaded', () => {
  const cioClientMock = new ConstructorIOClient({ apiKey: 'fake' });
  const quizApiStateMock = {
    quizResults: {
      response: {
        results: [{ id: '1', name: 'Result 1' }],
      },
    },
  } as unknown as QuizAPIReducerState;
  const onQuizResultsLoadedMock = jest.fn();

  it('calls trackQuizResultsLoaded and onQuizResultsLoaded correctly', async () => {
    renderHook(() =>
      useQuizResultsLoaded(cioClientMock, quizApiStateMock, onQuizResultsLoadedMock)
    );

    await waitFor(() => {
      expect(trackQuizResultsLoaded).toHaveBeenCalledWith(
        cioClientMock,
        quizApiStateMock.quizResults
      );
    });

    expect(onQuizResultsLoadedMock).toHaveBeenCalledWith([{ id: '1', name: 'Result 1' }]);
  });
});
