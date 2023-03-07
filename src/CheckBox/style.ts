import styled from "styled-components";

const Container = styled.label`
  display: flex;
  align-items: center;
`;

const Box = styled.input`
  margin: 0 4px 0 0;
  background-color: #ddd;
  border-radius: 4px;
  appearance: none;
  width: 17px;
  height: 17px;
  cursor: pointer;
  position: relative;

  :focus {
    outline: 1px solid rgba(0, 0, 0, 0.5);
  }

  :checked {
    background: navy;
  }

  :checked::after {
    content: "✔";
    font-size: 1rem;
    color: #fff;
    position: absolute;
    bottom: -1px;
    right: 1px;
  }

  :disabled {
    border-color: #c0c0c0;
    background-color: #c0c0c0;
    cursor: default;
  }

  :disabled + span {
    color: #c0c0c0;
  }
`;

const Label = styled.span``;

export default { Container, Box, Label };
