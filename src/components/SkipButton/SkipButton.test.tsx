import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import SkipButton from './SkipButton';

describe(`${SkipButton.name} client`, () => {
  const onClickMock = jest.fn();
  const props: React.ComponentProps<typeof SkipButton> = {
    propsGetters: () => ({ onClick: onClickMock }),
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
    expect(screen.getByText(props.skipQuestionButtonText!)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass(props.className!);
  });

  it('calls callback from prop getters', () => {
    render(<SkipButton {...props} />);
    fireEvent.click(screen.getByText(props.skipQuestionButtonText!));
    expect(onClickMock).toHaveBeenCalled();
  });

  it('does not render button without propsGetters', () => {
    render(<SkipButton className='' />);
    expect(screen.queryByRole('button', { name: 'Skip' })).not.toBeInTheDocument();
  });
});
