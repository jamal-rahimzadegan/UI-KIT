import styled from 'styled-components'

export const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  input {
    text-align: center;
    border: none;
    margin: 0 4px;
    width: 50px;
    height: 50px;
    cursor: not-allowed;
    pointer-events: none;

    :focus {
      border-bottom: 3px solid orange;
      outline: none;
    }

    :nth-child(1) {
      cursor: pointer;
      pointer-events: all;
    }
  }
`
