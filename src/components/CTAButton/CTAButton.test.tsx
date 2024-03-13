import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import CTAButton from './CTAButton';

describe(`${CTAButton.name} client`, () => {
  const propGettersMock = jest.fn();
  const props: React.ComponentProps<typeof CTAButton> = {
    ctaText: 'CTA_BUTTON',
    propsGetters: propGettersMock,
    disabled: false,
    className: 'custom-class',
  };

  it('renders button', () => {
    const { container } = render(<CTAButton propsGetters={props.propsGetters} />);
    expect(screen.getByText('Continue')).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('cio-button-container');
  });

  it('executes callback on click', () => {
    render(<CTAButton {...props} />);
    fireEvent.click(screen.getByText(props.ctaText!));
    expect(propGettersMock).toHaveBeenCalled();
  });

  it('without prop getters', () => {
    render(<CTAButton {...props} propsGetters={undefined} className='' />);
    expect(screen.queryByText(props.ctaText!)).not.toBeInTheDocument();
  });
});
