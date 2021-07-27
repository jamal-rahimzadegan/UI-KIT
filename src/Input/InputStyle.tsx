import styled from 'styled-components';
import { BORDER_RADIUS } from 'constant'; //import border radius or other things 

export const LabelStyle = styled.label`
  color: ${({ theme, labelColor }) => theme[labelColor || 'PRIMARY_TEXT']};
`;

export const InputContainer = styled.div`
  overflow: hidden;
  height: ${({ height }) => height || null};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  width: ${({ width }) => width || '100%'};
  border-radius: ${({ borderRadius }) => BORDER_RADIUS[borderRadius || 'none']};
  background: ${({ theme, bgColor }) => theme[bgColor || 'Transparent']};
  text-align: right;
  border: ${({ theme, borderColor }) => (borderColor ? '1px solid ' + theme[borderColor] : null)};
`;

export const StyledTextArea = styled.textarea`
  color: ${({ theme, textColor }) => theme[textColor || 'PRIMARY_TEXT']};
  border-width: 0;
  font-size: 13px;
  background-color: transparent !important;
  resize: none;

  ::placeholder {
    color: ${({ theme, textColor }) => theme[textColor || 'PRIMARY_TEXT']};
    opacity: 0.5;
  }
`;

export const StyledInput = styled.input`
  text-align: right;
  color: ${({ theme, textColor }) => theme[textColor || 'PRIMARY_TEXT']};
  border-width: 0;
  font-size: 13px;
  background: transparent;

  ::placeholder {
    color: ${({ theme, textColor }) => theme[textColor || 'PRIMARY_TEXT']};
    opacity: 0.5;
  }
`;
