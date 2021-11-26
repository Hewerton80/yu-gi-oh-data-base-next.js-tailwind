import { ButtonHTMLAttributes } from 'react';
import { concatenateClasseName } from '../../../../utilts/concatenateClasseName';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={concatenateClasseName(`
        flex items-center justify-center
        font-sans text-xs sm:text-sm px-3 text-white
        bg-primary h-9 w-max rounded-sm hover:opacity-80 duration-300
      `,className)}
    >
      {children}
    </button>
  );
}
