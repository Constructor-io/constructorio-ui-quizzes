import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import ShareButton from '../../../src/components/ShareButton/ShareButton';
import { withContext } from '../../__tests__/utils';

describe(`${ShareButton.name} client`, () => {
  const props: React.ComponentProps<typeof ShareButton> = {
    onClick: jest.fn(),
    shareText: 'Share Results',
  };
  describe('with context function', () => {
    const Subject = withContext(ShareButton);

    it('renders the share button', () => {
      render(<Subject {...props} />);
      expect(screen.getByRole('button', { name: 'Share Results' })).toBeInTheDocument();
    });

    it('executes callback on click', () => {
      render(<Subject {...props} />);
      fireEvent.click(screen.getByRole('button', { name: 'Share Results' }));
      expect(props.onClick).toHaveBeenCalled();
    });
  });

  describe('without context function', () => {
    const Subject = withContext(ShareButton, {
      contextMocks: { getShareResultsButtonProps: undefined },
    });

    it('returns empty element when function is undefined', () => {
      const { container } = render(<Subject {...props} />);
      expect(container).toBeEmptyDOMElement();
    });
  });
});
