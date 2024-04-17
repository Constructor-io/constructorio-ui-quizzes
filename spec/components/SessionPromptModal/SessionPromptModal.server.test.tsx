import React from 'react';
import { renderToString } from 'react-dom/server';

import SessionPromptModal from '../../../src/components/SessionPromptModal/SessionPromptModal';

describe(`${SessionPromptModal.name} client`, () => {
  const props: React.ComponentProps<typeof SessionPromptModal> = {
    continueSession: jest.fn(),
    resetStoredState: jest.fn(),
    setShowSessionPrompt: jest.fn(),
    showSessionPrompt: true,
  };

  it('renders buttons', () => {
    const view = renderToString(<SessionPromptModal {...props} />);
    expect(view).toContain('Do you want to continue where you left off?');
    expect(view).toContain('Yes');
    expect(view).toContain('No');
  });
});
