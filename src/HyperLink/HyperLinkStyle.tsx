import styled from 'styled-components';

export const A = styled.a`
  color: ${({ theme, color }) => theme[color || 'PRIMARY_TEXT']} !important;
  background-color: ${({ theme, bgColor }) => theme[bgColor || 'TRANSPARENT']} !important;
`;
