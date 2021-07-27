import styled from 'styled-components';
import { BORDER_RADIUS } from 'constant';

export const InputItemStyle = styled.input`
  background-color: ${({ theme }) => theme.DIM_BORDER};
  color: ${({ theme }) => theme.WHITE};
  text-align: center;
  border: none;
  margin: 0 4px;
  width: 50px;
  height: 50px;
  border-radius: ${() => BORDER_RADIUS.s};
`;
