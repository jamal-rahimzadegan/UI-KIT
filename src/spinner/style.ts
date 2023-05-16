import styled, { keyframes } from 'styled-components'

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const StyledLoader = styled.div<any>`
  width: ${({ size }) => size || 30}px;
  height: ${({ size }) => size || 30}px;
  border: 4px solid ${({ theme, bgColor }) => theme.colors[bgColor]}; /* Light grey */
  border-top: 4px solid ${({ theme, rippleColor }) => theme.colors[rippleColor]};
  border-radius: 50%;
  animation: ${spinner} 1.3s linear infinite;
  display: inline-block;
`
