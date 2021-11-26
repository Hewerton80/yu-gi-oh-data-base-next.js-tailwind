import { ReactNode, SelectHTMLAttributes } from 'react';
import { concatenateClasseName } from '../../../../utilts/concatenateClasseName';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> { }

function Select({ className, ...rest }: SelectProps) {
  return (
    <select
      className={concatenateClasseName( `
        h-9 w-full border-1 border-gray-600 bg-black-100 rounded-sm 
        px-2 flex items-center text-xs sm:text-sm text-white font-sans
        cursor-pointer outline-none focus:shadow-white duration-300
      `, className)}
      {...rest}
    />
  );
}

export default Select;
