import React from 'react';
import { renderToString } from 'react-dom/server';

import CTAButton from '../../../src/components/CTAButton/CTAButton';

describe(`${CTAButton.name} server`, () => {
  const propGettersMock = jest.fn();
  propGettersMock.mockReturnValue({
    onClick: jest.fn(), //
    tabIndex: 0,
  });

  const props: React.ComponentProps<typeof CTAButton> = {
    propsGetters: propGettersMock,
    ctaText: 'CTA_BUTTON',
    disabled: false,
    className: 'custom-class',
  };

  it('renders a button with the default properties', () => {
    const view = renderToString(<CTAButton propsGetters={() => ({})} />);
    expect(view).toContain('Continue');
    expect(view).toContain('cio-button-container');
  });

  it('renders a button with custom properties', () => {
    const view = renderToString(<CTAButton {...props} />);
    expect(view).toContain(props.ctaText!);
    expect(view).toContain(props.className!);
  });

  it('does not render button without propsGetters', () => {
    const view = renderToString(<CTAButton />);
    expect(view).not.toContain(props.ctaText);
  });

  it('should have aria-disabled set to true when disabled', () => {
    propGettersMock.mockReturnValue({
      'aria-disabled': true,
    });
    const view = renderToString(<CTAButton {...props} />);
    expect(view).toContain('aria-disabled="true"');
  });

  it('should have descriptive text when disabled', () => {
    propGettersMock.mockReturnValue({
      'aria-disabled': true,
      'aria-describedby': 'next-button-help',
    });
    const view = renderToString(<CTAButton {...props} />);
    expect(view).toContain('aria-describedby="next-button-help"');
    expect(view).toContain('Fill required fields to enable the button');
  });
});
