import React from 'react';
import { renderToString } from 'react-dom/server';

import EmailField from '../../../src/components/ShareResultsModal/EmailField';

describe(`${EmailField.name} client`, () => {
  const props: React.ComponentProps<typeof EmailField> = {
    onSubmit: jest.fn(),
  };

  it('renders the email area', () => {
    const view = renderToString(<EmailField {...props} />);
    expect(view).toContain('Share by email');
  });
});
