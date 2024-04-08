import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import LinkField from '../../../src/components/ShareResultsModal/LinkField';

describe(`${LinkField.name} client`, () => {
  const props: React.ComponentProps<typeof LinkField> = {
    url: 'http://example.com',
  };

  const writeText = jest.fn();

  Object.assign(navigator, {
    clipboard: {
      writeText,
    },
  });

  it('renders the link area', () => {
    render(<LinkField {...props} />);
    expect(screen.getByText('Share by link')).toBeInTheDocument();
  });

  it('executes callback on close', () => {
    render(<LinkField {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Copy link' }));
    expect(writeText).toHaveBeenCalled();
    expect(screen.getByText('Link copied to clipboard')).toBeInTheDocument();
  });

  it('navigator function fails', () => {
    writeText.mockImplementation(() => {
      throw new Error('error');
    });
    render(<LinkField {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Copy link' }));
    expect(screen.getByText(/Sorry, there was an error copying./)).toBeInTheDocument();
  });
});
