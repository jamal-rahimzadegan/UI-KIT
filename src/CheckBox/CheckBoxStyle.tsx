import styled from 'styled-components'

export const CheckBoxContainer = styled.div`
  input[type='checkbox']:focus {
    outline: 1px solid rgba(0, 0, 0, 0.5);
  }

  input[type='checkbox'] {
    margin: 0 4px 0 0;
    background-color: #ddd;
    border-radius: 4px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 17px;
    height: 17px;
    cursor: pointer;
    position: relative;
  }

  input[type='checkbox']:checked {
    background: navy;
  }

  input[type='checkbox']:checked::after {
    content: '✔';
    font-size: 1rem;
    color: #fff;
    position: absolute;
    bottom: -1px;
    right: 1px;
  }

  input[type='checkbox']:disabled {
    border-color: #c0c0c0;
    background-color: #c0c0c0;
    cursor: default;
  }

  input[type='checkbox']:disabled + span {
    color: #c0c0c0;
  }
`
