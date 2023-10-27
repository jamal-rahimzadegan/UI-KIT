export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  meter {
    &[min='0'] {
      background: grey;
    }
  }
`
