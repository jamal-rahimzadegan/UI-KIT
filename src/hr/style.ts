 const Container = styled.hr`
  height: ${(props) => props?.height || '1.5px'};
  width: 100%;
  background-color: ${({ theme, bgColor }) => theme[bgColor || 'DIVIDER']};
`;

export Container
