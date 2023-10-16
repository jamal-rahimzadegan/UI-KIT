import React from 'react'
import { InputsContainer } from './style'

interface Props {
  className?: string
  length?: number
}

export default function OtpInput(props: Props) {
  const { className = '', length = 4 } = props

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    const val = target.value

    if (isNaN(+val)) {
      target.value = ''
      return
    }

    if (val !== '') {
      const nextElement = target.nextElementSibling as HTMLInputElement
      if (nextElement) nextElement.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key.toLowerCase()
    const target: HTMLInputElement = e.target as HTMLInputElement

    if (key == 'backspace' || key == 'delete') {
      target.value = ''
      const prevElement = target.previousElementSibling as HTMLInputElement
      if (prevElement) prevElement.focus()
    }
  }

  return (
    <InputsContainer className={className}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={(length + i).toString()}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type='text'
          inputMode='numeric'
          maxLength={1}
        />
      ))}
    </InputsContainer>
  )
}
