import React from 'react';
import { Text } from 'components';
import { LIGHT_THEME } from 'assets/style/theme';
import { BarContainer } from './ProgressBarStyle';

export type ProgressBarProps = {
  value: number; //between 0 - 100
  label: string;
  bgColor?: keyof typeof LIGHT_THEME;
  barColor?: keyof typeof LIGHT_THEME;
  max: number;
  id: string;
  className?: string;
  txtClassname?: string;
  barClassName?: string;
  height: string;
  hasRadius?: boolean;
};

export default function ProgressBar(props: ProgressBarProps): any {
  const { value = 25, label, max = 100, id, className, txtClassname, barClassName } = props;
  return (
    <div className={className}>
      {label ? <Text className={txtClassname}>{label}</Text> : null}
      <BarContainer {...props}>
        <progress className={barClassName} id={id} value={value} max={max} />
      </BarContainer>
      <Text className={txtClassname}>{value}%</Text>
    </div>
  );
}
