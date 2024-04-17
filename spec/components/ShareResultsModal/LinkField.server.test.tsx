import React from 'react';
import { renderToString } from 'react-dom/server';

import LinkField from '../../../src/components/ShareResultsModal/LinkField';

describe(`${LinkField.name} client`, () => {
  const props: React.ComponentProps<typeof LinkField> = {
    url: 'http://example.com',
  };

  it('renders the link area', () => {
    const view = renderToString(<LinkField {...props} />);
    expect(view).toContain('Share by link');
  });
});
