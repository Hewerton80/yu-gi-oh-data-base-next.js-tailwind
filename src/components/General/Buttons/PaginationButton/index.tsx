import { ButtonHTMLAttributes } from 'react';
import { concatenateClasseName } from '../../../../utilts/concatenateClasseName';

interface PaginationButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;

}

export function PaginationButton({ children, className, active, ...rest }: PaginationButtonProps) {
  return (
    <button
      {...rest}
      className={concatenateClasseName(`
      w-7 h-7 flex outline-none duration-300 border-1
      
      ${active ? 'bg-primary border-primary ' : 'border-gray-600 bg-transparent '}
      hover:bg-primary hover:border-opacity-0 focus:shadow-white disabled:opacity-40 
      disabled:cursor-default disabled:pointer-events-none
      `, className)}
    >
      <span className='flex items-center justify-center w-full h-full text-xs text-white'>
        {children}
      </span>
    </button>
  );
}
