import React from 'react';
import { render, screen } from '@testing-library/react';

import QuestionTitle from '../../../src/components/QuestionTitle/QuestionTitle';

describe(`${QuestionTitle.name} client`, () => {
  const props: React.ComponentProps<typeof QuestionTitle> = {
    title: 'Title',
  };

  it('renders button', () => {
    render(<QuestionTitle {...props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
  });
});
