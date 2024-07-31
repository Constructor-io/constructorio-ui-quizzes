import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Toaster from '../../../src/components/ShareResultsModal/Toaster';

function MockIcon() {
  return <div>MockIcon</div>;
}

describe('Toaster Component', () => {
  it('renders correctly with message and icon', () => {
    render(<Toaster icon={MockIcon} message='Test message' onCloseToaster={() => {}} />);

    expect(screen.getByText('Test message')).toBeInTheDocument();
    expect(screen.getByText('MockIcon')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  it('calls onCloseToaster when close button is clicked', () => {
    const onCloseToasterMock = jest.fn();
    render(<Toaster icon={MockIcon} message='Test message' onCloseToaster={onCloseToasterMock} />);

    // Simulate user clicking the close button
    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);

    expect(onCloseToasterMock).toHaveBeenCalledTimes(1);
  });
});
