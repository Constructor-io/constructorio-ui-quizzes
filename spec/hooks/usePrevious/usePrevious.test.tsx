import React from 'react';
import { render } from '@testing-library/react';
import usePrevious from '../../../src/hooks/usePrevious';

describe(`${usePrevious.name}`, () => {
  function Component({ x }: { x: number }) {
    const prevX = usePrevious(x);
    return (
      <>
        x={x};prevX={prevX}
      </>
    );
  }

  it('starts by having the previous value undefined', () => {
    const { container } = render(<Component x={10} />);
    expect(container).toHaveTextContent('x=10');
    expect(container).toHaveTextContent('prevX=');
  });

  it('changes the previous value when rendered again with a different value', () => {
    const { container, rerender } = render(<Component x={10} />);
    rerender(<Component x={11} />);
    expect(container).toHaveTextContent('x=11');
    expect(container).toHaveTextContent('prevX=10');
  });

  it('does not change the previous value if rendered again with the same value', () => {
    const { container, rerender } = render(<Component x={10} />);
    rerender(<Component x={11} />);
    rerender(<Component x={11} />);
    expect(container).toHaveTextContent('x=11');
    expect(container).toHaveTextContent('prevX=10');
  });
});
