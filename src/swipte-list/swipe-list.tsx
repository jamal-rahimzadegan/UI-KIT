import React, { useState, TouchEvent } from 'react';

interface Props {
  children: ReactNode[]
  showBullets?: boolean
}

type Direction = 'right' | 'left'

function SwipeList(props: Props) {
  const { children, showBullets = true } = props
  const [activeTab, setActiveTab] = useState<number>(0)
  const LAST_INDEX: number = children?.length - 1
  const THRESHOLD: number = 75
  let touchStartPos: number = 0
  let touchStopPos: number = 0
  const hasTouchScreen = 'ontouchstart' in document.documentElement

  const handleTouch = (e: TouchEvent<HTMLDivElement>) => {
    switch (e.type) {
      case 'touchstart':
        return (touchStartPos = e.targetTouches[0].clientX)
      case 'touchmove':
        return (touchStopPos = e.targetTouches[0].clientX)
      case 'touchend':
        return handleSwipe()
      default:
        return
    }
  }

  const handleSwipe = (dir?: Direction) => {
    let index = 0
    let shouldResetIndex = false

    // Swiped Left
    if (dir === 'left' || touchStartPos - touchStopPos > THRESHOLD) {
      shouldResetIndex = activeTab === 0
      index = shouldResetIndex ? LAST_INDEX : activeTab - 1
    }

    // Swiped Right
    else if (dir === 'right' || touchStartPos - touchStopPos < -THRESHOLD) {
      shouldResetIndex = activeTab === LAST_INDEX
      index = shouldResetIndex ? 0 : activeTab + 1
    }

    setActiveTab(index)
  }

  return (
    <>
      <Container
        onTouchStart={handleTouch}
        onTouchMove={handleTouch}
        onTouchEnd={handleTouch}
      >
        {hasTouchScreen ? null : <Arrow dir='left' swipe={handleSwipe} />}
        <ContentContainer>{children[activeTab]}</ContentContainer>
        {hasTouchScreen ? null : <Arrow dir='right' swipe={handleSwipe} />}
      </Container>
      {showBullets ? (
        <BulletContainer>
          {children.map((item, i) => (
            <BulletItem key={i} isActive={i === activeTab} />
          ))}
        </BulletContainer>
      ) : null}
    </>
  )
}

const Arrow = ({ dir, swipe }: { dir: Direction; swipe: Function }) => (
  <ArrowBtn dir={dir} onClick={() => swipe(dir)}>
    <p>{dir === 'left' ? '<' : '>'}</p>
  </ArrowBtn>
)
