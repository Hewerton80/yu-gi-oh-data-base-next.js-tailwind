import { ReactNode } from 'react';
import { Header } from '../../Partials/Header';

interface DefaultsTemplateProps {
  children?: ReactNode;
}

export function DefaultsTemplate({ children }: DefaultsTemplateProps) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <main className='flex flex-col px-8'>
        {children}
      </main>
    </div>
  );
}