import { QuizReturnState } from '../../../src/types';

import { renderHookServerSide } from '../../__tests__/utils.server';
import useShareResultsLink from '../../../src/hooks/useShareResultsLink';

describe('useShareResultsLink - Server', () => {
  it('handles server environment', () => {
    const quizState = {
      results: {
        response: {
          results: [{ data: { id: '1' } }, { data: { id: '2' } }],
        },
      },
      selectedOptionsWithAttributes: ['attr1', 'attr2'],
    };

    const { result } = renderHookServerSide(
      () => {
        return useShareResultsLink(quizState as unknown as QuizReturnState['quiz']);
      },
      {
        initialProps: {},
      }
    );

    expect(result).toBeDefined();
  });
});
