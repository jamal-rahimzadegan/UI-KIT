import styled from 'styled-components';

export const ToggleSwitchStyle = styled.div`
  padding: 0;
  margin: 0;
  input[type='checkbox'] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: ${(props) => props.width + 'px'};
    height: ${(props) => props.height + 'px'};
    background: ${(props) => props?.bgColor || props.theme.BLOCK_BG};
    border-radius: 100px;
    position: relative;
  }

  label:after {
    content: '';
    position: absolute;
    top: 5%;
    left: 2%;
    width: ${(props) => props.width / 2.1 + 'px'};
    height: ${(props) => props.height / 1.1 + 'px'};
    background: ${(props) => props?.bulletColor || props.theme.BACKGROUND};
    border-radius: 90px;
    transition: 600ms;
  }

  input:checked + label {
    background: ${(props) => props?.bgColor || props.theme.GREEN};
  }

  input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: ${(props) => props.width * 2 + 'px'};
  }
`;
