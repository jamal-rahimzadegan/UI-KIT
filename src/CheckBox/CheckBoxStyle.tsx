import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  input[type='checkbox']:focus {
    outline: 1px solid rgba(0, 0, 0, 0.5);
  }

  input[type='checkbox'] {
    background-color: #ddd;
    border-radius: 17px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 17px;
    height: 17px;
    cursor: pointer;
    position: relative;
  }

  input[type='checkbox']:checked {
    background: ${(props) => props.theme.APP}
      url('data:image/gif;base64,R0lGODlhCwAKAIABAP////3cnSH5BAEKAAEALAAAAAALAAoAAAIUjH+AC73WHIsw0UCjglraO20PNhYAOw==')
      no-repeat 3px 3px;
  }
`;
