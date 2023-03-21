import Card from './style'
import chipIcon from './data/chip.png'
import formatCardNumber from './data/format-card-number' // You can use any file you prefer

interface Props {
  bankName: string
  cardNumber: string
  holder: string
  expiry: string
}

export default function CreditCard(props: Props): JSX.Element {
  const { bankName, cardNumber, holder, expiry } = props

  // TODO: add validation for card etc.
  return (
    <Card.Wrapper>
      <Card.Header>
        <Card.BankName>{bankName}</Card.BankName>
        <Card.ChipIcon src={chipIcon} alt='chip' />
      </Card.Header>
      <Card.Number>{formatCardNumber(cardNumber)}</Card.Number>
      <Card.HolderInfo>
        <Card.Holder>{holder}</Card.Holder>
        <Card.ExpDate>{expiry}</Card.ExpDate>
      </Card.HolderInfo>
    </Card.Wrapper>
  )
}
