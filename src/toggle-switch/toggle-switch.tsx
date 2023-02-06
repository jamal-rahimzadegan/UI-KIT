import React from 'react';
import { ToggleSwitchStyle } from './style';

type ToggleSwitch = {
  onToggle: Function;
  height: number;
  width: number;
  bulletColor: string;
  bgColor: string;
  checkedBg: string;
  children: React.ReactNode;
};

export default function ToggleSwitch(props: ToggleSwitch): JSX.Element {
  const { onToggle, height = 20, width = 40, bulletColor, bgColor, checkedBg, children } = props;

  return (
    <ToggleSwitchStyle checkedBg={checkedBg} bulletColor={bulletColor} bgColor={bgColor} height={height} width={width}>
      <input onChange={() => onToggle()} type="checkbox" id="switch" />
      <label htmlFor="switch">{children || 'Toggle'}</label>
    </ToggleSwitchStyle>
  );
}
