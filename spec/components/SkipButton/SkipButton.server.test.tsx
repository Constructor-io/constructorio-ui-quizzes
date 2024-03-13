import React from 'react';
import { renderToString } from 'react-dom/server';

import SkipButton from '../../../src/components/SkipButton/SkipButton';

describe(`${SkipButton.name} server`, () => {
  const props: React.ComponentProps<typeof SkipButton> = {
    propsGetters: () => ({}),
    skipQuestionButtonText: 'Custom Button Text',
    className: 'custom-class',
  };

  it('renders a button with the default properties', () => {
    const view = renderToString(<SkipButton propsGetters={() => ({})} />);
    expect(view).toContain('Skip');
    expect(view).toContain('cio-button-container');
  });

  it('renders a button with custom properties', () => {
    const view = renderToString(<SkipButton {...props} />);
    expect(view).toContain(props.skipQuestionButtonText!);
    expect(view).toContain(props.className!);
  });

  it('does not render button without propsGetters', () => {
    const view = renderToString(<SkipButton />);
    expect(view).not.toContain('Skip');
  });
});
