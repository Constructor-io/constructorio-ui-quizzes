import React from 'react';
import { renderToString } from 'react-dom/server';

import CTAButton from 'src/components/CTAButton/CTAButton';

describe(`${CTAButton.name} server`, () => {
  const props: React.ComponentProps<typeof CTAButton> = {
    propsGetters: () => ({}),
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
});
