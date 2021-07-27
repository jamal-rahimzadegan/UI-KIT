import React, { useEffect, useState } from 'react';
import { IMG_PATH } from 'constant';
import { ObjectFit } from 'types';
import { ImgStyle } from './ImgStyle';

interface ImgProps {
  src: string;
  alt: string;
  height?: string | number;
  width?: string | number;
  className?: string;
  radius?: string;
  onClick?: Function;
  objectFit?: ObjectFit;
}

const OPTIONS = {
  threshold: 0.01,
  rootMargin: '75%',
};

const PLACE_HOLDER = IMG_PATH + 'nopicture.jpg';

export default function LazyLoading(props: ImgProps): JSX.Element {
  const { src, alt, height, width, className = '', objectFit, radius = null, ...resProps } = props;
  const [imgSrc, setImgSrc] = useState<string>(PLACE_HOLDER);
  const [imgRef, setImgRef] = useState<HTMLImageElement>();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleStyle = (style, e) => e.target.classList.add(style);

  const handleImgSrc = (entries, observer, didCancel) => {
    entries.forEach((entry) => {
      if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
        setImgSrc(src);
        observer.unobserve(imgRef);
        setTimeout(() => setIsLoaded(true), 500);
      }
    });
  };

  const runObservation = (observer, didCancel) => {
    observer = new IntersectionObserver((entries) => handleImgSrc(entries, observer, didCancel), OPTIONS);
    observer.observe(imgRef);
  };

  useEffect(() => {
    let observer;
    let didCancel = false;
    if (imgRef && imgSrc !== src) {
      IntersectionObserver ? runObservation(observer, didCancel) : setImgSrc(src); // false fn is for Old browsers fallback
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve) observer.unobserve(imgRef);
    };
  }, [src, imgSrc, imgRef]);

  return (
    <ImgStyle
      ref={setImgRef}
      src={imgSrc}
      onLoad={(e) => handleStyle('loaded', e)}
      onError={(e) => handleStyle('has-error', e)}
      objectFit={objectFit}
      radius={radius}
      height={isLoaded ? height : '1px'}
      width={isLoaded ? width : '1px'}
      className={className}
      isLoaded={isLoaded}
      alt={alt}
      {...resProps}
    />
  );
}
