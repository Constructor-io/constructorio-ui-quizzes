import React from 'react';
import { renderToString } from 'react-dom/server';

import { withContext } from '../../__tests__/utils';
import BackButton from './BackButton';

describe(`${BackButton.name} server`, () => {
  const onPreviousMock = jest.fn();
  const onPreviousPropsMock = jest
    .fn()
    .mockReturnValue({ onClick: onPreviousMock, 'aria-label': 'Previous' });

  describe('with context function', () => {
    const Subject = withContext(BackButton, {
      contextMocks: { getPreviousQuestionButtonProps: onPreviousPropsMock },
    });

    it('renders the previous button', () => {
      const view = renderToString(<Subject />);
      expect(view).toContain('aria-label="Previous"');
    });
  });

  describe('without context function', () => {
    const Subject = withContext(BackButton, {
      contextMocks: { getPreviousQuestionButtonProps: undefined },
    });

    it('does not render the previous button', () => {
      const view = renderToString(<Subject />);
      expect(view).toBe('');
    });
  });
});
