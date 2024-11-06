import React from 'react';
import { renderToString } from 'react-dom/server';
import usePrevious from '../../../src/hooks/usePrevious';

describe(`${usePrevious.name} server`, () => {
  function Component({ x }: { x: number }) {
    const prevX = usePrevious(x);
    return (
      <>
        x={x};prevX={prevX}
      </>
    );
  }

  it('starts by having the previous value undefined', () => {
    const view = renderToString(<Component x={10} />);
    expect(view).toContain('x=<!-- -->10<!-- -->;prevX=');
  });
});
