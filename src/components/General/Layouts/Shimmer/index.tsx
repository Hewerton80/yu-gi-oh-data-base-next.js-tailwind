import { HTMLAttributes } from 'react';
import { concatenateClasseName } from '../../../../utilts/concatenateClasseName';

interface ShimmerProps extends HTMLAttributes<HTMLDivElement> { }

function Shimmer({ children, className, ...rest }: ShimmerProps) {
  return (
    <div
      {...rest}
      className={concatenateClasseName('animate-pulse bg-gray-600', className)}
    >
      {children}
    </div>
  );
}

export default Shimmer;
