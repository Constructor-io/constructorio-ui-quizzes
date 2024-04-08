import React from 'react';
import { renderToString } from 'react-dom/server';

import { withContext } from '../../__tests__/utils';
import RedoButton from '../../../src/components/RedoButton/RedoButton';

describe(`${RedoButton.name} server`, () => {
  const onResetMock = jest.fn();
  const getResetQuizButtonPropsMock = jest.fn().mockReturnValue({ onClick: onResetMock });

  describe('with context function', () => {
    const Subject = withContext(RedoButton, {
      contextMocks: { getResetQuizButtonProps: getResetQuizButtonPropsMock },
    });

    it('renders the retake button', () => {
      const view = renderToString(<Subject />);
      expect(view).toContain('Retake Quiz');
    });

    it('renders the retake button with custom text', () => {
      const view = renderToString(<Subject redoText='RETAKE_TEXT' />);
      expect(view).toContain('RETAKE_TEXT');
    });
  });

  describe('without context function', () => {
    const Subject = withContext(RedoButton, {
      contextMocks: { getResetQuizButtonProps: undefined },
    });

    it('does not render the previous button', () => {
      const view = renderToString(<Subject />);
      expect(view).toBe('');
    });
  });
});
