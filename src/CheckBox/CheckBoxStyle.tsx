import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
  & input[type='checkbox'] {
    background-color: ${(props) => props.theme.APP};
  }
`;
