import styled from 'styled-components';
import { FONT_SIZES } from 'constant';
import Card from '../Card/Card';

export const RadioContainer = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  label {
    color: ${({ theme, labelColor }) => theme[labelColor]};
    font-size: ${({ labelSize }) => FONT_SIZES[labelSize]};
    margin: 0 5px;
  }

  input {
    cursor: pointer;
  }

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
    background-color: ${(props) => props.theme.APP};
    content: '';
    display: inline-block;
    visibility: visible;
  }
`;
