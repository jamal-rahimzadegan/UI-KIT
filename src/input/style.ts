import styled from "styled-components";

export const LabelStyle = styled.label`
  color: ${({ theme }) => theme.colors.PRIMARY_TEXT};
`;

export const InputContainer = styled.form<any>`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors?.INPUT_BG};
  box-shadow: ${({ theme }) => theme.colors?.BOX_SHADOW};
  text-align: right;
  padding: 0 10px;
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  color: ${({ theme }) => theme.colors.BLACK};
  border-width: 0;
  font-size: 13px;
  background-color: transparent;
  resize: none;
  ::placeholder {
    opacity: 0.7;
  }
`;

export const StyledInput = styled.input`
  text-align: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors?.BLACK};
  border-width: 0;
  font-size: 13px;
  background: transparent;
  ::placeholder {
    opacity: 0.7;
  }
`;
