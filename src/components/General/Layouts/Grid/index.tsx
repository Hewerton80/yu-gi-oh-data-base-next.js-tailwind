import { HTMLAttributes } from 'react';
import { concatenateClasseName } from '../../../../utilts/concatenateClasseName';

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columnGap?: number;
  rowGap?: number;
}

interface ColProps extends HTMLAttributes<HTMLDivElement> {
  xs?: number;
}

export function Grid({ className, rowGap, columnGap, children, ...rest }: GridProps) {
  return (
    <div
    v-for="item in items"
      className={concatenateClasseName(`
        flex flex-wrap h-fit-content space-x-0
        odd:pt-${rowGap || 0} odd:pl-${columnGap || 0}
        even:pt-${rowGap || 0} even:pl-${columnGap || 0}
      `, className)}
      {...rest}
      style={{
        width: `calc(100% + ${columnGap}px)`,
        marginTop: rowGap ? Number(rowGap) * -1 : 0,
        marginLeft: columnGap ? Number(columnGap) * -1 : 0
      }}
    >
      {children}
    </div>
  );
}

export function Col({ className, children, xs, ...rest }: ColProps) {
  return (
    <div
      className={concatenateClasseName(`
        m-0 flex-row flex-grow-0 
      `, className)}
      {...rest}
      style={{
        flexBasis: `${Number(xs || 12) / 12 * 100}%`,
        maxWidth: `${Number(xs || 12) / 12 * 100}%`,
      }}
    >
      {children}
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