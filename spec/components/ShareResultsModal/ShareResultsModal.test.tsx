import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';

import ShareResultsModal from '../../../src/components/ShareResultsModal/ShareResultsModal';
import { QuizReturnState } from '../../../src/types';
import * as useShareResultsLink from '../../../src/hooks/useShareResultsLink';

describe(`${ShareResultsModal.name} client`, () => {
  const props: React.ComponentProps<typeof ShareResultsModal> = {
    onClose: jest.fn(),
    onEmailResults: jest.fn(),
    quizState: {} as QuizReturnState['quiz'],
  };

  beforeEach(() => {
    jest.spyOn(useShareResultsLink, 'default').mockReturnValue('http://example.com');
  });

  it('renders the share modal', async () => {
    render(<ShareResultsModal {...props} />);
    expect(screen.getByText(/Share or save your quiz results through email/)).toBeInTheDocument();
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'hi@mail.com' } });
    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Send' }));
    });
    expect(props.onEmailResults).toHaveBeenCalledWith({
      email: 'hi@mail.com',
      url: 'http://example.com',
    });
  });

  it('executes callback on close', () => {
    render(<ShareResultsModal {...props} />);
    fireEvent.click(screen.getByRole('button', { name: 'Close button' }));
    expect(props.onClose).toHaveBeenCalled();
  });

  it('onEmailResults is not defined', () => {
    render(<ShareResultsModal {...props} onEmailResults={undefined} />);
    expect(screen.getByText('Share or save your quiz results with this link.')).toBeInTheDocument();
  });
});
