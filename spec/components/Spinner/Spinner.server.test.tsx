import React from 'react';
import { renderToString } from 'react-dom/server';

import Spinner from '../../../src/components/Spinner/Spinner';

describe(`${Spinner.name} client`, () => {
  it('renders', () => {
    const view = renderToString(<Spinner />);
    expect(view).toContain('cio-spinner');
  });
});
