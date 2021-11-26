import { InputHTMLAttributes, ReactNode } from 'react';
import { concatenateClasseName } from '../../../../utilts/concatenateClasseName';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: ReactNode;
}

function Checkbox({ children, className, ...rest }: CheckboxProps) {
  return (
    <div className={concatenateClasseName(`
      flex items-center relative h-6 rounded-2xl p-2 border-1
      ${rest.checked ? 'bg-primary border-primary' : 'bg-black-100 border-gray-600'}
      ${rest.disabled ? 'opacity-50' : 'opacity-1'}
    `, className)}
    >
      <span
        className='absolute z-10 w-full h-full'
      />
      <input
        type="checkbox"
        className={`
          absolute z-20 opacity-0 w-full h-full checked:bg-primary
          ${rest.disabled ? 'cursor-default' : 'cursor-pointer'}
        `}
        {...rest}
      />
      <span className='flex h-full w-full items-center font-sans text-xs sm:text-sm text-white uppercase'>
        {children}
      </span>
    </div>
  );
}

export default Checkbox;
