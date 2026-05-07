import { renderHook, act } from '@testing-library/react';
import useSelectInputProps from '../../../../src/hooks/usePropsGetters/useSelectInputProps';
import { QuestionTypes } from '../../../../src/components/CioQuiz/actions';

describe('Testing Hook (client): useSelectInputProps', () => {
  let quizAnswerChangedMock;
  let nextQuestionMock;
  let currentQuestionData;
  let answerInputs;
  const mockEvent = { preventDefault: jest.fn() } as unknown as React.MouseEvent<HTMLElement>;

  beforeEach(() => {
    quizAnswerChangedMock = jest.fn();
    nextQuestionMock = jest.fn();
    currentQuestionData = {
      id: '1',
      type: 'single',
      options: [
        { id: '1', value: 'Option 1' },
        { id: '2', value: 'Option 2' },
      ],
    };
    answerInputs = {};
  });

  const setupHook = (questionData) =>
    renderHook(() =>
      useSelectInputProps(quizAnswerChangedMock, nextQuestionMock, questionData, answerInputs)
    );

  it('correctly toggles selected class on click', () => {
    const { result } = setupHook(currentQuestionData);

    act(() => {
      result.current.getSelectInputProps(currentQuestionData.options[0]).onClick(mockEvent);
    });

    expect(result.current.getSelectInputProps(currentQuestionData.options[0]).className).toContain('selected');
    expect(quizAnswerChangedMock).toHaveBeenCalledWith([{ id: '1', value: 'Option 1' }]);
  });

  it('correctly toggles selected class on click with single filter value question', () => {
    currentQuestionData.type = QuestionTypes.SingleFilterValue;
    const { result } = setupHook(currentQuestionData);

    act(() => {
      result.current.getSelectInputProps(currentQuestionData.options[0]).onClick(mockEvent);
    });

    expect(result.current.getSelectInputProps(currentQuestionData.options[0]).className).toContain('selected');
    expect(quizAnswerChangedMock).toHaveBeenCalledWith([{ id: '1', value: 'Option 1' }]);
  });

  it('handles keyboard selection correctly', () => {
    const { result } = renderHook(() =>
      useSelectInputProps(
        quizAnswerChangedMock,
        nextQuestionMock,
        currentQuestionData,
        answerInputs
      )
    );

    act(() => {
      result.current
        .getSelectInputProps({ id: 2, value: 'Option 2', attribute: null })
        .onKeyDown({ key: 'Enter' } as React.KeyboardEvent<HTMLElement>);
    });

    expect(quizAnswerChangedMock).toHaveBeenCalledWith([{ id: '2', value: 'Option 2' }]);
  });

  it('does not advance to the next question for multiple select without selection', () => {
    setupHook(currentQuestionData);

    expect(nextQuestionMock).not.toHaveBeenCalled();
  });

  it('does not advance to the next question for single select without selection', () => {
    setupHook(currentQuestionData);

    expect(nextQuestionMock).not.toHaveBeenCalled();
  });

  it('does not advance when configured not to', () => {
    currentQuestionData.type = 'single';
    const { result } = renderHook(() =>
      useSelectInputProps(
        quizAnswerChangedMock,
        nextQuestionMock,
        currentQuestionData,
        answerInputs,
        false
      )
    );

    act(() => {
      result.current.getSelectInputProps(currentQuestionData.options[0]).onClick(mockEvent);
    });
    expect(result.current.getSelectInputProps(currentQuestionData.options[0]).className).toContain('selected');
    expect(nextQuestionMock).not.toHaveBeenCalled();
  });

  it('does not advance to the next question for single select when selected option has a description', () => {
    currentQuestionData.type = 'single';
    currentQuestionData.options[0] = {
      ...currentQuestionData.options[0],
      description: 'Additional details',
    };
    const { result } = renderHook(() =>
      useSelectInputProps(
        quizAnswerChangedMock,
        nextQuestionMock,
        currentQuestionData,
        answerInputs,
        true
      )
    );
    act(() => {
      result.current.getSelectInputProps(currentQuestionData.options[0]).onClick(mockEvent);
    });
    expect(result.current.getSelectInputProps(currentQuestionData.options[0]).className).toContain('selected');
    expect(nextQuestionMock).not.toHaveBeenCalled();
  });

  it('advances to the next question for single select when selected option does not have a description', () => {
    currentQuestionData.type = 'single';
    let inputs = {};
    const { result, rerender } = renderHook(() =>
      useSelectInputProps(
        quizAnswerChangedMock,
        nextQuestionMock,
        currentQuestionData,
        inputs,
        true
      )
    );
    act(() => {
      result.current.getSelectInputProps(currentQuestionData.options[0]).onClick(mockEvent);
    });
    expect(result.current.getSelectInputProps(currentQuestionData.options[0]).className).toContain('selected');
    inputs = { 1: { value: [{ id: '1', value: 'Option 1' }] } };
    rerender();
    expect(nextQuestionMock).toHaveBeenCalled();
  });

  it('allows toggling options off in a multiple select question', () => {
    currentQuestionData.type = 'multiple';
    const { result } = setupHook(currentQuestionData);

    act(() => {
      result.current.getSelectInputProps(currentQuestionData.options[0]).onClick(mockEvent);
    });

    act(() => {
      result.current.getSelectInputProps(currentQuestionData.options[0]).onClick(mockEvent);
    });

    expect(result.current.getSelectInputProps(currentQuestionData.options[0]).className).not.toContain('selected');
    expect(quizAnswerChangedMock).toHaveBeenCalledWith([]);
  });

  it('allows toggling options off in a multiple filter value question', () => {
    currentQuestionData.type = QuestionTypes.MultipleFilterValues;
    const { result } = setupHook(currentQuestionData);

    act(() => {
      result.current.getSelectInputProps(currentQuestionData.options[0]).onClick(mockEvent);
    });

    act(() => {
      result.current.getSelectInputProps(currentQuestionData.options[0]).onClick(mockEvent);
    });

    expect(result.current.getSelectInputProps(currentQuestionData.options[0]).className).not.toContain('selected');
    expect(quizAnswerChangedMock).toHaveBeenCalledWith([]);
  });
});
