import styled from 'styled-components'

const Container = styled.dialog`
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
  }
`

export default { Container }
