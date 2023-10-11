import React, { useState, TouchEvent } from 'react';

interface Props {
  children: ReactNode[]
}

function SwipeList(props: Props) {
  const { children } = props
  const [activeTab, setActiveTab] = useState<number>(0)
  const LAST_INDEX: number = children?.length - 1
  const THRESHOLD: number = 75
  let touchStartPos: number = 0
  let touchStopPos: number = 0

  const handleTouch = (e: TouchEvent<HTMLDivElement>) => {
    switch (e.type) {
      case 'touchstart':
        return (touchStartPos = e.targetTouches[0].clientX)
      case 'touchmove':
        return (touchStopPos = e.targetTouches[0].clientX)
      case 'touchend':
        if (touchStartPos - touchStopPos > THRESHOLD) return swipeLeft() // Swiped Left
        if (touchStartPos - touchStopPos < -THRESHOLD) return swipeRight() // Swiped Right
        break
      default:
        return
    }
  }

  const swipeLeft = () => {
    const shouldResetIndex = activeTab === 0
    const index = shouldResetIndex ? LAST_INDEX : activeTab - 1
    setActiveTab(index)
  }

  const swipeRight = () => {
    const shouldResetIndex = activeTab === LAST_INDEX
    const index = shouldResetIndex ? 0 : activeTab + 1
    setActiveTab(index)
  }

  return (
    <div
      onTouchStart={handleTouch}
      onTouchMove={handleTouch}
      onTouchEnd={handleTouch}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children[activeTab]}
    </div>
  )
}
