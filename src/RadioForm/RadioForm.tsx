import React from 'react';
import { ComplexObject, FnType } from 'types';
import { FONT_SIZES } from 'constant';
import { LIGHT_THEME } from 'assets/style/theme';
import { RadioContainer } from './RadioFormStyle';

/**  data example:
 [
 {  label: 'label1', value: 'value1' },
 {  label: 'label2', value: 'value2' },
 {  label: 'label3', value: 'value3' },
 ]
 */

interface Props {
  data: Record<string, any>[]
  onChange: Function
  className?: string
  labelColor?: keyof typeof LIGHT_THEME
  labelSize?: keyof typeof FONT_SIZES
}

export default function RadioForm(props: Props): JSX.Element {
  const { data, onChange, labelSize, labelColor, className = '' } = props

  const renderFormList = () => (
    <form className={className}>
      {data.map(({ value, label }) => (
        <RadioContainer
          key={value}
          labelSize={labelSize}
          labelColor={labelColor}
        >
          <input
            value={value}
            type='radio'
            name='radio-item'
            onChange={(e) => onChange(e.target.value)}
          />
          <label>{label}</label>
        </RadioContainer>
      ))}
    </form>
  )

  return <>{data?.length ? renderFormList() : null}</>
}
