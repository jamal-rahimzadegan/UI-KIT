import styled from 'styled-components';

export const HrStyle = styled.hr`
  height: ${(props) => props?.height || '1.5px'};
  width: 100%;
  background-color: ${({ theme, bgColor }) => theme[bgColor || 'DIVIDER']};
`;
