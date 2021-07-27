import styled, { css } from 'styled-components';
import { BORDER_RADIUS } from 'constant';

export const BackDrop = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 101;
  width: 100%;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: auto;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.MODAL_BG};

  animation: fading 700ms forwards;
  @keyframes fading {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ModalBody = styled.div`
  background-color: ${({ theme }) => theme.BACKGROUND};
  width: 70%; /* Width in proportion to its parent container*/
  max-width: 640px; /* Max width where it stops expanding */
  height: max-content; /* Height in proportion to its parent container */
  margin: auto; /* Auto margin according to the element width */
  padding: 10px;
  border-radius: ${() => BORDER_RADIUS['s']};
`;
