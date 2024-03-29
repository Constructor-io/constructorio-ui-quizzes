import { renderHookServerSide } from '../../__tests__/utils.server';
import useOpenTextInputProps from '../../../src/hooks/usePropsGetters/useOpenTextInputProps';

describe('Testing Hook (server): useOpenTextInputProps', () => {
  it('initializes without errors and returns default input properties', () => {
    const setQuizAnswersMock = jest.fn();
    const nextQuestionMock = jest.fn();
    const currentQuestionData = null;
    const answerInputs = {};

    const { result } = renderHookServerSide(
      () =>
        useOpenTextInputProps(
          setQuizAnswersMock,
          nextQuestionMock,
          currentQuestionData,
          answerInputs
        ),
      {
        initialProps: {},
      }
    );

    const inputProps = result();
    expect(inputProps).toHaveProperty('className', 'cio-question-input-text');
    expect(inputProps).toHaveProperty('placeholder', 'Answer here...');
    expect(inputProps).toHaveProperty('value', '');
    expect(typeof inputProps.onChange).toBe('function');
    expect(typeof inputProps.onKeyDown).toBe('function');
  });
});
