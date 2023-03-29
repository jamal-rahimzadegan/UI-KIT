import React, { ChangeEvent } from 'react'
import { Wrapper } from './style'

interface Props {
  onToggle: (e: ChangeEvent<HTMLInputElement>) => any
  label: string
  enabled: boolean
  height?: number
  width?: number
}

export default function Toggle(props: Props): JSX.Element {
  const { label, enabled, onToggle, height = 20, width = 40 } = props

  return (
    <Wrapper height={height} width={width}>
      <input
        type='checkbox'
        defaultChecked={enabled}
        onChange={(e) => onToggle?.(e)}
      />
      <span />
      <strong>{label}</strong>
    </Wrapper>
  )
}
