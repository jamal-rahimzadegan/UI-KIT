import React from 'react';
import styled from 'styled-components';
import { BORDER_RADIUS } from 'constant';
import { Image, Text } from 'components';
import { CircleDiv } from './CircleStyle';

type CircleType = {
  title?: string;
  icon?: string;
  hasIcon?: boolean;
  size?: string;
  className?: string;
  iconSize?: string;
};


export const CircleDiv = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  border: 2px solid ${({ theme }) => theme.BRIGHT_BORDER};
  background: ${({ theme }) => theme.CARD_BG};
  border-radius: ${() => BORDER_RADIUS['round-pill']};
  margin-bottom: 10px;
  overflow: hidden;
`;

export default function Circle(props: CircleType): JSX.Element {
  const { title, icon, className = '', hasIcon = true, size = '100px', iconSize = '40px' } = props;

  return (
    <CircleDiv className={className} size={size}>
      {hasIcon ? <Image alt={icon} width="" src={icon} height={iconSize} objectFit="contain" /> : null}
      <Text className="title-font" size="s">
        {title}
      </Text>
    </CircleDiv>
  );
}
