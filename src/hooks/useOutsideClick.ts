import { useEffect, RefObject } from 'react';

/**
 * Hook that handles outside click event of the passed refs
 *
 * @param refs array of refs
 * @param handler a handler function to be called when clicked outside
 */
export default function useOutsideClick(
  ref: RefObject<HTMLElement> | undefined,
  handler?: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (!handler) return;

      if (ref && ref.current && ref.current.contains(event.target)) {
        return;
      }

      handler();
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
}
