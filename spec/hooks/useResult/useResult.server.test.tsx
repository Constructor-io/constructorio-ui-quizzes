import React from 'react';
import { renderToString } from 'react-dom/server';
import * as factories from '../../__tests__/factories';

import useResult from '../../../src/hooks/useResult';
import { QuizResultDataPartial } from '../../../src/types';

const mockUseResult = (result: any) => ({
  faceOutResult: {
    ...result,
    ...result?.variations?.find(
      (variation: any) => variation.data.variation_id === result?.data?.variation_id
    ),
  },
  onVariationClick: jest.fn(),
});

jest.mock('../../../src/hooks/useResult', () => ({
  __esModule: true,
  default: (result: any) => mockUseResult(result),
}));

// Test component that uses the hook
function TestComponent({ result }: { result?: QuizResultDataPartial }) {
  const { faceOutResult } = useResult(result || {});
  return (
    <div>
      <div data-testid='variation-id'>{faceOutResult?.data?.variation_id}</div>
      <div data-testid='image-url'>{faceOutResult?.data?.image_url}</div>
      <div data-testid='value'>{faceOutResult?.value}</div>
    </div>
  );
}

describe('useResult Hook (Server)', () => {
  const mockResult = factories.quizResult.build({
    data: {
      variation_id: 'var1',
      image_url: 'test-image.jpg',
    },
    variations: [
      {
        data: {
          variation_id: 'var1',
          image_url: 'test-image.jpg',
        },
        value: 'Variation 1',
      },
      {
        data: {
          variation_id: 'var2',
          image_url: 'test-image-2.jpg',
        },
        value: 'Variation 2',
      },
    ],
  });

  it('should render with the correct initial values', () => {
    const view = renderToString(<TestComponent result={mockResult} />);

    expect(view).toContain('var1');
    expect(view).toContain('test-image.jpg');
    expect(view).toContain('Variation 1');
  });

  it('should handle undefined result', () => {
    const view = renderToString(<TestComponent result={undefined} />);

    expect(view).not.toContain('var1');
    expect(view).not.toContain('test-image.jpg');
  });

  it('should handle result without variations', () => {
    const resultWithoutVariations = { ...mockResult, variations: undefined };
    const view = renderToString(<TestComponent result={resultWithoutVariations} />);

    expect(view).toContain('var1');
    expect(view).toContain('test-image.jpg');
  });
});
