import { memo, useRef } from 'react';
import { IMG_PATH } from 'constant';
import { ObjectFit } from 'types';
import { ImgStyle } from './ImgStyle';

interface ImgProps {
  src: string;
  alt: string;
  height: string | number;
  width: string | number;
  className?: string;
  radius?: string;
  onClick?: Function;
  objectFit?: ObjectFit;
}

const Image = memo(function Image(props: ImgProps): JSX.Element {
  const { src, alt, className = '', objectFit, radius = null, ...resProps } = props;
  const imgRef = useRef();

  return (
    <ImgStyle
      ref={imgRef}
      loading="lazy"
      src={src}
      objectFit={objectFit}
      radius={radius}
      className={className}
      alt={alt}
      onError={({ target }) => {
        target.onerror = null;
        target.src = IMG_PATH + 'user.png';
        target.style.filter = 'blur(50px)';
        // target.style.opacity = 0.2;
      }}
      {...resProps}
    />
  );
});

export default Image;
