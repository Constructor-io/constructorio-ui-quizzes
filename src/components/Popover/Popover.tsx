import React, { useRef, useState } from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';

interface PopoverProps {
  children: React.ReactNode;
  popoverTrigger: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

export default function Popover(props: PopoverProps) {
  const { children, popoverTrigger, placement = 'top' } = props;

  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);

  useOutsideClick(popoverRef, () => setIsOpen(false));

  return (
    <div>
      <div className='popover-container' ref={popoverRef}>
        <button
          className='popover-trigger-button'
          type='button'
          onClick={() => setIsOpen((val) => !val)}>
          {popoverTrigger}
        </button>
        <div className={`popover-content-container ${placement} ${isOpen ? 'open' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
