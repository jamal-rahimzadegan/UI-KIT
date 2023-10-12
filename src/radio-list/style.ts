import styled from 'styled-components';
import { FONT_SIZES } from 'constant';

const BOX_SIZE = '15px';

export const RadioContainer = styled.form`
  ${({ horizontal }) =>
    horizontal
      ? css`
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        `
      : null};
`;

export const RadioItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  label {
    color: ${({ theme, labelColor }) => theme[labelColor]};
    font-size: ${({ labelSize }) => FONT_SIZES[labelSize]};
    font-weight: bold;
    margin: 0 5px 0 0;
  }

  input {
    cursor: pointer;
    border: 1px solid red;
  }

  & input[type='radio'] {
    width: ${BOX_SIZE};
    height: ${BOX_SIZE};
    -webkit-appearance: none;
    outline: none;
    border: none;
  }

  & input[type='radio']:after {
    width: ${BOX_SIZE};
    height: ${BOX_SIZE};
    border-radius: ${BOX_SIZE};
    position: relative;
    background-color: ${(props) => props.theme.BLOCK_BG};
    content: '';
    display: inline-block;
    visibility: visible;
  }

  & input[type='radio']:checked:after {
    width: ${BOX_SIZE};
    height: ${BOX_SIZE};
    border-radius: ${BOX_SIZE};
    position: relative;
    background-color: ${(props) => props.theme.APP};
    content: '';
    display: inline-block;
    visibility: visible;
  }
`;
