import { renderHook, act } from '@testing-library/react';

import { Question, AnswerInputState } from '../../../../src/types';
import useOpenTextInputProps from '../../../../src/hooks/usePropsGetters/useOpenTextInputProps';

describe('Testing Hook (client): useOpenTextInputProps', () => {
  it('initializes correctly and returns input properties', () => {
    const setQuizAnswersMock = jest.fn();
    const nextQuestionMock = jest.fn();
    const currentQuestionData = {
      id: '1',
      type: 'open',
      input_placeholder: 'Your answer...',
    } as unknown as Question;
    const answerInputs = { '1': { value: 'Initial answer', type: 'open' } } as AnswerInputState;

    const { result } = renderHook(() =>
      useOpenTextInputProps(setQuizAnswersMock, nextQuestionMock, currentQuestionData, answerInputs)
    );

    expect(result.current().className).toBe('cio-question-input-text');
    expect(result.current().placeholder).toBe('Your answer...');
    expect(result.current().value).toBe('Initial answer');
  });

  it('updates input value on change', () => {
    const { result } = renderHook(() =>
      useOpenTextInputProps(jest.fn(), jest.fn(), undefined, undefined)
    );

    act(() => {
      result
        .current()
        .onChange({ target: { value: 'New input value' } } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current().value).toBe('New input value');
  });

  it('calls nextQuestion on Enter key if conditions are met', () => {
    const setQuizAnswersMock = jest.fn();
    const nextQuestionMock = jest.fn();
    const currentQuestionData = { id: '1', type: 'open' } as unknown as Question;

    const { result } = renderHook(() =>
      useOpenTextInputProps(setQuizAnswersMock, nextQuestionMock, currentQuestionData, undefined)
    );

    act(() => {
      result
        .current()
        .onChange({ target: { value: 'Valid answer' } } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current().onKeyDown({ key: 'Enter' } as React.KeyboardEvent<HTMLInputElement>);
    });

    expect(nextQuestionMock).toHaveBeenCalled();
  });
});
