const Wrapper = styled.i`
  font-size: ${({ size }) => size || 16}px;
  color: ${({ theme, color }) => theme[color || 'PRIMARY_TEXT']};
  transition: all 500ms;
`;

export default Wrapper
