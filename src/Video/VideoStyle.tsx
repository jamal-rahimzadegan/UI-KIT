import styled from 'styled-components';

export const StyledVideo = styled.video`
  object-fit: ${(props) => props.objectFit};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
