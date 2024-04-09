import { renderHook, waitFor } from '@testing-library/react';
import { mockConstructorIOClient } from '../../../__tests__/utils';
import { trackQuizResultsLoaded } from '../../../../src/services';
import useQuizResultsLoaded from '../../../../src/hooks/useQuizEvents/useQuizResultsLoaded';
import { QuizAPIReducerState } from '../../../../src/components/CioQuiz/quizApiReducer';

jest.mock('../../../src/services', () => ({
  trackQuizResultsLoaded: jest.fn(),
}));

describe('Testing Hook (client): useQuizResultsLoaded', () => {
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
      useQuizResultsLoaded(mockConstructorIOClient, quizApiStateMock, onQuizResultsLoadedMock)
    );

    await waitFor(() => {
      expect(trackQuizResultsLoaded).toHaveBeenCalledWith(
        mockConstructorIOClient,
        quizApiStateMock.quizResults
      );
    });

    expect(onQuizResultsLoadedMock).toHaveBeenCalledWith([{ id: '1', name: 'Result 1' }]);
  });
});
