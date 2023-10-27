import { Container } from './style';

interface Props {
  label: string
  min?: number
  max: number
  value: number
}

export default function Meter(props: Props) {
  const { label, min = 0, max, value } = props
  return (
    <Container>
      <label>{label}</label>
      <meter min={min} max={max} value={value} />
    </Container>
  )
}
