import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import * as factories from '../../__tests__/factories';

import ShareResultsModal from '../../../src/components/ShareResultsModal/ShareResultsModal';
import { QuizReturnState } from '../../../src/types';
import * as useShareResultsLink from '../../../src/hooks/useShareResultsLink';

describe(`${ShareResultsModal.name} client`, () => {
  const results = factories.quizResults.build();
  const props: React.ComponentProps<typeof ShareResultsModal> = {
    onClose: jest.fn(),
    onEmailResults: jest.fn(),
    quizState: { results } as QuizReturnState['quiz'],
    answers: [
      ['1', '2'],
      ['3', '4'],
    ],
  };

  beforeEach(() => {
    jest.spyOn(useShareResultsLink, 'default').mockReturnValue('http://example.com');
  });

  it('renders the share modal', async () => {
    render(<ShareResultsModal {...props} />);
    expect(screen.getByText(/Share or save your quiz results through email/)).toBeInTheDocument();
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'hi@mail.com' } });
    fireEvent.click(screen.getByRole('button', { name: 'Send' }));
    await waitFor(async () =>
      expect(props.onEmailResults).toHaveBeenCalledWith({
        email: 'hi@mail.com',
        url: 'http://example.com',
        results: results!.response!.results,
      })
    );
  });

  it('handles resolved promise for onEmailResults', async () => {
    props.onEmailResults = jest.fn().mockResolvedValue({});

    render(<ShareResultsModal {...props} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'hi@mail.com' } });
    fireEvent.click(screen.getByRole('button', { name: 'Send' }));
    await waitFor(() =>
      expect(props.onEmailResults).toHaveBeenCalledWith({
        email: 'hi@mail.com',
        url: 'http://example.com',
        results: results!.response!.results,
      })
    );
    expect(screen.getByText(/Email sent/)).toBeInTheDocument();
  });

  it('handles rejected promise for onEmailResults', async () => {
    props.onEmailResults = jest.fn().mockRejectedValue(new Error('Failed to send email'));

    render(<ShareResultsModal {...props} />);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'hi@mail.com' } });
    fireEvent.click(screen.getByRole('button', { name: 'Send' }));
    await waitFor(() =>
      expect(props.onEmailResults).toHaveBeenCalledWith({
        email: 'hi@mail.com',
        url: 'http://example.com',
        results: results!.response!.results,
      })
    );
    expect(
      screen.getByText(/Sorry, there was an error sending. Please try again./)
    ).toBeInTheDocument();
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
