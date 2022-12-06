 import { ChangeEvent, useState } from 'react'

type CheckBox = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

interface Props extends CheckBox {
  label: string
}

function Checkbox(props: Props): JSX.Element {
  const { label, checked, onChange, ...restProps } = props
  const defaultChecked: boolean = checked ? checked : false
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prev) => !prev)
    onChange?.(e)
  }

  return (
    <CheckBoxContainer>
      <label>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleChange}
          {...restProps}
        />
        <span>{label}</span>
      </label>
    </CheckBoxContainer>
  )
}
