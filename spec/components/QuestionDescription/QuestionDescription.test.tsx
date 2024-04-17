import React from 'react';
import { render, screen } from '@testing-library/react';

import QuestionDescription from '../../../src/components/QuestionDescription/QuestionDescription';

describe(`${QuestionDescription.name} client`, () => {
  const props: React.ComponentProps<typeof QuestionDescription> = {
    description: 'Description',
  };

  it('renders button', () => {
    render(<QuestionDescription {...props} />);
    expect(screen.getByText(props.description)).toBeInTheDocument();
  });
});
