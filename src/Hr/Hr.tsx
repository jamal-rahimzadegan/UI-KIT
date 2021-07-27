import React from 'react';
import { HrStyle } from './HrStyle';

type HrProps = {
  height?: string;
  width?: string;
  className?: string;
};

export default function Hr(props: HrProps): JSX.Element {
  const { height, width, className, ...restProps } = props;
  return <HrStyle className={className + ' rounded'} {...restProps} />;
}
