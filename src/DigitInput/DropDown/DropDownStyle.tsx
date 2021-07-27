import styled from 'styled-components';
import { Card } from '../index';

export const StyledDropDownItemsWrapper = styled(Card)`
  height: 0;
  left: 50%;
  width: ${(props) => props.width ?? 'max-content'};
  transform: translate(-50%, 0);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  z-index: 2;
`;
