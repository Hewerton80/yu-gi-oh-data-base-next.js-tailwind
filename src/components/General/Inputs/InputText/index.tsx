import { InputHTMLAttributes } from 'react';
import { concatenateClasseName } from '../../../../utilts/concatenateClasseName';

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> { }

function InputText({ className, ...rest }: InputTextProps) {
  return (
    <input
      className={concatenateClasseName(`
        h-9 w-full border-1 border-gray-600 bg-black-100 rounded-sm 
        px-2 flex items-center text-sm text-white font-sans 
        outline-none focus:shadow-white duration-300 
      `, className)}
      {...rest}
    />
  );
}

export default InputText;
