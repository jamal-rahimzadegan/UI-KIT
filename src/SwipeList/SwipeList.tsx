import React, { useState } from 'react';
import { useGetDevice } from 'hooks';

let touchStartPos = 0;
let touchStopPos = 0;

interface SwipeListProps {
  children: React.ReactNode;
}

export default function SwipeList(props: SwipeListProps): JSX.Element {
  const { isMobile } = useGetDevice();

  const { children } = props;
  const [activeTab, setActiveTab] = useState<number>(0);
  // @ts-ignore
  const lastIndex = children?.length - 1;

  const prevTab = () => {
    const shouldResetIndex = activeTab === 0;
    const index = shouldResetIndex ? lastIndex : activeTab - 1;
    setActiveTab(index);
  };

  const nextTab = () => {
    const shouldResetIndex = activeTab === lastIndex;
    const index = shouldResetIndex ? 0 : activeTab + 1;
    setActiveTab(index);
  };

  const handleTouchEnd = () => {
    // run on left swipe
    if (touchStartPos - touchStopPos > 75) prevTab();

    // run on right swipe
    if (touchStartPos - touchStopPos < -75) nextTab();
  };

  return (
    <div
      className="center-items w-100 h-100"
      onTouchStart={(e) => (touchStartPos = e.targetTouches[0].clientX)}
      onTouchMove={(e) => (touchStopPos = e.targetTouches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      {children[activeTab]}
    </div>
  );
}
