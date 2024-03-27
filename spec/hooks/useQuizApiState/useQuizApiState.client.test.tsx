import { renderHook, waitFor } from '@testing-library/react';
import ConstructorIOClient from '@constructor-io/constructorio-client-javascript';
import useQuizApiState from '../../../src/hooks/useQuizState/useQuizApiState';
import { getQuizResults } from '../../../src/services';

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

describe('Testing Hook (client): useQuizApiState', () => {
  (getQuizResults as jest.Mock).mockResolvedValue({
    quiz_selected_options: [
      { has_attribute: true, value: 'option1' },
      { has_attribute: true, value: 'option2' },
    ],
  });

  it('executes quiz flow correctly', async () => {
    const quizOptions = { quizId: '123', quizVersionId: 'initialVersion', resultsPageOptions: {} };
    const cioClient = new ConstructorIOClient({ apiKey: 'testApiKey' });
    const quizLocalState = {
      answers: [],
      answerInputs: {},
      prevAnswerInputs: {},
      isQuizCompleted: false,
    };
    const skipToResults = false;
    const dispatchLocalState = jest.fn();

    const { result } = renderHook(() =>
      useQuizApiState(quizOptions, cioClient, quizLocalState, skipToResults, dispatchLocalState)
    );

    expect(result.current.quizApiState.quizRequestState).toBe('LOADING');

    await waitFor(() => expect(result.current.quizApiState.quizRequestState).not.toBe('LOADING'));

    expect(result.current.quizApiState).toBeDefined();
    expect(result.current.quizApiState.selectedOptionsWithAttributes).toEqual([
      'option1',
      'option2',
    ]);
    expect(result.current.quizApiState.resultsConfig).toEqual({});
    expect(result.current.quizApiState.quizRequestState).toBe('SUCCESS');
    expect(result.current.quizApiState.quizResults).toEqual({
      quiz_selected_options: [
        { has_attribute: true, value: 'option1' },
        { has_attribute: true, value: 'option2' },
      ],
    });
  });
});
