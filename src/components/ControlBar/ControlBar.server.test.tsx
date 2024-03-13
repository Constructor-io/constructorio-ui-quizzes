import React from 'react';
import { renderToString } from 'react-dom/server';

import { withContext } from '../../__tests__/utils';
import ControlBar from './ControlBar';

describe(`${ControlBar.name} server`, () => {
  const props: React.ComponentProps<typeof ControlBar> = {
    ctaButtonText: 'CTA_BUTTON',
    skipQuestionButtonText: 'SKIP_QUESTION',
  };
  const Subject = withContext(ControlBar);

  it('renders the skip and next button', () => {
    const view = renderToString(<Subject {...props} />);
    expect(view).toContain(props.ctaButtonText);
    expect(view).toContain(props.skipQuestionButtonText);
  });
});
