import styled from 'styled-components';
import Card from '../Card/Card';

export const RadioContainer = styled(Card)`
  & input[type='radio']:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    top: -2px;
    left: 1px;
    position: relative;
    background-color: ${(props) => props.theme.BLOCK_BG};
    content: '';
    display: inline-block;
    visibility: visible;
  }
  & input[type='radio']:checked:after {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    position: relative;
    top: -2px;
    left: 1px;
    background-color: ${(props) => props.theme.APP_ACCENT};
    content: '';
    display: inline-block;
    visibility: visible;
  }
`;
