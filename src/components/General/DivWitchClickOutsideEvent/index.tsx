import { useRef, useEffect, HTMLAttributes } from 'react';
import { Callback } from '../../../types/global';
import { concatenateClasseName } from '../../../utilts/concatenateClasseName';

export interface DivWitchClickOutsideEventProps extends HTMLAttributes<HTMLDivElement> {
  onClickOutside?: Callback;
}

function DivWitchClickOutsideEvent({ children, className, onClickOutside, ...rest }: DivWitchClickOutsideEventProps) {

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!divRef.current?.contains(e.target as Node)) {
        onClickOutside?.();
      }
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  });

  return (
    <div
      className={concatenateClasseName('absolute bg-transparent z-10', className)}
      ref={divRef}
      {...rest}
    >
      {children}
    </div>
  );
}

export default DivWitchClickOutsideEvent;
