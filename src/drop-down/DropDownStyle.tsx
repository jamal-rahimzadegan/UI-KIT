import styled, { keyframes } from 'styled-components';
import { Card, Txt } from '../../';
import { RADIUS } from 'constant';

export const TitleBtn = styled.button`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: inherit;
  padding: 5px 10px;
  color: ${({ theme }) => theme.BORDER};
  background: ${({ theme }) => theme.LIGHT_BLOCK_BG};
  border: 2px solid ${({ theme }) => theme.BORDER};
  border-radius: ${({ isOpen }) => {
    const { m } = RADIUS;
    return isOpen ? `${m} ${m} 0 0` : m;
  }};

  svg {
    color: ${({ theme }) => theme.BORDER};
  }
`;

const openDrawer = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height:180px;
    opacity: 1;
  }`;

const closeDrawer = keyframes`
  from {
    height: 180px;
    opacity: 1;
  }
  to {
    height: 0;
    opacity: 0;
  }
`;

export const OptionItem = styled(Txt)`
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.BORDER};
  padding: 10px;
  display: block;
  width: 90%;
  margin: auto;
`;

export const ItemsContainer = styled(Card)`
  height: 0;
  width: inherit;
  z-index: 2;
  position: absolute;
  overflow-y: auto;
  overflow-x: hidden;
  background: ${({ theme }) => theme.LIGHT_BLOCK_BG};
  border: ${({ theme, isOpen }) => `${isOpen ? 2 : 0}px solid ${theme.BORDER}`};
  box-shadow: ${({ isOpen }) => `0px 5px 18px -5px rgba(0, 0, 0, 0.${isOpen ? 47 : 0})`};

  border-radius: ${() => {
    const { m } = RADIUS;
    return `0 0 ${m} ${m}`;
  }};

  animation: ${({ isOpen }) => {
      if (isOpen === undefined || isOpen === null) return;
      return isOpen ? openDrawer : closeDrawer;
    }}
    300ms forwards;
`;
