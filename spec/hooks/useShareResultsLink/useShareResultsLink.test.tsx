import { renderHook } from '@testing-library/react';
import { QuizReturnState } from '../../../src/types';

import useShareResultsLink from '../../../src/hooks/useShareResultsLink';

describe('Testing Hook (client): useShareResultsLink', () => {
  const originalLocation = window.location;

  beforeAll(() => {
    delete (global as any).window.location;
    (global as any).window.location = new URL('https://example.com/test');
  });

  afterAll(() => {
    window.location = originalLocation;
  });

  it('generates a share link correctly', () => {
    const quizState = {
      results: {
        response: {
          results: [{ data: { id: '1' } }, { data: { id: '2' } }],
        },
      },
      selectedOptionsWithAttributes: ['attr1', 'attr2'],
    };

    const { result } = renderHook(() =>
      useShareResultsLink(quizState as unknown as QuizReturnState['quiz'])
    );

    const decodedResult = decodeURIComponent(result.current);

    expect(decodedResult).toContain('items=1,2');
    expect(decodedResult).toContain('attributes=attr1,attr2');
  });
});
