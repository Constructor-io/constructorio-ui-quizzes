import React from 'react';
import { render, screen } from '@testing-library/react';

import SkipButton from './SkipButton';

describe(SkipButton, () => {
  const props: React.ComponentProps<typeof SkipButton> = {
    propsGetters: () => ({}),
  };

  it('renders a button with the default text', () => {
    render(<SkipButton {...props} />);
    expect(screen.getByText('Skip')).toBeInTheDocument();
  });

  it("renders a button with the text 'Skip'", () => {
    render(<SkipButton {...props} skipQuestionButtonText='Custom Button Text' />);
    expect(screen.getByText('Custom Button Text')).toBeInTheDocument();
    expect(screen.queryByText('Skip')).not.toBeInTheDocument();
  });
});
