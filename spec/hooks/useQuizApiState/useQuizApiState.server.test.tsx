import { mockConstructorIOClient } from '../../__tests__/utils';
import { renderHookServerSide } from '../../__tests__/utils.server';
import useQuizApiState from '../../../src/hooks/useQuizState/useQuizApiState';

jest.mock('../../../src/services', () => ({
  getNextQuestion: jest.fn().mockResolvedValue({
    next_question: null,
    quiz_session_id: 'mockSessionId',
    quiz_version_id: 'mockVersionId',
  }),
  getQuizResults: jest.fn(),
  getBrowseResultsForItemIds: jest.fn(),
  getQuizResultsConfig: jest.fn().mockResolvedValue({
    results_config: {},
  }),
}));

describe('useQuizApiState - Server', () => {
  it('handles server environment', () => {
    const quizOptions = { quizId: '123', quizVersionId: 'initialVersion', resultsPageOptions: {} };
    const quizLocalState = {
      answers: [],
      answerInputs: {},
      prevAnswerInputs: {},
      isQuizCompleted: false,
    };
    const skipToResults = false;
    const dispatchLocalState = jest.fn();

    expect(() => {
      renderHookServerSide(
        () =>
          useQuizApiState(
            quizOptions,
            mockConstructorIOClient,
            quizLocalState,
            skipToResults,
            dispatchLocalState
          ),
        {
          initialProps: {},
        }
      );
    }).not.toThrow();
  });
});
