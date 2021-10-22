import styled, { keyframes } from 'styled-components';
import { Card } from '../../';
import { RADIUS } from 'constant';

const openDrawer = keyframes`
  from {
    height: 0;
  }
  to {
    height: 200px;
  }`;

const closeDrawer = keyframes`
  from {
    height: 200px;
  }
  to {
    height: 0;
  }
`;

export const StyledDropDown = styled(Card)`
  button {
    border-radius: ${({ isOpen }) => {
      const { m } = RADIUS;
      return isOpen ? `${m} ${m} 0 0` : null;
    }};
  }
`;

export const ItemsContainer = styled(Card)`
  height: 0;
  width: inherit;
  z-index: 2;
  position: absolute;
  overflow-y: auto;
  overflow-x: hidden;
  background: ${({ theme }) => theme.LIGHT_BLOCK_BG};
  border-radius: ${() => {
    const { m } = RADIUS;
    return `0 0 ${m} ${m}`;
  }};

  animation: ${({ isOpen }) => {
      if (isOpen === undefined || isOpen === null) return;
      if (isOpen) return openDrawer;
      if (!isOpen) return closeDrawer;
    }}
    200ms forwards;
`;
