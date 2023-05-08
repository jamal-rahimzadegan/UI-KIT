import React, { InputHTMLAttributes, useState } from 'react'
import { Wrapper } from './style'

interface Props extends InputHTMLAttributes<any> {
  onToggle: (isActive: boolean) => any
  label: string
  enabled: boolean
  height?: number
  width?: number
  className?: string
}

export default function Toggle(props: Props): JSX.Element {
  const {
    label,
    enabled = false,
    onToggle,
    height = 17,
    width = 34,
    className = '',
    ...restProps
  } = props
  const [isActive, setIsActive] = useState<boolean>(enabled)

  const handleToggle = () => {
    setIsActive(!isActive)
    onToggle?.(isActive)
  }

  return (
    <button onClick={handleToggle} className={className}>
      <Wrapper height={height} width={width}>
        <input type='checkbox' checked={isActive} readOnly {...restProps} />
        <span className='toggle-container' />
      </Wrapper>
      <strong>{label}</strong>
    </button>
  )
}
