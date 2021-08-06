import React, { useState } from 'react';
import { ComplexObject, FnType } from 'types';
import { FONT_SIZES } from 'constant';
import { LIGHT_THEME } from 'assets/style/theme';
import { RadioContainer } from './RadioFormStyle';

/**  data example:
 [
 { id: 1, label: 'label1', value: 'value1' },
 { id: 2, label: 'label2', value: 'value2' },
 { id: 3, label: 'label3', value: 'value3' },
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
  const [checkItem, setCheckItem] = useState<string>('');

  const select = (e) => {
    setCheckItem(e.target.value);
    onChangeFn && onChangeFn(e);
  };

  const renderBoxList = () => (
    <div className={className || ''}>
      {data.map(({ value, id, label }) => (
        <RadioContainer key={id} labelSize={labelSize} labelColor={labelColor}>
          <input value={value} type="radio" checked={checkItem === value} onChange={select} />
          <label>{label}</label>
        </RadioContainer>
      ))}
    </div>
  );

  return <>{data?.length ? renderBoxList() : null}</>;
}
