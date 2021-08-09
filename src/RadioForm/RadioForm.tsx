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
  data: ComplexObject[];
  onChangeFn: FnType;
  labelColor?: keyof typeof LIGHT_THEME;
  labelSize?: keyof typeof FONT_SIZES;
  className?: string;
}

export default function RadioForm(props: Props): JSX.Element {
  const { data, onChangeFn, labelSize, labelColor, className } = props;

  const renderBoxList = () => (
    <form className={className || ''}>
      {data.map(({ value, label }) => (
        <RadioContainer key={value} labelSize={labelSize} labelColor={labelColor}>
          <input value={value} type="radio" name="radio-item" onChange={(e) => onChangeFn(e.target.value)} />
          <label>{label}</label>
        </RadioContainer>
      ))}
    </form>
  );

  return <>{data?.length ? renderBoxList() : null}</>;
}
