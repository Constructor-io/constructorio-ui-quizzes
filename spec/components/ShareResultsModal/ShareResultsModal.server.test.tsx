import React from 'react';
import { renderToString } from 'react-dom/server';

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

  it('renders the share modal', () => {
    const view = renderToString(<ShareResultsModal {...props} />);
    expect(view).toContain('Share or save your quiz results through email');
  });

  it('onEmailResults is not defined', () => {
    const view = renderToString(<ShareResultsModal {...props} onEmailResults={undefined} />);
    expect(view).toContain('Share or save your quiz results with this link.');
  });
});
