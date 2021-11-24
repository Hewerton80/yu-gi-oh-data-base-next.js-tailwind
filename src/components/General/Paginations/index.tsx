import { HTMLAttributes, useMemo } from 'react';
import { concatenateClasseName } from '../../../utilts/concatenateClasseName';
import { PaginationButton } from '../Buttons/PaginationButton';

interface PaginationsProps extends HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  totalRecords?: number;
  disabled?: boolean;
  onChangePage: (toPage: number) => void
}

function Paginations({ className, totalPages, currentPage, totalRecords, disabled, onChangePage, ...rest }: PaginationsProps) {

  const arrayPagesItens = useMemo(() => {

    let initialIndexPage = parseInt(String(currentPage / 10)) * 10;
    initialIndexPage = initialIndexPage > 0 ? initialIndexPage - 1 : 0;

    return Array.from(Array(totalPages).keys())
      .slice(initialIndexPage, initialIndexPage + 10)

  }, [currentPage, totalPages])

  return (
    <div
      {...rest}
      className={concatenateClasseName('flex justify-between', className)}
    >
      {
        totalPages > 0 && (
          <>
            <span className='text-white font-sans text-base leading-4'>
              Resultados da Busca {((currentPage - 1) * 15) + 1} - {((currentPage - 1) * 15) + 15} de {totalRecords}
            </span>
            <ul className='flex ml-auto'>
              <li>
                <PaginationButton className={'border-r-0 '}
                  onClick={() => onChangePage(currentPage - 1)}
                  disabled={currentPage === 1 || disabled}
                >
                  {'<'}
                </PaginationButton>
              </li>
              {
                arrayPagesItens
                  .map((page, i) => (
                    <li key={i + 'page'}>
                      <PaginationButton className={i > 0 ? 'border-l-0 ' : ''}
                        active={currentPage === page + 1}
                        disabled={disabled}
                        onClick={() => i + 1 !== currentPage && onChangePage(page + 1)}
                      >
                        {page + 1}
                      </PaginationButton>
                    </li>
                  ))

              }
              <li>
                <PaginationButton className={'border-l-0 '}
                  onClick={() => onChangePage(currentPage + 1)}
                  disabled={currentPage === totalPages || disabled}
                >
                  {'>'}
                </PaginationButton>
              </li>
            </ul>
          </>
        )
      }
    </div>
  );
}

export default Paginations;
