import { ReactNode, HTMLAttributes } from 'react';
import { concatenateClasseName } from '../../../../utilts/concatenateClasseName';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> { }

export function Heading({ children, className, ...rest }: HeadingProps) {
  return (
    <h1
      {...rest}
      className={concatenateClasseName('font-sans font-bold text-white', className)}>
      {children}
    </h1>
  );
}
