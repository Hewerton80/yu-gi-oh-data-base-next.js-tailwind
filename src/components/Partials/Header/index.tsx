import { Heading } from '../../General/Typography/Heading';
export function Header() {

  return (
    <header className='bg-black-800 px-7 h-16'>
      <div className='flex items-center justify-center bg-transparent max-w-3xl w-full mx-auto h-full'>
        <Heading className='text-5xl'>Busca de cards</Heading>
      </div>
    </header>
  );
}