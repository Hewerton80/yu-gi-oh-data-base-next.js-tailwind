import { HTMLAttributes } from 'react';
import styles from './styles.module.css'
import cn from 'classnames'

type avaliablesWidthCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
type avaliablesGaps = 0 | 3 | 4 | 5
interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columnGap?: avaliablesGaps;
  rowGap?: avaliablesGaps;
}

interface ColProps extends HTMLAttributes<HTMLDivElement> {
  xs?: avaliablesWidthCols;
  sm?: avaliablesWidthCols;
  md?: avaliablesWidthCols;
  lg?: avaliablesWidthCols;
  xl?: avaliablesWidthCols;
}

export function Grid({ className, rowGap = 0, columnGap = 0, children, ...rest }: GridProps) {

  return (
    <div
      className={cn(
        styles['grid-component'],
        styles[`row-gap-${rowGap}`],
        styles[`column-gap-${columnGap}`],
        className)}
      {...rest}
      style={{
        width: `calc(100% + ${columnGap * 4}px)`,
        marginTop: (rowGap * 4) * -1,
        marginLeft: (columnGap * 4) * -1
      }}
    >
      {children}
    </div>
  );
}

export function Col({ 
  className, 
  children, 
  xs = 12, 
  sm,
  md,
  lg,
  xl,
  ...rest 
}: ColProps) {
  return (
    <div
      className={cn(
        styles.col,
        `basis-${xs}/12`,
        sm && `basis-${sm}/12`,
        md && `md:basis-${md}/12`,
        lg && `lg:basis-${lg}/12`,
        xl && `xl:basis-${xl}/12`,

        `max-w-${xs}/12`,
        sm && `max-w-${sm}/12`,
        md && `md:max-w-${md}/12`,
        lg && `lg:max-w-${lg}/12`,
        xl && `xl:max-w-${xl}/12`,
        className)}
      style={{
        // flexBasis: `${Number(xs) / 12 * 100}%`,
        // maxWidth: `${Number(xs) / 12 * 100}%`,
      }}
      {...rest}
    >
      {children}
      <span className='basis-12/12 max-w-12/12'></span>
    </div>
  )
}
// m={0}
// flexDirection={'row'}
// flexGrow={'0'}
// flexBasis={{
//   xs: xs && `${xs / 12 * 100}%`,
//   sm: sm && `${sm / 12 * 100}%`,
//   md: md && `${md / 12 * 100}%`,
//   lg: lg && `${lg / 12 * 100}%`,
//   xl: xl && `${xl / 12 * 100}%`,
// }}
// maxW={{
//   xs: xs && `${xs / 12 * 100}%`,
//   sm: sm && `${sm / 12 * 100}%`,
//   md: md && `${md / 12 * 100}%`,
//   lg: lg && `${lg / 12 * 100}%`,
//   xl: xl && `${xl / 12 * 100}%`,
// }}