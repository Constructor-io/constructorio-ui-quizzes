import { mockConstructorIOClient } from '../../../__tests__/utils';
import { renderHookServerSide } from '../../../__tests__/utils.server';
import useQuizApiState from '../../../../src/hooks/useQuizState/useQuizApiState';
import { QUIZ_ID, QUIZ_VERSION_ID } from '../../../__tests__/constants';

jest.mock('../../../../src/services', () => ({
  getNextQuestion: jest.fn().mockResolvedValue({
    next_question: null,
    quiz_session_id: 'mockSessionId',
    quiz_version_id: 'mockVersionId',
  }),
  getQuizResults: jest.fn(),
  getBrowseResultsForItemIds: jest.fn(),
  getQuizResultsConfig: jest.fn().mockResolvedValue({
    results_config: {},
    metadata: { key: 'value' },
  }),
}));

describe('useQuizApiState - Server', () => {
  it('handles server environment', () => {
    const quizOptions = {
      quizId: QUIZ_ID,
      quizVersionId: QUIZ_VERSION_ID,
      callbacks: { onAddToCartClick: () => {} },
      resultsPageOptions: {},
    };
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
