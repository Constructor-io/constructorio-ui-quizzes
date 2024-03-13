import React from 'react';
import { render, screen } from '@testing-library/react';

import { withContext } from '../../__tests__/utils';
import ControlBar from '../../../src/components/ControlBar/ControlBar';

describe(`${ControlBar.name} client`, () => {
  const props: React.ComponentProps<typeof ControlBar> = {
    ctaButtonText: 'Next',
    skipQuestionButtonText: 'Skip',
  };
  const Subject = withContext(ControlBar);

  it('renders the skip and next button', () => {
    render(<Subject {...props} />);
    expect(screen.getByRole('button', { name: props.ctaButtonText! })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: props.skipQuestionButtonText! })).toBeInTheDocument();
  });
});
