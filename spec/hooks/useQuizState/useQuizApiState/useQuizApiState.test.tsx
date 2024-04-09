import { renderHook, waitFor } from '@testing-library/react';
import { mockConstructorIOClient } from '../../../__tests__/utils';
import useQuizApiState from '../../../../src/hooks/useQuizState/useQuizApiState';
import { getQuizResults } from '../../../../src/services';
import { QUIZ_VERSION_ID, QUIZ_ID } from '../../../__tests__/constants';

jest.mock('../../../src/services', () => ({
  getNextQuestion: jest.fn().mockResolvedValue({
    next_question: null,
    quiz_session_id: 'QUIZ_SESSION_ID',
    quiz_version_id: 'QUIZ_VERSION_ID',
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
    const quizOptions = { quizId: QUIZ_ID, quizVersionId: QUIZ_VERSION_ID, resultsPageOptions: {} };
    const quizLocalState = {
      answers: [],
      answerInputs: {},
      prevAnswerInputs: {},
      isQuizCompleted: false,
    };
    const skipToResults = false;
    const dispatchLocalState = jest.fn();

    const { result } = renderHook(() =>
      useQuizApiState(
        quizOptions,
        mockConstructorIOClient,
        quizLocalState,
        skipToResults,
        dispatchLocalState
      )
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

  it('sets loading state correctly around async operations', async () => {
    const quizOptions = { quizId: QUIZ_ID, quizVersionId: QUIZ_VERSION_ID, resultsPageOptions: {} };
    const quizLocalState = {
      answers: [],
      answerInputs: {},
      prevAnswerInputs: {},
      isQuizCompleted: false,
    };
    const skipToResults = false;
    const dispatchLocalState = jest.fn();

    const { result } = renderHook(() =>
      useQuizApiState(
        quizOptions,
        mockConstructorIOClient,
        quizLocalState,
        skipToResults,
        dispatchLocalState
      )
    );

    expect(result.current.quizApiState.quizRequestState).toBe('LOADING');

    await waitFor(() => expect(result.current.quizApiState.quizRequestState).not.toBe('LOADING'));
  });

  it('dispatches quiz results upon completion', async () => {
    const quizOptions = { quizId: QUIZ_ID, quizVersionId: QUIZ_VERSION_ID, resultsPageOptions: {} };
    const quizLocalState = {
      answers: [['1']],
      isQuizCompleted: true,
      answerInputs: {},
      prevAnswerInputs: {},
    };
    const skipToResults = true;
    const dispatchLocalState = jest.fn();

    const { result } = renderHook(() =>
      useQuizApiState(
        quizOptions,
        mockConstructorIOClient,
        quizLocalState,
        skipToResults,
        dispatchLocalState
      )
    );

    await waitFor(() => expect(getQuizResults).toHaveBeenCalled());

    expect(result.current.quizApiState.quizResults).toBeDefined();
    expect(result.current.quizApiState.quizRequestState).toBe('SUCCESS');
  });
});
