import React, { ChangeEvent } from 'react'
import { InputsContainer } from './style'

/*
To Improve:

Add left/right moving support
styling

 */

interface Props {
  className?: string
  length?: number
}

export default function OtpInput(props: Props) {
  const { className = '', length = 4 } = props

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target
    const val = target.value

    if (isNaN(+val)) {
      target.value = ''
      return
    }

    if (val != '') {
      const nextElement = target.nextElementSibling
      if (nextElement) (nextElement as HTMLInputElement).focus()
    }
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key.toLowerCase()
    const target: HTMLInputElement = e.target as HTMLInputElement

    if (key == 'backspace' || key == 'delete') {
      target.value = ''
      const prevElement = target.previousElementSibling
      if (prevElement) (prevElement as HTMLInputElement).focus()
    }
  }

  return (
    <InputsContainer className={className}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={(length + i).toString()}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          type='text'
          inputMode='numeric'
          maxLength={1}
        />
      ))}
    </InputsContainer>
  )
}
