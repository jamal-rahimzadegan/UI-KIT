import styled from 'styled-components';
import { BORDER_RADIUS } from 'constant';

export const ImgStyle = styled.img`
  transition: display 1s linear;
  object-fit: ${({ objectFit }: { objectFit: string }) => objectFit};
  border-radius: ${({ radius }: { radius: string }) => BORDER_RADIUS[radius]};
`;
