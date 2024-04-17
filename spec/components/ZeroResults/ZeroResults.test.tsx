import React from 'react';
import { render, screen } from '@testing-library/react';

import ZeroResults from '../../../src/components/ZeroResults/ZeroResults';
import { withContext } from '../../__tests__/utils';

describe(`${ZeroResults.name} client`, () => {
  const Subject = withContext(ZeroResults);

  it('renders', () => {
    render(<Subject />);
    expect(screen.getByText(/Sorry, we /)).toBeInTheDocument();
  });
});
