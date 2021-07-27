import React, { useState } from 'react';
import { useGetDevice } from 'hooks';
import { ArrowBtn, BulletContainer, BulletItem, CarouselContainer, Slide } from 'components/Carousel/CarouselStyle';

let touchStartPos = 0;
let touchStopPos = 0;

interface CarouselProps {
  imgs: string[];
  height: string;
  width?: string;
  showBullets?: boolean;
  className?: string;
}

export default function Carousel(props: CarouselProps): JSX.Element {
  const { isMobile } = useGetDevice();

  const { className = '', imgs = [], height = '400px', width = '100%', showBullets = true } = props;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const previousSlide = () => {
    const lastIndex = imgs.length - 1;
    const shouldResetIndex = activeIndex === 0;
    const index = shouldResetIndex ? lastIndex : activeIndex - 1;
    setActiveIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = imgs.length - 1;
    const shouldResetIndex = activeIndex === lastIndex;
    const index = shouldResetIndex ? 0 : activeIndex + 1;
    setActiveIndex(index);
  };

  const handleTouchEnd = () => {
    // run on left swipe
    if (touchStartPos - touchStopPos > 75) previousSlide();

    // run on right swipe
    if (touchStartPos - touchStopPos < -75) nextSlide();
  };

  const Arrow = ({ dir, changeImg }) => (
    <ArrowBtn dir={dir} onClick={changeImg}>
      <i className={'arrow ' + dir} />
    </ArrowBtn>
  );

  const Bullets = () => (
    <BulletContainer>
      {imgs.map((item, i) => (
        <BulletItem key={i} i={i} activeIndex={activeIndex} />
      ))}
    </BulletContainer>
  );

  return (
    <CarouselContainer height={height} width={width}>
      <div
        className={'center-items w-100 h-100 overflow-hidden ' + className}
        onTouchStart={(e) => (touchStartPos = e.targetTouches[0].clientX)}
        onTouchMove={(e) => (touchStopPos = e.targetTouches[0].clientX)}
        onTouchEnd={handleTouchEnd}
      >
        {!isMobile ? <Arrow dir="right" changeImg={nextSlide} /> : null}
        <Slide url={imgs[activeIndex]} />
        {!isMobile ? <Arrow dir="left" changeImg={previousSlide} /> : null}
      </div>
      {showBullets ? <Bullets /> : null}
    </CarouselContainer>
  );
}
