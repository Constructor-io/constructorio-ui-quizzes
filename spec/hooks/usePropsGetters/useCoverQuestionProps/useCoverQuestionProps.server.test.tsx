import { renderHookServerSide } from '../../../__tests__/utils.server';
import useCoverQuestionProps from '../../../../src/hooks/usePropsGetters/useCoverQuestionProps';

describe('Testing Hook (server): useCoverQuestionProps', () => {
  it('does not throw an error and returns a function when executed in a server environment', () => {
    expect(() => {
      const { result } = renderHookServerSide(() => useCoverQuestionProps(() => {}), {
        initialProps: {},
      });

      expect(typeof result).toBe('function');
      expect(result()).toEqual({});
    }).not.toThrow();
  });
});
