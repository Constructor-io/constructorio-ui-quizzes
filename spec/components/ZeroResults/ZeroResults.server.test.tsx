import React from 'react';
import { renderToString } from 'react-dom/server';

import ZeroResults from '../../../src/components/ZeroResults/ZeroResults';
import { withContext } from '../../__tests__/utils';

describe(`${ZeroResults.name} client`, () => {
  const Subject = withContext(ZeroResults);

  it('renders', () => {
    const view = renderToString(<Subject />);
    expect(view).toContain('Sorry, we ');
  });
});
