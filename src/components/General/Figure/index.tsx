import { HTMLAttributes } from 'react';
import Image, { ImageProps } from 'next/image'

interface FigureProps extends HTMLAttributes<HTMLElement> {
  imgProps: ImageProps
}

function Figure({ children, imgProps, ...rest }: FigureProps) {
  return (
    <figure
      {...rest}
      style={{
        width: imgProps.width,
        height: imgProps.height,
      }}
    >
      <Image {...imgProps} alt={imgProps.alt} />
      {children}
    </figure>
  );
}

export default Figure;
