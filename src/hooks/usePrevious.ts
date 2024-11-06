import { useRef } from 'react';

export default function usePrevious<Type>(value: Type): Type | undefined {
  const latest = useRef(value);
  const previous = useRef<Type>();

  if (latest.current !== value) {
    previous.current = latest.current;
  }

  latest.current = value;

  return previous.current;
}
