import styled from 'styled-components'

const Container = styled.dialog`
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(2px);
  }
`

export default { Container }
