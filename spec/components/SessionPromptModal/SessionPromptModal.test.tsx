import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import SessionPromptModal from '../../../src/components/SessionPromptModal/SessionPromptModal';

describe(`${SessionPromptModal.name} client`, () => {
  const props: React.ComponentProps<typeof SessionPromptModal> = {
    continueSession: jest.fn(),
    resetStoredState: jest.fn(),
    setShowSessionPrompt: jest.fn(),
    showSessionPrompt: true,
  };

  it('clicking yes', () => {
    render(<SessionPromptModal {...props} />);
    fireEvent.click(screen.getByText('Yes'));
    expect(props.continueSession).toHaveBeenCalled();
  });

  it('clicking no', () => {
    render(<SessionPromptModal {...props} />);
    fireEvent.click(screen.getByText('No'));
    expect(props.resetStoredState).toHaveBeenCalled();
  });

  it('clicking presentation', () => {
    const { container } = render(<SessionPromptModal {...props} />);
    fireEvent.click(container.firstChild as Element);
    expect(props.resetStoredState).toHaveBeenCalled();
  });

  it('when showSessionPrompt is false', () => {
    const { container } = render(<SessionPromptModal {...props} showSessionPrompt={false} />);
    expect(container).toBeEmptyDOMElement();
  });
});
