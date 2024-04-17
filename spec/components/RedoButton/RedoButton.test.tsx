import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import RedoButton from '../../../src/components/RedoButton/RedoButton';
import { withContext } from '../../__tests__/utils';

describe(`${RedoButton.name} client`, () => {
  const onResetMock = jest.fn();
  const getResetQuizButtonPropsMock = jest.fn().mockReturnValue({ onClick: onResetMock });

  describe('with context function', () => {
    const Subject = withContext(RedoButton, {
      contextMocks: { getResetQuizButtonProps: getResetQuizButtonPropsMock },
    });

    it('renders the retake button', () => {
      render(<Subject />);
      expect(screen.getByRole('button', { name: 'Retake Quiz' })).toBeInTheDocument();
    });

    it('renders the retake button with custom text', () => {
      render(<Subject redoText='RETAKE_TEXT' />);
      expect(screen.getByRole('button', { name: 'RETAKE_TEXT' })).toBeInTheDocument();
    });

    it('executes callback on click', () => {
      render(<Subject />);
      fireEvent.click(screen.getByRole('button', { name: 'Retake Quiz' }));
      expect(onResetMock).toHaveBeenCalled();
    });
  });

  describe('without context function', () => {
    const Subject = withContext(RedoButton, {
      contextMocks: { getResetQuizButtonProps: undefined },
    });

    it('returns empty element when function is undefined', () => {
      const { container } = render(<Subject />);
      expect(container).toBeEmptyDOMElement();
    });
  });
});
