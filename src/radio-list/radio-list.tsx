import React from 'react';
import { RadioContainer } from './style';

interface Props {
  data: Array<{ label: string; value: string | number }>
  onChange: (value: string) => Function
  className?: string
  labelColor?: string
  labelSize?: string
}

export default function RadioForm(props: Props): JSX.Element {
  const { data, onChange, labelSize, labelColor, className = '' } = props

  const renderRadioList = () => (
    <form className={className}>
      {data.map(({ value, label }) => (
        <RadioContainer
          key={value}
          labelSize={labelSize}
          labelColor={labelColor}
        >
          <input
            type='radio'
            value={value}
            name={label}
            onChange={(e) => onChange(e.target.value)}
          />
          <label>{label}</label>
        </RadioContainer>
      ))}
    </form>
  )

  return <>{data?.length ? renderRadioList() : null}</>
}
