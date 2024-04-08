import React from 'react';
import { renderToString } from 'react-dom/server';

import QuestionTitle from '../../../src/components/QuestionTitle/QuestionTitle';

describe(`${QuestionTitle.name} server`, () => {
  const props: React.ComponentProps<typeof QuestionTitle> = {
    title: 'Title',
  };

  it('renders a button with the default properties', () => {
    const view = renderToString(<QuestionTitle {...props} />);
    expect(view).toContain(props.title);
  });
});
