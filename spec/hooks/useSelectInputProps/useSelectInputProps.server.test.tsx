import { renderHookServerSide } from '../../__tests__/utils.server';
import useSelectInputProps from '../../../src/hooks/usePropsGetters/useSelectInputProps';

describe('Testing Hook (server): useSelectInputProps', () => {
  it('initializes without throwing an error', () => {
    const quizAnswerChangedMock = jest.fn();
    const nextQuestionMock = jest.fn();

    expect(() => {
      renderHookServerSide(() => useSelectInputProps(quizAnswerChangedMock, nextQuestionMock), {
        initialProps: {},
      });
    }).not.toThrow();
  });
});
