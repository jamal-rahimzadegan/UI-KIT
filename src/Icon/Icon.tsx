import React from 'react';
import styled from 'styled-components';
import { IconStyle } from './IconStyle';

interface IconProps {
  name: string;
  size?: number;
  className: string;
  color: string;
  isBold?: boolean;
}

const IconStyle = styled.i`
  font-size: ${({ size }) => size || 16}px;
  color: ${({ theme, color }) => theme[color || 'PRIMARY_TEXT']};
  transition: all 500ms;
`;

export default function Icon(props: IconProps): JSX.Element {
  const { name, className, color, isBold, size, ...restProps } = props;
  return (
    <IconStyle className={`icon-${name} ${className || ''}`} color={color} isBold={isBold} size={size} {...restProps} />
  );
}




