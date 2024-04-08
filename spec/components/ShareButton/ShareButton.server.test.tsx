import React from 'react';
import { renderToString } from 'react-dom/server';

import ShareButton from '../../../src/components/ShareButton/ShareButton';
import { withContext } from '../../__tests__/utils';

describe(`${ShareButton.name} server`, () => {
  const props: React.ComponentProps<typeof ShareButton> = {
    onClick: jest.fn(),
    shareText: 'Share',
  };

  describe('with context function', () => {
    const Subject = withContext(ShareButton);

    it('renders a button with the default properties', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('Share');
    });
  });

  describe('without context function', () => {
    const Subject = withContext(ShareButton, {
      contextMocks: { getShareResultsButtonProps: undefined },
    });

    it('returns empty element when function is undefined', () => {
      const view = renderToString(<Subject {...props} />);
      expect(view).toContain('');
    });
  });
});
