import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';

import EmailField from '../../../src/components/ShareResultsModal/EmailField';

describe(`${EmailField.name} client`, () => {
  const props: React.ComponentProps<typeof EmailField> = {
    onSubmit: jest.fn(),
  };

  it('renders the email area', () => {
    render(<EmailField {...props} />);
    expect(screen.getByText('Share by email')).toBeInTheDocument();
  });

  it('form handling', async () => {
    render(<EmailField {...props} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'hi@mail.com' } });
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Send' }));
    });
    expect(screen.getByText('Email sent')).toBeInTheDocument();
  });

  it('form handling on submit error', async () => {
    const onSubmitSpy = jest.fn();
    onSubmitSpy.mockRejectedValueOnce(new Error());
    render(<EmailField onSubmit={onSubmitSpy} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'hi@mail.com' } });
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Send' }));
    });
    expect(screen.getByText(/Sorry, there was an error sending./)).toBeInTheDocument();
  });

  it('form handling on invalid email', async () => {
    const onSubmitSpy = jest.fn();
    onSubmitSpy.mockRejectedValueOnce(new Error());
    render(<EmailField onSubmit={onSubmitSpy} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'random text' } });
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Send' }));
    });
    expect(screen.getByText(/Please enter a valid email address/)).toBeInTheDocument();
  });
});
