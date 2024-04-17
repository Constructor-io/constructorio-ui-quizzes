import React from 'react';
import { render } from '@testing-library/react';

import Spinner from '../../../src/components/Spinner/Spinner';

describe(`${Spinner.name} client`, () => {
  it('renders', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toHaveClass('cio-spinner');
  });
});
