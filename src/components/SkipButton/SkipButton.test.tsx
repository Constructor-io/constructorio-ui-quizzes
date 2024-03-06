import React from 'react';
import { render, screen } from '@testing-library/react';

import SkipButton from './SkipButton';

describe(SkipButton, () => {
  const props: React.ComponentProps<typeof SkipButton> = {
    propsGetters: () => ({}),
    skipQuestionButtonText: 'Custom Button Text',
    className: 'custom-class',
  };

  it('renders a button with the default properties', () => {
    const { container } = render(<SkipButton propsGetters={() => ({})} />);
    expect(screen.getByText('Skip')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('cio-button-container');
  });

  it('renders a button with custom properties', () => {
    const { container } = render(<SkipButton {...props} />);
    expect(screen.getByText('Custom Button Text')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('does not render button without propsGetters', () => {
    render(<SkipButton />);
    expect(screen.queryByRole('button', { name: 'Skip' })).not.toBeInTheDocument();
  });
});
