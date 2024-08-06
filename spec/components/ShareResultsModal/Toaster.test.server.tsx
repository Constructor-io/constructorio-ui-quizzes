import React from 'react';
import { renderToString } from 'react-dom/server';
import Toaster from '../../../src/components/ShareResultsModal/Toaster';

function MockIcon() {
  return <div>MockIcon</div>;
}

describe('Toaster Component', () => {
  it('renders correctly with message and icon', () => {
    const view = renderToString(
      <Toaster icon={MockIcon} message='Test message' onCloseToaster={() => {}} />
    );
    expect(view).toContain('Test message');
    expect(view).toContain('MockIcon');
  });
});
