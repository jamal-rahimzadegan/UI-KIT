
import { StyledImg } from './style'

interface Props extends HTMLImageElement {}

export default function Img(props: Props): JSX.Element {
  const { src, alt, className = '', ...resProps } = props

  const handleError = (e: any) => {
    const { target } = e
    target.onerror = null
    target.src = 'SOME_IMG'
    target.style.filter = 'blur(50px)'
    // target.style.opacity = 0.2;
  }

  return (
    <StyledImg
      src={src}
      className={className}
      alt={alt}
      onError={handleError}
      {...resProps}
    />
  )
}
