import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import CTAButton from '../../../src/components/CTAButton/CTAButton';

describe(`${CTAButton.name} client`, () => {
  const propGettersMock = jest.fn();
  propGettersMock.mockReturnValue({
    onClick: jest.fn(), //
    className: 'custom-class',
    tabIndex: 0,
  });

  const props: React.ComponentProps<typeof CTAButton> = {
    ctaText: 'CTA_BUTTON',
    propsGetters: propGettersMock,
    disabled: false,
  };

  it('renders button', () => {
    const { container } = render(<CTAButton propsGetters={props.propsGetters} ctaText='' />);
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

  it('should be focusable and not disabled by default', () => {
    render(<CTAButton {...props} />);
    const button = screen.getByText(props.ctaText!);
    expect(button).toHaveAttribute('tabindex', '0');
    expect(button).not.toHaveAttribute('aria-disabled', 'true');
  });

  it('should have aria-disabled set to true when disabled', () => {
    propGettersMock.mockReturnValue({
      'aria-disabled': true,
    });

    render(<CTAButton {...props} />);
    const button = screen.getByText(props.ctaText!);
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('should have descriptive text when disabled', () => {
    propGettersMock.mockReturnValue({
      'aria-describedby': 'next-button-help',
    });

    render(<CTAButton {...props} disabled />);
    const button = screen.getByText(props.ctaText!);
    const description = screen.queryByText('Fill required fields to enable button.');
    expect(description).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-describedby', description?.id);
  });
});
