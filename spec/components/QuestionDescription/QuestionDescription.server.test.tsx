import React from 'react';
import { renderToString } from 'react-dom/server';

import QuestionDescription from '../../../src/components/QuestionDescription/QuestionDescription';

describe(`${QuestionDescription.name} server`, () => {
  const props: React.ComponentProps<typeof QuestionDescription> = {
    description: 'Description',
  };

  it('renders a button with the default properties', () => {
    const view = renderToString(<QuestionDescription {...props} />);
    expect(view).toContain(props.description);
  });
});
