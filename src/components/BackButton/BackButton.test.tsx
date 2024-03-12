import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import BackButton from './BackButton';
import { withContext } from '../../__tests__/utils';

describe(`${BackButton.name} client`, () => {
  const onPreviousMock = jest.fn();
  const onPreviousPropsMock = jest
    .fn()
    .mockReturnValue({ onClick: onPreviousMock, 'aria-label': 'Previous' });

  describe('with context function', () => {
    const Subject = withContext(BackButton, {
      contextMocks: { getPreviousQuestionButtonProps: onPreviousPropsMock },
    });

    it('renders the previous button', () => {
      render(<Subject />);
      expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument();
    });

    it('executes callback on click', () => {
      render(<Subject />);
      fireEvent.click(screen.getByRole('button', { name: 'Previous' }));
      expect(onPreviousMock).toHaveBeenCalled();
    });
  });

  describe('without context function', () => {
    const Subject = withContext(BackButton, {
      contextMocks: { getPreviousQuestionButtonProps: undefined },
    });

    it('returns empty element when function is undefined', () => {
      const { container } = render(<Subject />);
      expect(container).toBeEmptyDOMElement();
    });
  });
});
