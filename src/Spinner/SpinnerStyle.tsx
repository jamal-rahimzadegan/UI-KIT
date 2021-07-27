import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
  to {
    transform: rotate(360deg);
  }`;

export const Loading = styled.div`
  width: ${({ width }) => width || '35px'};
  height: ${({ height }) => height || '35px'};
  border: 3px solid ${({ theme, bgColor }) => theme[bgColor || 'MODAL_BG']};
  border-radius: 50%;
  border-top-color: ${({ theme, rippleColor }) => theme[rippleColor || 'APP']};
  display: inline-block;
  animation: ${spinner} 0.6s linear infinite;
`;
