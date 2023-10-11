import React, { useState, TouchEvent } from 'react';

function SwipeList(props: Props) {
  const { children } = props
  const [activeTab, setActiveTab] = useState<number>(0)
  const LAST_INDEX: number = children?.length - 1
  const THRESHOLD: number = 75
  let touchStartPos: number = 0
  let touchStopPos: number = 0

  const handleSwipe = () => {
    let index = 0
    let shouldResetIndex = false

    // Swiped Left
    if (touchStartPos - touchStopPos > THRESHOLD) {
      shouldResetIndex = activeTab === 0
      index = shouldResetIndex ? LAST_INDEX : activeTab - 1
    }

    // Swiped Right
    if (touchStartPos - touchStopPos < -THRESHOLD) {
      shouldResetIndex = activeTab === LAST_INDEX
      index = shouldResetIndex ? 0 : activeTab + 1
    }

    setActiveTab(index)
  }

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
