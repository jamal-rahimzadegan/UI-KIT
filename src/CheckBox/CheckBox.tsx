import React from 'react';
import { FnType } from 'types';
import { Txt } from 'components';
import { FONT_SIZES } from 'constant';
import { LIGHT_THEME } from 'assets/style/theme';
import { CheckBoxContainer } from './CheckBoxStyle';

interface CheckBoxType {
  isChecked?: boolean;
  onChangeFn: FnType;
  key?: string | number;
  label: string;
  labelColor?: keyof typeof LIGHT_THEME;
  labelSize?: keyof typeof FONT_SIZES;
}

export default function CheckBox(props: CheckBoxType): JSX.Element {
  const { label, isChecked, onChangeFn, key, labelSize, labelColor } = props;

  return (
    <CheckBoxContainer key={key} className="checkbox my-2">
      <label className="small d-flex align-items-center">
        <input className="mx-1 my-0" type="checkbox" checked={isChecked} onChange={(e) => onChangeFn(e)} />
        <Txt color={labelColor} size={labelSize}>
          {label}
        </Txt>
      </label>
    </CheckBoxContainer>
  );
}
