import { StyledLoader } from './style'

interface props {
  bgColor?: keyof Theme['colors']
  rippleColor?: keyof Theme['colors']
  speed?: number
  size?: number
  className?: string
}

export default function Spinner(props: props) {
  const { bgColor = 'white', rippleColor = 'brand', ...restProps } = props
  return (
    <StyledLoader bgColor={bgColor} rippleColor={rippleColor} {...restProps} />
  )
}
