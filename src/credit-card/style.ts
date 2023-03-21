import styled from 'styled-components'

const Wrapper = styled.div`
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.6);
  background: #1f1e1e;
  color: white;
  width: 300px;
  height: 180px;
  border-radius: 5px;
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ChipIcon = styled.img`
  height: 30px;
`

const BankName = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`

const Number = styled.p`
  font-size: 1.1rem;
`

const HolderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Holder = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 75%;
`

const ExpDate = styled.p`
  font-weight: bold;
`

export default {
  Wrapper,
  Header,
  ChipIcon,
  BankName,
  Number,
  HolderInfo,
  Holder,
  ExpDate,
}
